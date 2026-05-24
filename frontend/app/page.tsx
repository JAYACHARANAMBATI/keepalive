"use client";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
        setMessage("Your server is now protected!");
        setUrl("");
        setSubmitted(true);
      }
    } catch {
      setIsError(true);
      setMessage("Could not connect to server. Try again.");
      setSubmitted(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fafaf9] text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className="text-lg font-extrabold text-gray-900 tracking-tight">
            KeepAlive
          </span>
        </div>
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-500">
          <a
            href="#story"
            className="px-3 py-1.5 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            Story
          </a>
          <a
            href="#how"
            className="px-3 py-1.5 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#add"
            className="px-3 py-1.5 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            Add URL
          </a>
          <div className="w-px h-4 bg-gray-200 mx-2" />
          <a
            href="https://github.com/JAYACHARANAMBATI/keepalive"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-700 text-white transition-colors text-xs font-bold"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="#add"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition-colors text-xs font-bold ml-1"
          >
            Keep Alive — Free
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28 overflow-hidden min-h-[90svh] md:min-h-0">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-orange-100 rounded-full blur-3xl opacity-40 -z-10" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />

        <div className="inline-flex items-center gap-2 bg-white border border-orange-200 text-orange-600 text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 shadow-sm tracking-widest uppercase">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse inline-block" />
          <span className="hidden sm:inline">
            Open Source · Free Forever · Zero Cost
          </span>
          <span className="sm:hidden">Free Forever · Zero Cost</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.08] max-w-4xl tracking-tight px-2">
          Your Server Should <br />
          <span className="relative inline-block">
            <span className="text-orange-500">Never Sleep</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
            >
              <path
                d="M2 9 Q75 2 150 8 Q225 14 298 6"
                stroke="#f97316"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
          <span className="text-gray-900">.</span>
        </h1>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed px-2">
          Every cold start is a missed opportunity. A failed demo. A lost
          client. KeepAlive fixes that —{" "}
          <strong className="text-gray-700">
            automatically, silently, for free.
          </strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-12 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#add"
            className="group inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-orange-500 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl transition-colors duration-200 shadow-xl shadow-gray-900/20 text-sm sm:text-base w-full sm:w-auto"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Keep My Server Alive
          </a>
          <a
            href="#story"
            className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-orange-300 hover:text-orange-500 text-gray-600 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Read The Story
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-6 sm:gap-8 text-center w-full max-w-md sm:max-w-none px-4 sm:px-0">
          {[
            { value: "₹0", label: "Forever Free" },
            { value: "10 min", label: "Ping Interval" },
            { value: "0", label: "Cold Starts" },
            { value: "100%", label: "Open Source" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-xl sm:text-2xl font-black text-gray-900">
                {s.value}
              </div>
              <div className="text-xs text-gray-400 font-medium mt-1 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section
        id="story"
        className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#fafaf9]"
      >
        <div className="max-w-3xl mx-auto w-full">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs font-black text-gray-400 tracking-[0.2em] uppercase">
              The Origin Story
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Opening hook — big, bold, emotional */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-[1.15] tracking-tight mb-4">
              I got{" "}
              <span className="relative inline-block">
                <span className="relative z-10">humiliated</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-red-100 -z-0 rounded-sm" />
              </span>{" "}
              in front of my entire class.
              <br />
              <span className="text-gray-400 font-medium text-xl sm:text-2xl md:text-3xl mt-2 block">
                By a server that was asleep.
              </span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl">
              This isn&apos;t a resume project. It came from a single, specific,
              painful moment that I never want another developer to experience.
            </p>
          </div>

          {/* Story acts as a left-bordered timeline */}
          <div className="space-y-0">
            {/* ACT I */}
            <div className="relative flex gap-6 pb-12">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 ring-4 ring-[#fafaf9] z-10">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                </div>
                <div className="w-px flex-1 bg-gray-200 mt-2" />
              </div>
              <div className="flex-1 pt-1.5 pb-2">
                <p className="text-xs font-black tracking-widest text-blue-500 uppercase mb-2">
                  The Pride
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Three weeks. Sleepless nights. One dream project.
                </h3>
                <p className="text-gray-500 text-sm leading-[1.9]">
                  I built an AI-powered web app in college — not a tutorial, not
                  a copy-paste. Something I designed from scratch, rewrote four
                  times, stayed up past 2am for. When I finally deployed it to
                  Render&apos;s free tier and saw my URL live on the internet, I
                  remember staring at the screen for a full minute.{" "}
                  <strong className="text-gray-800 font-semibold">
                    I felt like I&apos;d crossed some invisible line.
                  </strong>{" "}
                  Like I&apos;d earned the right to call myself a developer.
                </p>
              </div>
            </div>

            {/* ACT II — The breaking moment */}
            <div className="relative flex gap-6 pb-12">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 ring-4 ring-[#fafaf9] z-10">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                </div>
                <div className="w-px flex-1 bg-gray-200 mt-2" />
              </div>
              <div className="flex-1 pt-1.5 pb-2">
                <p className="text-xs font-black tracking-widest text-red-500 uppercase mb-2">
                  The Silence
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Demo day. Professor watching. Nothing loads.
                </h3>
                <p className="text-gray-500 text-sm leading-[1.9] mb-5">
                  My professor stood right behind me. The class was gathered. I
                  opened the app with complete confidence — I knew every line of
                  code. I clicked the main button. And the screen just... sat
                  there. A spinner. Five seconds. Ten. Twenty.{" "}
                  <strong className="text-gray-800 font-semibold">
                    Thirty-one seconds of absolute silence
                  </strong>{" "}
                  while everyone watched. People shifted. Someone whispered. My
                  professor exhaled and moved on to the next student.
                </p>

                {/* Live browser mockup of the cold start */}
                <div className="bg-gray-950 rounded-2xl overflow-hidden shadow-xl shadow-gray-900/30">
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-xs text-gray-500 font-mono">
                      my-ai-project.onrender.com
                    </span>
                  </div>
                  <div className="px-5 py-6 flex items-start gap-4">
                    <svg
                      className="w-5 h-5 text-red-400 animate-spin mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-20"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <path
                        className="opacity-80"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    <div className="flex-1">
                      <p className="text-gray-300 text-sm font-mono mb-3">
                        Waking server from sleep mode...
                      </p>
                      <div className="space-y-2">
                        {[
                          { label: "Spinning up container", done: true },
                          { label: "Loading dependencies", active: true },
                          { label: "Starting application", done: false },
                        ].map((step) => (
                          <div
                            key={step.label}
                            className="flex items-center gap-2"
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                step.done
                                  ? "bg-green-400"
                                  : step.active
                                  ? "bg-yellow-400 animate-pulse"
                                  : "bg-gray-700"
                              }`}
                            />
                            <span
                              className={`text-xs font-mono ${
                                step.done
                                  ? "text-gray-400"
                                  : step.active
                                  ? "text-yellow-300"
                                  : "text-gray-600"
                              }`}
                            >
                              {step.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-2xl font-black text-red-400 font-mono">
                        31s
                      </div>
                      <div className="text-xs text-red-500 font-mono">
                        elapsed
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-gray-600 font-mono">
                      class watching
                    </span>
                    <span className="text-xs text-red-400 font-mono font-bold">
                      professor.sigh()
                    </span>
                  </div>
                </div>

                <p className="text-gray-900 text-sm font-semibold mt-5 pl-4 border-l-4 border-red-400 py-2">
                  Three weeks of work. Judged in one moment. Not by my code. By
                  a server that decided to nap.
                </p>
              </div>
            </div>

            {/* ACT III */}
            <div className="relative flex gap-6 pb-12">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 ring-4 ring-[#fafaf9] z-10">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div className="w-px flex-1 bg-gray-200 mt-2" />
              </div>
              <div className="flex-1 pt-1.5 pb-2">
                <p className="text-xs font-black tracking-widest text-amber-500 uppercase mb-2">
                  The Discovery
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  It wasn&apos;t my code. It was a policy I never knew existed.
                </h3>
                <p className="text-gray-500 text-sm leading-[1.9] mb-4">
                  I went home and spent hours assuming I&apos;d introduced a
                  bug. I hadn&apos;t. Buried in Render&apos;s documentation was
                  the answer:
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl px-5 py-4 mb-4">
                  <p className="text-sm text-amber-900 font-mono leading-relaxed">
                    <span className="text-amber-600 font-bold">Free tier</span>{" "}
                    services spin down after{" "}
                    <span className="text-amber-600 font-bold">
                      15 min of inactivity
                    </span>
                    . The next request causes a delay of{" "}
                    <span className="text-amber-600 font-bold">
                      up to 50 seconds
                    </span>
                    .
                  </p>
                  <p className="text-xs text-amber-400 mt-1.5">
                    — render.com docs
                  </p>
                </div>
                <p className="text-gray-500 text-sm leading-[1.9]">
                  Not a bug. A policy. Designed to make free users feel the pain
                  until they upgrade. No setting to disable it. No workaround
                  offered. Just:{" "}
                  <em className="text-gray-700">pay us, or deal with it.</em>
                </p>
              </div>
            </div>

            {/* ACT IV */}
            <div className="relative flex gap-6 pb-12">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 ring-4 ring-[#fafaf9] z-10">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="w-px flex-1 bg-gray-200 mt-2" />
              </div>
              <div className="flex-1 pt-1.5 pb-2">
                <p className="text-xs font-black tracking-widest text-orange-500 uppercase mb-2">
                  The Bigger Picture
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  This was happening to thousands of people. Every day.
                </h3>
                <p className="text-gray-500 text-sm leading-[1.9] mb-5">
                  All of them hitting the same invisible wall at the worst
                  possible moment:
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    {
                      who: "The student",
                      what: "whose grade depends on a 2-min demo",
                      color: "border-blue-100 bg-blue-50",
                    },
                    {
                      who: "The developer",
                      what: "who sends a portfolio link to a recruiter",
                      color: "border-purple-100 bg-purple-50",
                    },
                    {
                      who: "The founder",
                      what: "showing an MVP to their first investor",
                      color: "border-green-100 bg-green-50",
                    },
                    {
                      who: "The hackathon team",
                      what: "with 3 minutes left to impress judges",
                      color: "border-orange-100 bg-orange-50",
                    },
                  ].map((item) => (
                    <div
                      key={item.who}
                      className={`border rounded-xl p-3.5 ${item.color}`}
                    >
                      <p className="text-xs font-bold text-gray-900 mb-1">
                        {item.who}
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {item.what}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm leading-[1.9] mt-5">
                  Nobody had built a{" "}
                  <strong className="text-gray-900">
                    simple, free, zero-signup fix
                  </strong>{" "}
                  for any of them.
                </p>
              </div>
            </div>

            {/* ACT V — The resolution */}
            <div className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 ring-4 ring-[#fafaf9] z-10">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1 pt-1.5">
                <p className="text-xs font-black tracking-widest text-green-600 uppercase mb-2">
                  The Fix
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  So I built KeepAlive. In a weekend. Free. Forever.
                </h3>
                <p className="text-gray-500 text-sm leading-[1.9] mb-5">
                  The idea is almost embarrassingly simple — ping the server
                  every 10 minutes so it never goes idle. GitHub Actions as a
                  free cron scheduler. A plain JSON file as a zero-cost
                  database.{" "}
                  <strong className="text-gray-900">
                    The whole infrastructure costs ₹0.
                  </strong>{" "}
                  Not ₹99/month. Not a freemium trap. Literally zero — because
                  the people who need this most are exactly the people who
                  can&apos;t afford to pay for it.
                </p>
                <div className="bg-gray-900 rounded-2xl px-6 py-5 flex items-start gap-4">
                  <svg
                    className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <strong className="text-white">
                      Your hard work deserves a fair shot.
                    </strong>{" "}
                    Not a 30-second spinner. Not a professor&apos;s sigh. Not a
                    recruiter closing the tab. The first thing anyone sees when
                    they open your project should be your project — instant,
                    sharp, ready. KeepAlive makes sure of that.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Feels This Pain */}
      <section className="bg-[#f5f4f0] py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto w-full">
          {/* Header */}
          <div className="mb-10 sm:mb-16">
            <span className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-500 text-xs font-bold px-4 py-2 rounded-full mb-5 sm:mb-6 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
              Who this is for
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4 max-w-2xl">
              If you&apos;ve ever hosted something on a free tier —
              <br className="hidden sm:block" />
              <span className="text-orange-500">you&apos;ve felt this.</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Render puts your server to sleep after 15 minutes idle. No
              warning. No setting to turn it off. The next person to visit just
              waits — and usually leaves.
            </p>
          </div>

          {/* Scenario cards — written like real moments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Card 1 — Student */}
            <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                  College Student
                </span>
              </div>
              <p className="text-gray-900 font-bold text-lg leading-snug mb-3">
                &ldquo;I built an AI project for 3 weeks. Demo day, my professor
                stood right behind me. I clicked the button. Nothing loaded for
                31 seconds.&rdquo;
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                He moved on to the next student. I never got to show what I
                actually built. The code was fine. The server just woke up too
                late.
              </p>
              {/* mini terminal */}
              <div className="bg-gray-950 rounded-xl px-4 py-3.5 font-mono text-xs">
                <div className="flex gap-1.5 mb-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="text-gray-600 ml-2">demo-day.log</span>
                </div>
                <p className="text-red-400">✗ cold start — 31s</p>
                <p className="text-gray-600">→ professor moved on</p>
                <p className="text-orange-400 mt-1.5">
                  // with KeepAlive: instant
                </p>
              </div>
            </div>

            {/* Card 2 — Hackathon */}
            <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs font-bold text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                  Hackathon Team
                </span>
              </div>
              <p className="text-gray-900 font-bold text-lg leading-snug mb-3">
                &ldquo;We had 2 minutes with the judges. Our backend took 28
                seconds to respond. We spent the rest of the time explaining
                what the app was supposed to do.&rdquo;
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                They never saw the actual product. The judges were polite. The
                feedback form said "promising concept" — the diplomatic way of
                saying it didn&apos;t work.
              </p>
              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  { val: "2 min", label: "Judge window" },
                  { val: "28s", label: "Cold start" },
                  { val: "0s", label: "With KeepAlive" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-gray-50 border border-gray-100 rounded-xl py-3"
                  >
                    <div className="text-base font-black text-gray-900">
                      {s.val}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Card 3 — Portfolio */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-bold text-green-600 bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                Portfolio / Job Hunt
              </span>
              <p className="text-gray-900 font-bold text-base leading-snug mt-4 mb-2">
                The recruiter clicked the link. Waited. Closed the tab.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                You put your best project URL on your resume. They opened it
                between two other candidates. A 30-second spinner looked exactly
                like a broken project. You never heard back.
              </p>
            </div>

            {/* Card 4 — AI App */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-bold text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                AI App Demo
              </span>
              <p className="text-gray-900 font-bold text-base leading-snug mt-4 mb-2">
                Fine-tuned for a week. First demo took 40 seconds to respond.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI demos are all about the &ldquo;wow&rdquo; moment. A cold
                start kills it before it starts. The model isn&apos;t slow — the
                server just hadn&apos;t woken up yet.
              </p>
            </div>

            {/* Card 5 — SaaS */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-bold text-pink-600 bg-pink-50 border border-pink-100 px-3 py-1 rounded-full">
                SaaS MVP
              </span>
              <p className="text-gray-900 font-bold text-base leading-snug mt-4 mb-2">
                First real user. App timed out. They never came back.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                First impressions in product are everything. A person who
                experiences a broken first load doesn&apos;t give second chances
                — especially if they found you through word of mouth.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gray-900 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-white font-bold text-lg">
                None of these people did anything wrong.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                The server just fell asleep. KeepAlive keeps it awake — quietly,
                automatically, at no cost.
              </p>
            </div>
            <a
              href="#add"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Fix it now — Free
            </a>
          </div>
        </div>
      </section>

      {/* Cost Saving for Startups & Teams */}
      <section className="bg-slate-50 border-y border-gray-100 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-orange-200">
              Beyond Students
            </span>
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Startups Are Bleeding Money.
              <br />
              They Don&apos;t Have To.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Most teams don&apos;t just have one server. They have dev
              environments, staging servers, internal tools, microservices — all
              sitting idle, all costing money, all going to sleep. KeepAlive
              fixes all of them. For free.
            </p>
          </div>

          {/* Big statement */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-10 text-center shadow-sm">
            <p className="text-3xl font-black text-gray-900 leading-snug max-w-3xl mx-auto">
              A startup with 5 free-tier services wastes{" "}
              <span className="text-orange-500">₹0</span> on KeepAlive
              <br />
              vs{" "}
              <span className="text-red-400 line-through">
                ₹15,000+/month
              </span>{" "}
              on always-on paid servers.
            </p>
            <p className="text-gray-400 mt-4 text-base">
              That&apos;s runway. That&apos;s salaries. That&apos;s your next
              feature — not your infrastructure bill.
            </p>
          </div>

          {/* Use case grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {[
              {
                tag: "Dev Environment",
                tagColor: "bg-blue-50 text-blue-600 border-blue-200",
                title: "Your Dev Backend Doesn't Need a Paid Server",
                desc: "Every engineer on your team has a dev backend URL. They're all sitting on free Render/Railway instances. They all go to sleep. KeepAlive keeps all of them warm so your team never wastes 30 seconds on a cold boot during code review or testing.",
                detail: "5 devs × 1 backend each = 5 URLs protected. Cost: ₹0.",
                detailColor: "text-blue-600",
              },
              {
                tag: "Staging Environment",
                tagColor: "bg-amber-50 text-amber-600 border-amber-200",
                title: "Staging Cold Starts Kill QA Velocity",
                desc: "Your QA team opens staging every morning and waits 40 seconds for the server to wake up. That's lost focus, broken flow, wasted salary time. KeepAlive keeps staging alive 24/7 so your QA team can hit the ground running from minute one.",
                detail: "1 staging server = always ready. Cold starts: 0.",
                detailColor: "text-amber-600",
              },
              {
                tag: "Client Demos",
                tagColor: "bg-green-50 text-green-600 border-green-200",
                title: "Never Embarrass Your Startup In Front of Investors",
                desc: "You've got a meeting with an investor or a potential client. You open your product demo and the spinner of death appears. That 30-second cold start just cost you trust, credibility, and possibly the deal. KeepAlive ensures your demo is always instant.",
                detail: "One cold start can cost you a deal worth lakhs.",
                detailColor: "text-green-600",
              },
              {
                tag: "Microservices",
                tagColor: "bg-purple-50 text-purple-600 border-purple-200",
                title: "Multiple Services? Add All of Them.",
                desc: "Modern backends aren't one server — they're auth services, notification services, AI inference APIs, webhook handlers. Each lives on its own free-tier instance. Each sleeps. Add all of them to KeepAlive and every single one stays warm — still at ₹0.",
                detail: "10 microservices. 10 URLs. ₹0. Done.",
                detailColor: "text-purple-600",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm"
              >
                <span
                  className={`inline-block text-xs font-bold px-3 py-1 rounded-full border mb-4 ${item.tagColor}`}
                >
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className={`text-sm font-bold ${item.detailColor}`}>
                  {item.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">
              KeepAlive vs Paying for Always-On Servers
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-gray-400 font-semibold pb-3 pr-6">
                      What You Need
                    </th>
                    <th className="text-center text-red-400 font-semibold pb-3 px-6">
                      Without KeepAlive
                    </th>
                    <th className="text-center text-green-600 font-semibold pb-3 pl-6">
                      With KeepAlive
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    [
                      "Dev server always on",
                      "Upgrade to paid (₹2,500/mo)",
                      "Free tier + KeepAlive (₹0)",
                    ],
                    [
                      "Staging always ready",
                      "Pay for dedicated instance",
                      "Free tier + KeepAlive (₹0)",
                    ],
                    [
                      "5 microservices awake",
                      "₹12,000+/month in infra",
                      "5 URLs in KeepAlive (₹0)",
                    ],
                    [
                      "Demo always instant",
                      "Paid Render/Railway plan",
                      "Free tier + KeepAlive (₹0)",
                    ],
                    [
                      "No cold starts",
                      "Upgrade everything",
                      "One tool. All solved. (₹0)",
                    ],
                  ].map(([need, without, with_]) => (
                    <tr key={need}>
                      <td className="text-gray-700 py-3 pr-6 font-medium">
                        {need}
                      </td>
                      <td className="text-center text-red-400 py-3 px-6">
                        {without}
                      </td>
                      <td className="text-center text-green-600 py-3 pl-6 font-semibold">
                        {with_}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Two-col deep dive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-gray-950 rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-bold">urls.json</div>
                  <div className="text-gray-500 text-xs">
                    Your database. On GitHub. Free.
                  </div>
                </div>
              </div>
              <div className="text-xs font-mono leading-6">
                <span className="text-gray-500">
                  {"// github.com/JAYACHARANAMBATI/keepalive"}
                </span>
                <br />
                <span className="text-gray-400">{"["}</span>
                <br />
                <span className="text-gray-400">&nbsp;&nbsp;</span>
                <span className="text-green-400">
                  &quot;https://myapp.onrender.com&quot;
                </span>
                <span className="text-gray-400">,</span>
                <br />
                <span className="text-gray-400">&nbsp;&nbsp;</span>
                <span className="text-blue-400">
                  &quot;https://yourapp.onrender.com&quot;
                </span>
                &nbsp;<span className="text-gray-600">{"// ← just added"}</span>
                <br />
                <span className="text-gray-400">{"]"}</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                <svg
                  className="w-3.5 h-3.5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-400 text-xs">
                  No MongoDB. No PostgreSQL. No bill.
                </span>
              </div>
            </div>
            <div className="bg-gray-950 rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-bold">ping.yml</div>
                  <div className="text-gray-500 text-xs">
                    GitHub Actions — 2,000 free min/month
                  </div>
                </div>
              </div>
              <div className="text-xs font-mono leading-6">
                <span className="text-blue-400">on</span>
                <span className="text-gray-400">:</span>
                <br />
                <span className="text-gray-400">&nbsp;&nbsp;</span>
                <span className="text-blue-400">schedule</span>
                <span className="text-gray-400">:</span>
                <br />
                <span className="text-gray-400">
                  &nbsp;&nbsp;&nbsp;&nbsp;-{" "}
                </span>
                <span className="text-purple-400">cron</span>
                <span className="text-gray-400">: </span>
                <span className="text-yellow-400">
                  &quot;*/10 * * * *&quot;
                </span>
                <br />
                <span className="text-blue-400">jobs</span>
                <span className="text-gray-400">:</span>
                <br />
                <span className="text-gray-400">&nbsp;&nbsp;</span>
                <span className="text-blue-400">ping</span>
                <span className="text-gray-400">:</span>
                <br />
                <span className="text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="text-purple-400">runs-on</span>
                <span className="text-gray-400">: </span>
                <span className="text-green-400">ubuntu-latest</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                <svg
                  className="w-3.5 h-3.5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-400 text-xs">
                  Runs at 3am. Runs on weekends. Runs always.
                </span>
              </div>
            </div>
            <div className="md:col-span-2 bg-gray-950 rounded-3xl p-7">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">Ping log</div>
                    <div className="text-gray-500 text-xs">
                      Every 10 minutes, silently, in the background
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
                  <span className="text-green-400 text-xs font-semibold">
                    Live
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                {[
                  { url: "myapp.onrender.com", ms: "380ms", status: "200 OK" },
                  {
                    url: "api.mystartup.onrender.com",
                    ms: "510ms",
                    status: "200 OK",
                  },
                  {
                    url: "yourapp.onrender.com",
                    ms: "290ms",
                    status: "200 OK",
                  },
                ].map((row) => (
                  <div
                    key={row.url}
                    className="bg-white/5 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <svg
                        className="w-3 h-3 text-green-400 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-green-400 font-bold">
                        {row.status}
                      </span>
                      <span className="text-gray-500 ml-auto">{row.ms}</span>
                    </div>
                    <div className="text-gray-400 truncate">{row.url}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 text-center">
                <span className="text-gray-500 text-xs">
                  Server sees traffic → stays awake → your users see{" "}
                </span>
                <span className="text-green-400 text-xs font-bold">
                  instant response
                </span>
                <span className="text-gray-500 text-xs">
                  {" "}
                  every single time
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: "Vercel", sub: "Frontend" },
              { label: "Render", sub: "Backend" },
              { label: "GitHub", sub: "Storage" },
              { label: "GitHub Actions", sub: "Scheduler" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-2.5 shadow-sm"
              >
                <svg
                  className="w-3.5 h-3.5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <div className="text-xs font-bold text-gray-800">
                    {b.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {b.sub} · Free tier
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl px-4 py-2.5">
              <svg
                className="w-3.5 h-3.5 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>
                <div className="text-xs font-bold text-orange-700">
                  Total Cost
                </div>
                <div className="text-xs text-orange-500 font-black">
                  ₹0 / month
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add URL */}
      <section
        id="add"
        className="py-24 px-6 bg-gradient-to-b from-[#fafaf9] to-orange-50"
      >
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-orange-200">
              Take Action Now
            </span>
            <h2 className="text-5xl font-black text-gray-900">
              Protect Your Server
            </h2>
            <p className="text-gray-400 mt-3 text-lg">
              One URL. One click. No more cold starts. Ever.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl shadow-gray-200/60 p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Your Backend URL
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </div>
                    <input
                      type="url"
                      placeholder="https://yourapp.onrender.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-base transition"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 p-4 bg-gray-900 hover:bg-orange-500 text-white font-bold rounded-xl transition-colors duration-200 shadow-lg shadow-gray-900/20 text-base disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Adding your URL...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      Keep Alive — It&apos;s Free
                    </>
                  )}
                </button>
                {message && (
                  <div
                    className={`flex items-center gap-2 text-sm font-medium p-3 rounded-xl ${
                      isError
                        ? "bg-red-50 text-red-600 border border-red-100"
                        : "bg-green-50 text-green-600 border border-green-100"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      {isError ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      )}
                    </svg>
                    {message}
                  </div>
                )}
                <div className="flex items-center gap-3 pt-2">
                  {[
                    {
                      text: "No login needed",
                      path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                    },
                    {
                      text: "No credit card",
                      path: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                    },
                    { text: "₹0 forever", path: "M13 10V3L4 14h7v7l9-11h-7z" },
                  ].map((badge) => (
                    <div
                      key={badge.text}
                      className="flex items-center gap-1 text-xs text-gray-400 font-medium"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={badge.path}
                        />
                      </svg>
                      {badge.text}
                    </div>
                  ))}
                </div>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900">
                  You&apos;re Protected.
                </h3>
                <p className="text-gray-500 mt-2 leading-relaxed">
                  Your server will be pinged automatically every 10 minutes.
                  <br />
                  No cold starts. No delays. No bad impressions.
                </p>
                <div className="mt-5 bg-green-50 border border-green-100 rounded-xl px-4 py-3 text-sm text-green-600 font-medium">
                  Active · Pinging every 10 minutes · ₹0 cost
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage("");
                  }}
                  className="mt-5 text-sm text-gray-400 hover:text-orange-500 transition flex items-center gap-1 mx-auto"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Add another URL
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-14 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="font-extrabold text-lg text-gray-900">
                KeepAlive
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Built by a student who got tired of cold starts during demos. Made
              for every developer who deserves better.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-xs text-gray-400">Made with</span>
              <svg
                className="w-3.5 h-3.5 text-red-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-xs text-gray-400">by</span>
              <a
                href="https://www.linkedin.com/in/jaya-charan-ambati-901052254/"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-blue-600 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                JC — Jaya Charan Ambati
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="https://github.com/JAYACHARANAMBATI/keepalive"
              target="_blank"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jaya-charan-ambati-901052254/"
              target="_blank"
              className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm border border-blue-100"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
            <p className="text-gray-400 text-xs">Open source · Free Forever</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
