"use client";

import { Section, Heading } from "@abhishekbarve/components";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const SOCIAL_LINKS = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhishekbarve",
        icon: FaLinkedin,
    },
    {
        name: "GitHub",
        url: "https://github.com/abhishekbarve0612",
        icon: FaGithub,
    },
];

const EMAIL = "abhishek@barve.dev";

function ContactPage() {
    return (
        <Section className="space-y-12 max-w-3xl m-auto">
            <div className="space-y-4">
                <Heading.H1>Contact</Heading.H1>
                <p className="text-slate-600 dark:text-slate-300">
                    Questions about the component library or the showcase? Reach out by
                    email or connect on social platforms. I&apos;m always happy to chat about
                    design systems, React, and UI engineering.
                </p>
            </div>

            <div className="space-y-3">
                <Heading.H2>Email</Heading.H2>
                <Link
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700"
                >
                    <FaEnvelope aria-hidden />
                    {EMAIL}
                </Link>
            </div>

            <div className="space-y-4">
                <Heading.H2>Social</Heading.H2>
                <ul className="grid gap-4 sm:grid-cols-2">
                    {SOCIAL_LINKS.map((link) => (
                        <Link
                            href={link.url}
                            key={link.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 hover:scale-105 transition-all duration-300 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400"
                        >
                            <li className="group flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400" key={link.name}>
                                <link.icon className="text-2xl" aria-hidden />
                                <div>
                                    <p className="font-semibold">{link.name}</p>
                                    <p className="text-sm text-slate-500 group-hover:text-blue-500 group-hover:underline dark:text-slate-400 dark:group-hover:text-blue-300">
                                        {link.url}
                                    </p>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </Section>
    );
}

export default ContactPage;


