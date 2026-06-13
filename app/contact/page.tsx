import type { Metadata } from "next";
import { Suspense } from "react";

import { SectionHeading } from "@/components/ds/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { contact } from "@/lib/content";
import styles from "../../components/contact/contact.module.css";

export const metadata: Metadata = {
  title: "Request access",
  description: contact.lead,
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Hero — the invitation. */}
      <header className="page-hero">
        <div className="page-hero__bg" aria-hidden />
        <div className="sec sec-narrow page-hero__in">
          <Reveal>
            <SectionHeading
              size="lg"
              eyebrow={contact.eyebrow}
              title={contact.title}
              lead={contact.lead}
            />
          </Reveal>
        </div>
      </header>

      {/* 2. The branching inquiry form, kept in a comfortable reading measure. */}
      <section className="sec sec-narrow sec-y" style={{ maxWidth: 720 }}>
        <Reveal>
          <Suspense fallback={<div className={styles.fallback} aria-hidden />}>
            <ContactForm />
          </Suspense>
        </Reveal>
      </section>
    </>
  );
}
