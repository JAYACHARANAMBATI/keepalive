"use client";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-url`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) {
        setIsError(true);
        setMessage(data.detail || "Something went wrong");
      } else {
        setIsError(false);
        setMessage("✅ URL added! Your server will stay alive.");
        setUrl("");
      }
    } catch {
      setIsError(true);
      setMessage("❌ Could not connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-2">⚡ KeepAlive</h1>
      <p className="text-gray-400 mb-8 text-center">
        Prevent your free-tier server from sleeping. Paste your URL below.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
        <input
          type="url"
          placeholder="https://yourapp.onrender.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition disabled:opacity-50"
        >
          {loading ? "Adding..." : "Keep Alive 🚀"}
        </button>
      </form>

      {message && (
        <p className={`mt-4 text-sm ${isError ? "text-red-400" : "text-green-400"}`}>
          {message}
        </p>
      )}
    </main>
  );
}