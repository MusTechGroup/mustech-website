"use client";

import { useExample } from "@/components/JumpstartExamples";

// How work moves through a Jumpstart workspace: departments do the work, the founder checks it, then it goes out.
// Departments and levels come from the Jumpstart calibration run on the selected example business.

const NODE_W = 340;
const NODE_H = 58;
const GAP = 28;
// Ball colours: yellow is routine, blue is an update, red is urgent. Green is what leaves once you have checked it.
const Y = "#f5cb1d";
const B = "#5B9BFF";
const R = "#F2506A";
const OUT = "#34D399";
const MIX = [Y, Y, B, Y, Y, Y, B, Y, R, Y, B, Y, Y, Y, Y, B, Y, Y, Y, B];
const mixFrom = (n: number) => [...MIX.slice(n), ...MIX.slice(0, n)];
const GATE = { x: 610, y: 20 + (6 * NODE_H + 5 * GAP) / 2, r: 64 };

export default function JumpstartFlow() {
  const { example } = useExample();
  const DEPTS = example.departments;
  const top = (i: number) => 20 + i * (NODE_H + GAP);
  return (
    <figure className="m-0" key={example.id}>
      <ul className="sm:hidden border border-white/15 divide-y divide-white/10 text-sm text-[#efe9d8]">
        {DEPTS.map((d) => (
          <li key={d.name} className="js-node flex items-baseline justify-between gap-3 px-3 py-2">
            <span className="font-semibold">{d.name}</span>
          </li>
        ))}
        <li className="flex items-center justify-between px-3 py-2 bg-[#f5cb1d] text-[#111] font-bold">
          <span>You check it</span>
          <span>Out</span>
        </li>
      </ul>
      <svg
        viewBox="0 0 880 560"
        role="img"
        aria-label={`Six of ${example.person}'s ${example.installed} departments do the work. Every piece of work passes through you before it goes out.`}
        className="hidden sm:block w-full h-auto"
      >
        {DEPTS.map((d, i) => {
          const y = top(i) + NODE_H / 2;
          return (
            <path
              key={d.name}
              id={`flow-p${i}`}
              d={`M${NODE_W},${y} C ${NODE_W + 130},${y} ${GATE.x - GATE.r - 130},${GATE.y} ${GATE.x - GATE.r},${GATE.y}`}
              fill="none"
              stroke="#4a473f"
              strokeWidth="2"
            />
          );
        })}
        <path id="flow-out" d={`M${GATE.x + GATE.r},${GATE.y} L 780,${GATE.y}`} fill="none" stroke={OUT} strokeWidth="2" />

        {DEPTS.map((d, i) => (
          <g key={d.name} className="js-node" style={{ animationDelay: `${i * 70}ms` }}>
            <rect x="1" y={top(i)} width={NODE_W} height={NODE_H} fill="#0b0b0a" stroke="#efe9d8" strokeOpacity="0.45" strokeWidth="2" />
            <text x="18" y={top(i) + 36} fill="#efe9d8" fontSize="20" fontWeight="700" className="font-brand">
              {d.name}
            </text>
            {[0, 1].map((k) => {
              const begin = `${i * 0.8 + k * 2.4}s`;
              const colors = mixFrom((i * 3 + k * 7) % MIX.length);
              return (
                <circle key={k} className="flow-dot" r="7" fill={colors[0]} opacity="0">
                  <set attributeName="opacity" to="1" begin={begin} />
                  <animate attributeName="fill" values={colors.join(";")} calcMode="discrete" dur={`${4.8 * colors.length}s`} begin={begin} repeatCount="indefinite" />
                  <animateMotion dur="4.8s" begin={begin} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                    <mpath href={`#flow-p${i}`} />
                  </animateMotion>
                </circle>
              );
            })}
          </g>
        ))}

        {/* The founder: every piece of work stops here */}
        <circle cx={GATE.x} cy={GATE.y} r={GATE.r} fill="#f5cb1d" />
        <circle className="flow-dot" cx={GATE.x} cy={GATE.y} r={GATE.r} fill="none" stroke="#f5cb1d" strokeWidth="3">
          <animate attributeName="r" values={`${GATE.r};${GATE.r + 34}`} dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <text x={GATE.x} y={GATE.y - 2} textAnchor="middle" fill="#111" fontSize="30" fontWeight="700" className="font-brand">
          You
        </text>
        <text x={GATE.x} y={GATE.y + 24} textAnchor="middle" fill="#111" fontSize="15" fontWeight="700">
          check it
        </text>

        <circle className="flow-dot" r="8" fill={OUT} opacity="0">
          <set attributeName="opacity" to="1" begin="1.2s" />
          <animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
            <mpath href="#flow-out" />
          </animateMotion>
        </circle>
        <text x="788" y={GATE.y + 6} fill="#efe9d8" fontSize="20" fontWeight="700" className="font-brand">
          Out
        </text>
      </svg>
    </figure>
  );
}
