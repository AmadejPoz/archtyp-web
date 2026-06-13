import type { Metadata } from "next";

import { SectionHeading } from "@/components/ds/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How ARCHTYP handles recognition, memory and the data the mind encounters. Privacy is a feature of the architecture, not a policy added at the end.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="page-hero">
        <div className="page-hero__bg" aria-hidden />
        <div className="sec sec-narrow page-hero__in">
          <Reveal>
            <SectionHeading
              size="lg"
              eyebrow="Legal"
              title="Privacy"
              lead="Recognition makes service feel human. It can also be misused. We treat privacy as a design constraint, built into the architecture rather than bolted on at the end."
            />
          </Reveal>
        </div>
      </header>

      <section className="sec sec-narrow sec-y">
        <Reveal>
          <div className="prose">
            <p>
              This page explains, in plain terms, what the mind sees, what it keeps, and the choices
              you have. It is written for the people who meet our robots and for the operators who
              deploy them.
            </p>

            <h2>What we collect</h2>
            <p>
              We process only what an interaction needs. That can include presence and facial
              signals used to recognize a returning guest, the words spoken to the robot, and the
              context of the request. Operators may also share business data through their own
              systems so the mind can answer accurately.
            </p>

            <h2>Recognition at the edge</h2>
            <p>
              Recognition runs on the device, in milliseconds, rather than in the cloud. The mind can
              tell a member from a visitor without sending a face to a distant server. Where cloud
              processing is genuinely required, it is the exception and it is disclosed.
            </p>

            <h2>Memory and retention</h2>
            <p>
              Memory is what makes the next encounter start further along than the last. We keep it
              only where it is welcome, for as long as it stays useful, and we let operators set the
              boundaries for their own sites. When memory is no longer needed, it is removed.
            </p>

            <h2>Your choices</h2>
            <p>
              You can ask what the mind remembers about you, ask for it to be corrected, and ask for
              it to be forgotten. Operators are responsible for honoring these requests in their
              spaces, and we give them the tools to do so.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about privacy, or a request about your own data, can reach a person through
              our <a href="/contact?intent=other">contact page</a>. We read every message ourselves.
            </p>

            <p>
              <em>
                This is placeholder copy pending legal review. It describes our intent and is not yet
                a binding privacy policy.
              </em>
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
