"use client";

import CountUp from "react-countup";

export default function StatsCounter() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
      <div className="flex-1 rounded-2xl border bg-indigo-300 p-4 shadow">
        <h3 className="mb-2 font-heading text-5xl text-neutral-100">
          <CountUp end={6} duration={3} />
        </h3>
        <p>locations - and more to come</p>
      </div>
      <div className="flex-1 rounded-2xl border bg-indigo-300 p-4 shadow">
        <h3 className="mb-2 font-heading text-5xl text-neutral-100">
          <CountUp end={300} duration={4} />
        </h3>
        <p>over 300 employees nationwide</p>
      </div>
      <div className="flex-1 rounded-2xl border bg-indigo-300 p-4 shadow">
        <h3 className="mb-2 font-heading text-5xl text-neutral-100">
          <CountUp end={50000} duration={5} />
        </h3>
        <p>and more followers on socials</p>
      </div>
    </div>
  );
}
