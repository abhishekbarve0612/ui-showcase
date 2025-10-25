"use client";

import React from "react";
import {
  Section,
} from "@abhishekbarve/components";
import Link from "next/link";
function Page() {
  return (
    <Section className="space-y-8 flex flex-row items-start gap-4">
      <Link href="/modal" className="text-blue-500 hover:text-blue-700">Modal Demo</Link>
      <Link href="/chat" className="text-blue-500 hover:text-blue-700">Chat Demo</Link>
    </Section>
  );
}

export default Page;