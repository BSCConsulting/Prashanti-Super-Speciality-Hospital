"use client";

import { MessageCircle, Phone } from "lucide-react";
import { HOSPITAL } from "@/lib/data";

/** Fixed Call | WhatsApp bar — mobile only, sits above chatbot FAB. */
export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[55] border-t border-forest/20 bg-forest-deep/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2 pr-16">
        <a
          href={`tel:${HOSPITAL.emergencyMobileTel}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emergency py-3 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call
        </a>
        <a
          href={HOSPITAL.whatsappEnquire}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-copper py-3 text-sm font-semibold text-forest-deep"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
