"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { FaqItem } from "@/lib/faq";

export function FaqList({ items }: { items: FaqItem[] }) {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id].filter(Boolean));
  const baseId = useId();

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item) => {
        const open = openIds.includes(item.id);
        const panelId = `${baseId}-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-navy md:px-6"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() =>
                  setOpenIds((current) =>
                    current.includes(item.id)
                      ? current.filter((id) => id !== item.id)
                      : [...current, item.id],
                  )
                }
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden" inert={!open} aria-hidden={!open}>
                <div className="space-y-3 px-5 pb-5 text-sm leading-6 text-muted md:px-6">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {item.links?.length ? (
                    <ul className="space-y-1 pt-1">
                      {item.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-dark underline-offset-4 hover:underline"
                          >
                            {link.label}
                            <span className="sr-only"> (opnast í nýjum glugga)</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
