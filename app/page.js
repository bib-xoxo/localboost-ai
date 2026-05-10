"use client";

import { useState } from "react";

export default function Home() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [city, setCity] = useState("");
  const [generated, setGenerated] = useState(false);

  const services = [
    "Consultation",
    "Premium Service",
    "Customer Support",
    "Quick Booking",
  ];

  function generatePage() {
    if (!businessName || !businessType || !city) {
      alert("Please fill all fields");
      return;
    }

    setGenerated(true);
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="inline-block border border-zinc-700 rounded-full px-4 py-2 text-sm text-zinc-300 mb-6">
            Booking + WhatsApp System
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            LocalBoost AI
          </h1>

          <p className="text-zinc-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Create a modern booking page for your local business in seconds.
            Help customers discover your services, contact you on WhatsApp,
            and book appointments online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-8">
              Generate Your Business Page
            </h2>

            <div className="space-y-5">
              <div>
                <label className="text-sm text-zinc-400">
                  Business Name
                </label>

                <input
                  type="text"
                  placeholder="Glow Studio"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full mt-2 bg-black border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400">
                  Business Type
                </label>

                <input
                  type="text"
                  placeholder="Salon / Repair Shop / Trainer"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full mt-2 bg-black border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-400">
                  City
                </label>

                <input
                  type="text"
                  placeholder="Mumbai"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full mt-2 bg-black border border-zinc-700 rounded-2xl px-4 py-3 outline-none focus:border-white"
                />
              </div>

              <button
                onClick={generatePage}
                className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:scale-[1.02] transition"
              >
                Generate Booking Page
              </button>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            {!generated ? (
              <div className="h-full flex items-center justify-center text-center text-zinc-500">
                Your generated business page preview will appear here.
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-4xl font-black">
                      {businessName}
                    </h2>

                    <p className="text-zinc-400 mt-2">
                      {businessType} • {city}
                    </p>
                  </div>

                  <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                    Open Now
                  </div>
                </div>

                <div className="bg-black border border-zinc-800 rounded-3xl p-6">
                  <h3 className="text-2xl font-bold mb-5">
                    Services
                  </h3>

                  <div className="space-y-4">
                    {services.map((service, i) => (
                      <div
                        key={i}
                        className="flex justify-between bg-zinc-900 rounded-2xl px-4 py-4"
                      >
                        <span>{service}</span>

                        <span className="text-zinc-400">
                          Book Now
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-black border border-zinc-800 rounded-3xl p-6">
                    <div className="text-zinc-400 text-sm mb-2">
                      Opening Hours
                    </div>

                    <div className="text-xl font-bold">
                      10 AM – 9 PM
                    </div>
                  </div>

                  <div className="bg-black border border-zinc-800 rounded-3xl p-6">
                    <div className="text-zinc-400 text-sm mb-2">
                      WhatsApp
                    </div>

                    <div className="text-xl font-bold">
                      Chat Instantly
                    </div>
                  </div>
                </div>

                <button className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:scale-[1.02] transition">
                  Book Appointment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}