"use client";

import { useState } from "react";

export default function Home() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [generated, setGenerated] = useState(null);

  function generateWebsite() {
    const name = businessName.trim();
    const type = businessType.trim();

    if (!name || !type) return;

    setGenerated({
      name,
      type,
    });
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">

        <h1 className="text-4xl font-bold mb-2">LocalBoost AI</h1>
        <p className="text-zinc-400 mb-8">
          Generate a simple website preview for your business
        </p>

        {/* INPUTS */}
        <div className="space-y-4">
          <input
            className="w-full p-3 rounded bg-zinc-900 border border-zinc-700"
            placeholder="Business Name (e.g. Glow Salon)"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />

          <input
            className="w-full p-3 rounded bg-zinc-900 border border-zinc-700"
            placeholder="Business Type (e.g. Salon, Gym)"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          />

          <button
            onClick={generateWebsite}
            className="w-full bg-white text-black py-3 rounded font-bold hover:opacity-90 transition"
          >
            Generate Website
          </button>
        </div>

        {/* OUTPUT */}
        {generated && (
          <div className="mt-10 p-6 bg-zinc-900 rounded-xl border border-zinc-700">
            <h2 className="text-2xl font-bold">
              {generated.name}
            </h2>

            <p className="text-zinc-400 mt-2">
              A modern website for a {generated.type.toLowerCase()} business
            </p>

            <div className="mt-4 text-green-400">
              ✔ Website generated successfully (demo version)
            </div>
          </div>
        )}

      </div>
    </main>
  );
}