import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px", fontFamily: "sans-serif" }}>
      
      <h1 style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center", marginBottom: "10px" }}>
        Get Professional Drone Services Near You
      </h1>

      <p style={{ textAlign: "center", color: "#666", marginBottom: "20px" }}>
        Fast, reliable aerial inspections for roofing, solar, and construction.
      </p>

      {!submitted ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          style={{ width: "100%", maxWidth: "320px", display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input placeholder="Full Name" required style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "6px" }} />
          <input placeholder="Phone Number" required style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "6px" }} />
          <input placeholder="ZIP Code" required style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "6px" }} />

          <button style={{ background: "black", color: "white", padding: "12px", borderRadius: "6px", fontWeight: "bold" }}>
            Get My Free Quote →
          </button>
        </form>
      ) : (
        <p style={{ color: "green", marginTop: "20px" }}>
          Thanks! We'll contact you shortly.
        </p>
      )}

    </main>
  );
}