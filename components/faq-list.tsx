'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/site-data';

export default function FaqList() {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {faqs.map((f, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="rounded-xl border border-white/10 bg-ink-900/50 px-5 transition-colors hover:border-volt-500/40 data-[state=open]:border-volt-500/50"
        >
          <AccordionTrigger className="text-left font-display text-base font-bold text-white hover:no-underline">
            {f.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-white/60">
            {f.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
