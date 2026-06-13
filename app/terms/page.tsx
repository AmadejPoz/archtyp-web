import type { Metadata } from "next";

import { SectionHeading } from "@/components/ds/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "The terms that govern access to ARCHTYP, the INDUIT platform and the cognitive layer. Plain, fair, and written to be understood.",
};

export default function TermsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="page-hero__bg" aria-hidden />
        <div className="sec sec-narrow page-hero__in">
          <Reveal>
            <SectionHeading
              size="lg"
              eyebrow="Legal"
              title="Terms"
              lead="The agreement between you and ARCHTYP when you use our site, request access, or run the cognitive layer on your fleet. We aim to keep it short and fair."
            />
          </Reveal>
        </div>
      </header>

      <section className="sec sec-narrow sec-y">
        <Reveal>
          <div className="prose">
            <p>
              By using this site or the ARCHTYP platform you agree to these terms. If you are
              accepting on behalf of a company, you confirm you have the authority to do so.
            </p>

            <h2>Use of the service</h2>
            <p>
              We grant you a limited right to use the platform for your own operations. You agree to
              use it lawfully, to respect the people the mind interacts with, and not to attempt to
              reverse engineer or disrupt the service.
            </p>

            <h2>Accounts and access</h2>
            <p>
              Access is granted at our discretion and may be subject to a pilot or a separate
              commercial agreement. You are responsible for keeping your credentials secure and for
              activity that happens under your account.
            </p>

            <h2>Intellectual property</h2>
            <p>
              ARCHTYP, the cognitive layer and the INDUIT platform, including the software, models
              and brand, remain ours. You keep ownership of the business data you bring to the
              platform.
            </p>

            <h2>Availability and changes</h2>
            <p>
              We work to keep the service running reliably, but we do not promise it will be
              uninterrupted. We may update the platform and these terms over time, and we will give
              reasonable notice of material changes.
            </p>

            <h2>Liability</h2>
            <p>
              The service is provided as is. To the extent the law allows, our liability is limited,
              and we are not responsible for indirect or consequential losses. Nothing here removes
              rights that cannot be waived.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can reach a person through our{" "}
              <a href="/contact?intent=other">contact page</a>.
            </p>

            <p>
              <em>
                This is placeholder copy pending legal review. It is not yet a binding agreement.
              </em>
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
