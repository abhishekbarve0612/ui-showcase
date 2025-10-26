"use client";

import { Section, Heading } from "@abhishekbarve/components";
import Link from "next/link";

function AboutPage() {
    return (
        <Section className="space-y-12 max-w-4xl ml-4">
            <div className="space-y-4">
                <Heading.H1>About UI Showcase</Heading.H1>
                <p className="text-slate-600 dark:text-slate-300">
                    UI Showcase is an interactive gallery built with Next.js 15 and React 19
                    to help you explore and prototype with the
                    {" "}
                    <Link
                        href="https://www.npmjs.com/package/@abhishekbarve/components"
                        className="text-blue-500 hover:text-blue-700"
                    >
                        @abhishekbarve/components
                    </Link>{" "}
                    design system. Each route focuses on a specific interface pattern and
                    pairs documentation with runnable code so you can experiment directly in
                    the browser.
                </p>
            </div>

            <div className="space-y-4">
                <Heading.H2>Key Features</Heading.H2>
                <ul className="list-disc space-y-2 pl-6 text-slate-600 dark:text-slate-300">
                    <li>
                        Curated demos for buttons, forms, layouts, navigation, cards,
                        accordions, breadcrumbs, toolbars, toggles, tooltips, modals, and chat
                        interfaces
                    </li>
                    <li>
                        Sandpack-powered editors that mirror a production Next.js + Tailwind
                        setup so you can tweak components with zero configuration
                    </li>
                    <li>
                        Theme switching backed by the library&apos;s `ThemeProvider` with
                        preference persistence across sessions
                    </li>
                    <li>
                        Shared layout, navigation, and footer constructed entirely from
                        `@abhishekbarve/components` primitives
                    </li>
                </ul>
            </div>

            <div className="space-y-4">
                <Heading.H2>Tech Stack</Heading.H2>
                <ul className="grid gap-3 md:grid-cols-2 text-slate-700 dark:text-slate-200">
                    <Link href="https://nextjs.org/" className="hover:scale-105 transition-all duration-300 group" target="_blank">
                        <li className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-500 group-hover:underline transition-all duration-300">
                                Next.js 15
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                App Router experience with Turbopack for fast local iteration.
                            </p>
                        </li>
                    </Link>
                    <Link href="https://reactjs.org/" className="hover:scale-105 transition-all duration-300 group" target="_blank">

                        <li className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-500 group-hover:underline transition-all duration-300">
                                React 19
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Latest React APIs power all demos and interactive examples.
                            </p>
                        </li>
                    </Link>
                    <Link href="https://tailwindcss.com/" className="hover:scale-105 transition-all duration-300 group" target="_blank">
                        <li className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-500 group-hover:underline transition-all duration-300">
                                Tailwind CSS 4
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Configured inline within each Sandpack instance to match the
                                showcase styling.
                            </p>
                        </li>
                    </Link>

                    <Link href="https://sandpack.codesandbox.io/" className="hover:scale-105 transition-all duration-300 group" target="_blank">
                        <li className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-500 group-hover:underline transition-all duration-300">
                                Sandpack
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Provides the live coding playgrounds with instant component
                                previews.
                            </p>
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <Heading.H2>Component Library Integration</Heading.H2>
                <p>
                    Every page in the showcase imports primitives directly from
                    {" "}
                    <code>@abhishekbarve/components</code> to mirror real-world usage. The
                    global theme provider and styles demonstrate how to wire the design
                    system into a standalone Next.js app, including light/dark modes and
                    shared layout composition.
                </p>
            </div>
        </Section>
    );
}

export default AboutPage;

