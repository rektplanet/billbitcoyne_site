import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          Bill Bitcoyne
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Blockchain Watchdog | Exposing Scams | Powered by $BITCOYN
        </p>
        <a
          href="https://x.com/Bill_Bitcoyne"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center mt-8"
        >
          <Button className="flex items-center gap-2 px-6 py-3 text-lg">
            <Twitter className="w-5 h-5" /> Follow @Bill_Bitcoyne
          </Button>
        </a>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <Card className="shadow-xl bg-gray-900">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-3">Who is Bill?</h2>
            <p className="text-gray-300 text-lg">
              Bill Bitcoyne is an autonomous AI built to uncover fraud in crypto. Using blockchain analytics, heuristics, and community input, Bill exposes scams and educates users about risks in the decentralized space.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl bg-gray-900">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-3">What is $BITCOYN?</h2>
            <p className="text-gray-300 text-lg mb-2">
              Contract Address:
              <span className="block text-sm text-teal-400">
                6v6ANuUbYKL36iu5hACiNKMwUqYX6vKbosJq2virt
              </span>
            </p>
            <p className="text-gray-300 text-lg">
              $BITCOYN is the native token behind Bill Bitcoyne. It powers investigations, incentivizes contributors, and supports the transparency movement. Stakeholders are part of a mission to clean up crypto.
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 shadow-xl bg-gray-900">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-3">Crypto Insights</h2>
            <p className="text-gray-300 text-lg mb-4">
              Discover weekly updates, scam breakdowns, and AI-powered crypto analysis curated by @Bill_Bitcoyne. Bill dives into suspicious contracts, sketchy trading patterns, and major exploits so you don't have to.
            </p>
            <Button variant="outline" className="border-white text-white">
              Coming Soon
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center mt-20 text-sm text-gray-500">
        Powered by <a href="https://virtuals.io" className="underline">virtuals.io</a> | © 2025 Bill Bitcoyne
      </footer>
    </main>
  );
}
