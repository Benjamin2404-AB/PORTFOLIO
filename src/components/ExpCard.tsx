import { useState } from 'react';
import { experience } from '../experience';

export default function ExpCard() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto px-4 sm:px-0">
      {experience.map((exp, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-xl border border-gray-800 bg-[#121212] overflow-hidden transition-all duration-300"
          >
            {/* Header row — always visible */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left group hover:bg-white/[0.03] transition-colors duration-200"
            >
              <div className="flex flex-col gap-0.5 w-full sm:w-auto">
                <span className="text-sm sm:text-[15px] font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                  {exp.role}
                </span>
                <span className="text-purple-400 text-xs sm:text-sm font-semibold">
                  {exp.company}
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-0 flex-shrink-0">
                {/* Date pill */}
                <span className="text-xs font-medium text-purple-300 px-2 py-1 sm:px-3 sm:py-1">
                  {exp.startDate} – {exp.endDate}
                </span>

                {/* Chevron */}
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Accordion body */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="border-t border-gray-800 px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-2">
                {/* Mobile date */}
                <p className="text-[#a0aab2] text-xs mb-1 sm:hidden">
                  {exp.startDate} – {exp.endDate} · {exp.location}
                </p>
                <p className="text-[#a0aab2] text-xs mb-1 hidden sm:block">{exp.location}</p>

                <ul className="flex flex-col gap-2">
                  {exp.responsibilities.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[#a0aab2] text-sm sm:text-base leading-relaxed"
                    >
                      <span className="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}