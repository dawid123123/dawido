import { ExternalLink } from "lucide-react";
import type { SourceLink } from "@/lib/sources";

export function SourceList({ sources }: { sources: SourceLink[] }) {
  return (
    <ul className="space-y-2">
      {sources.map((source) => (
        <li key={source.href}>
          <a
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-2 text-brand-dark underline-offset-4 hover:underline"
          >
            <ExternalLink aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
            <span>
              {source.label}
              <span className="sr-only"> (opnast í nýjum glugga)</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
