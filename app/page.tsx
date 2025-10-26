"use client";

import React from "react";
import {
  Section,
  Heading,
} from "@abhishekbarve/components";
import Link from "next/link";
function Page() {
  return (
    <Section className="space-y-8 flex flex-col items-start gap-4 ml-4">
      <Heading.H3>Basic Components</Heading.H3>
      <div className="flex flex-row gap-6">
        <Link href="/buttons" className="text-blue-500 hover:text-blue-700">Buttons</Link>
        <Link href="/forms" className="text-blue-500 hover:text-blue-700">Forms</Link>
      </div>

      <Heading.H3>Layout Components</Heading.H3>
      <div className="flex flex-row gap-6">
        <Link href="/layouts" className="text-blue-500 hover:text-blue-700">Layouts</Link>
        <Link href="/navbars" className="text-blue-500 hover:text-blue-700">Navbars</Link>
        <Link href="/sidebars" className="text-blue-500 hover:text-blue-700">Sidebars</Link>
        <Link href="/cards" className="text-blue-500 hover:text-blue-700">Cards</Link>
      </div>
      <Heading.H3>Utility Components</Heading.H3>
      <div className="flex flex-row gap-6">
        <Link href="/toolbars" className="text-blue-500 hover:text-blue-700">Toolbars</Link>
        <Link href="/toggles" className="text-blue-500 hover:text-blue-700">Toggles</Link>
        <Link href="/tooltips" className="text-blue-500 hover:text-blue-700">Tooltips</Link>
        <Link href="/accordions" className="text-blue-500 hover:text-blue-700">Accordions</Link>
        <Link href="/breadcrumbs" className="text-blue-500 hover:text-blue-700">Breadcrumbs</Link>
      </div>
      <Heading.H3>Complex Components</Heading.H3>
      <div className="flex flex-row gap-6">
        <Link href="/chat" className="text-blue-500 hover:text-blue-700">Chat</Link>
        <Link href="/modal" className="text-blue-500 hover:text-blue-700">Modal</Link>
      </div>
    </Section>
  );
}

export default Page;