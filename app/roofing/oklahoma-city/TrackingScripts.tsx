"use client";

import { useEffect, useRef } from "react";

/**
 * GTM (→ GA4 + Google Ads) + Meta Pixel loader with a selectable trigger.
 *
 * Single source of truth for both tags' inline snippets. Injected client-side
 * so we control exactly WHEN the heavy third-party JS executes:
 *
 *   mode="idle"        — load at browser idle (requestIdleCallback), ~1-2s after
 *                        load. Used on the calls-only landing page so GTM is
 *                        ready before a visitor taps the click-to-call button
 *                        (the Google Ads tel: conversion trigger needs GTM
 *                        already initialized when the click happens).
 *
 *   mode="interaction" — hold the tags until the first real user interaction
 *                        (scroll / tap / key / pointer), with a fallback timer
 *                        so idle-but-present visitors still get tracked. Used on
 *                        the /quote survey page to pull the tags' execution out
 *                        of the initial load window (big Total-Blocking-Time
 *                        win). The survey requires interaction to complete, so
 *                        the tags are loaded well before any submission.
 *
 * The <noscript> fallbacks for both tags live in layout.tsx and render
 * regardless of JS, so no-JS visitors are unaffected by this gating.
 */

const GTM_CODE = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-54RJ95RD');`;

const PIXEL_CODE = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1165749681766347');
fbq('track', 'PageView');`;

type Props = { mode?: "idle" | "interaction" };

export default function TrackingScripts({ mode = "idle" }: Props) {
  const loadedRef = useRef(false);

  useEffect(() => {
    const inject = (id: string, code: string) => {
      if (document.getElementById(id)) return;
      const el = document.createElement("script");
      el.id = id;
      el.textContent = code;
      document.head.appendChild(el);
    };

    const load = () => {
      if (loadedRef.current) return;
      loadedRef.current = true;
      inject("gtm-head", GTM_CODE);
      inject("meta-pixel", PIXEL_CODE);
    };

    if (mode === "idle") {
      const w = window as unknown as {
        requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      };
      if (typeof w.requestIdleCallback === "function") {
        const id = w.requestIdleCallback(load, { timeout: 2500 });
        return () => w.cancelIdleCallback?.(id);
      }
      const t = setTimeout(load, 1500);
      return () => clearTimeout(t);
    }

    // mode === "interaction": first user interaction wins; otherwise a fallback
    // timer fires so a visitor who never interacts is still counted. The timer
    // is long enough to sit past the shell's Time-to-Interactive, so on a
    // no-interaction Lighthouse run the tags don't land inside the TBT window.
    const events: (keyof WindowEventMap)[] = [
      "scroll",
      "pointerdown",
      "touchstart",
      "keydown",
      "mousemove",
      "wheel",
    ];
    let timer: ReturnType<typeof setTimeout>;
    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, onFirst));
      clearTimeout(timer);
    };
    const onFirst = () => {
      cleanup();
      load();
    };
    events.forEach((e) =>
      window.addEventListener(e, onFirst, { once: true, passive: true })
    );
    timer = setTimeout(() => {
      cleanup();
      load();
    }, 5000);
    return cleanup;
  }, [mode]);

  return null;
}
