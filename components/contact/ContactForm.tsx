"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ds/Button";
import { Card } from "@/components/ds/Card";
import { Input } from "@/components/ds/Input";
import { Check } from "@/components/ds/icons";
import { contact } from "@/lib/content";
import type { LeadIntent } from "@/lib/crm";
import { cn } from "@/lib/utils";
import styles from "./contact.module.css";

/* The set of intent values offered on this page, derived from content so the
   zod enum and the picker can never drift apart. */
const INTENT_VALUES = contact.intents.map((i) => i.value) as [LeadIntent, ...LeadIntent[]];
const DEFAULT_INTENT: LeadIntent = contact.intents[0].value;

const FLEET_OPTIONS: { value: string; label: string }[] = [
  { value: "", label: "Select a range" },
  { value: "1 to 5", label: "1 to 5" },
  { value: "6 to 25", label: "6 to 25" },
  { value: "26 to 100", label: "26 to 100" },
  { value: "100+", label: "100+" },
];

/* Form schema. Email is the only required field; everything else is optional.
   The honeypot must stay empty (length 0) for a real submission. */
const schema = z.object({
  intent: z.enum(INTENT_VALUES),
  name: z.string().max(120).optional(),
  email: z.string().min(1, "Enter your email.").email("Enter a valid email."),
  company: z.string().max(160).optional(),
  role: z.string().max(120).optional(),
  message: z.string().max(4000).optional(),
  fleetSize: z.string().max(80).optional(),
  hardware: z.string().max(200).optional(),
  company_website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("intent") ?? "";
  const initialIntent: LeadIntent = INTENT_VALUES.includes(requested as LeadIntent)
    ? (requested as LeadIntent)
    : DEFAULT_INTENT;

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      intent: initialIntent,
      name: "",
      email: "",
      company: "",
      role: "",
      message: "",
      fleetSize: "",
      hardware: "",
      company_website: "",
    },
  });

  const intent = watch("intent");
  const selected = contact.intents.find((i) => i.value === intent) ?? contact.intents[0];
  const isDeploy = intent === "deploy";

  async function onSubmit(values: FormValues) {
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: "contact" }),
      });
      const data: { ok?: boolean; error?: string } = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("success");
        return;
      }
      setStatus("error");
      setErrorMessage(data.error ?? "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setErrorMessage("We could not reach the server. Check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <Card accentEdge glow className={cn("atp-card--accent", styles.success)}>
        <span className={styles.successMark} aria-hidden>
          <Check width={26} height={26} />
        </span>
        <h2 className={styles.successTitle}>{contact.success.title}</h2>
        <p className={styles.successBody}>{contact.success.body}</p>
      </Card>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Intent picker — a segmented set of selectable cards, not a dropdown. */}
      <div className={styles.block}>
        <span className={styles.fieldsetLabel} id="intent-label">
          What brings you here
        </span>
        <div className={styles.intents} role="group" aria-labelledby="intent-label">
          {contact.intents.map((option) => {
            const isActive = option.value === intent;
            return (
              <button
                key={option.value}
                type="button"
                className={styles.intent}
                aria-pressed={isActive}
                onClick={() =>
                  setValue("intent", option.value, { shouldDirty: true, shouldValidate: true })
                }
              >
                <span className={styles.intentDot} aria-hidden />
                <span className={styles.intentLabel}>{option.label}</span>
              </button>
            );
          })}
        </div>
        <p className={styles.intentHint} aria-live="polite">
          {selected.hint}
        </p>
      </div>

      {/* Core fields */}
      <div className={cn(styles.block, styles.grid)}>
        <Input label="Name" autoComplete="name" placeholder="Your name" {...register("name")} />
        <Input
          label="Email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Company"
          autoComplete="organization"
          placeholder="Where you work"
          {...register("company")}
        />
        <Input
          label="Role"
          autoComplete="organization-title"
          placeholder="Your job title"
          {...register("role")}
        />
      </div>

      {/* Conditional fields — only relevant when deploying robots. */}
      {isDeploy && (
        <div className={cn(styles.block, styles.grid)}>
          <Input
            label="Fleet size"
            hint="How many robots you run, or plan to."
            options={FLEET_OPTIONS}
            {...register("fleetSize")}
          />
          <Input
            label="Hardware"
            placeholder="Temi, Keenon, Unitree, Pudu…"
            hint="The robots you deploy today."
            {...register("hardware")}
          />
        </div>
      )}

      {/* Message */}
      <div className={styles.block}>
        <Input
          label="Message"
          multiline
          rows={5}
          placeholder="Tell us what you want the mind to do, and where it should work."
          {...register("message")}
        />
      </div>

      {/* Honeypot — present in the form, never shown to a human. */}
      <div className={styles.honeypot} aria-hidden>
        <Input
          label="Company website"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_website")}
        />
      </div>

      <div className={styles.actions}>
        <Button type="submit" variant="primary" arrow disabled={submitting}>
          {submitting ? "Sending…" : "Request access"}
        </Button>
        <p className={styles.formNote}>We reply from a person, usually within two working days.</p>
      </div>

      {status === "error" && (
        <p className={styles.formError} role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
