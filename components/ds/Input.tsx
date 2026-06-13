"use client";

import { forwardRef, useId } from "react";
import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Option = string | { value: string; label: string };

interface BaseFieldProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  multiline?: boolean;
  options?: Option[];
  className?: string;
}

type FieldProps = BaseFieldProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  Partial<TextareaHTMLAttributes<HTMLTextAreaElement>> &
  Partial<SelectHTMLAttributes<HTMLSelectElement>>;

/** Labeled field. `multiline` renders a textarea; `options` renders a select. */
export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, FieldProps>(
  function Input({ label, hint, error, required, multiline, options, className, id, ...rest }, ref) {
    const autoId = useId();
    const fieldId = id || autoId;
    const invalid = Boolean(error);
    const describedBy = error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined;

    let control;
    if (options) {
      control = (
        <select
          id={fieldId}
          className="atp-select"
          aria-invalid={invalid}
          aria-describedby={describedBy}
          ref={ref as React.Ref<HTMLSelectElement>}
          {...(rest as SelectHTMLAttributes<HTMLSelectElement>)}
        >
          {options.map((o) => {
            const val = typeof o === "string" ? o : o.value;
            const lab = typeof o === "string" ? o : o.label;
            return (
              <option key={val} value={val}>
                {lab}
              </option>
            );
          })}
        </select>
      );
    } else if (multiline) {
      control = (
        <textarea
          id={fieldId}
          className="atp-textarea"
          aria-invalid={invalid}
          aria-describedby={describedBy}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      );
    } else {
      control = (
        <input
          id={fieldId}
          className="atp-input"
          aria-invalid={invalid}
          aria-describedby={describedBy}
          ref={ref as React.Ref<HTMLInputElement>}
          {...rest}
        />
      );
    }

    return (
      <div className={cn("atp-field", className)}>
        {label && (
          <label className="atp-field__label" htmlFor={fieldId}>
            {label}
            {required && <span className="atp-field__req">*</span>}
          </label>
        )}
        {control}
        {error ? (
          <span className="atp-field__error" id={`${fieldId}-error`}>
            {error}
          </span>
        ) : (
          hint && (
            <span className="atp-field__hint" id={`${fieldId}-hint`}>
              {hint}
            </span>
          )
        )}
      </div>
    );
  },
);
