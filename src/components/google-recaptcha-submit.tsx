/**
 * Google reCAPTCHA Submit Handler
 *
 * Provides reCAPTCHA v3 token generation for form submissions.
 * Usage: Wrap form submit buttons with this component.
 *
 * @see https://developers.google.com/recaptcha/docs/v3
 */
"use client";

import { MutableRefObject } from "react";

interface GoogleRecaptchaSubmitProps {
  formRef: MutableRefObject<HTMLFormElement | null>;
  action?: string;
  className?: string;
  disabled?: boolean;
}

export default function GoogleRecaptchaSubmit({
  formRef,
  action = "submit",
  className,
  disabled,
}: GoogleRecaptchaSubmitProps) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleClick = async () => {
    if (!siteKey || typeof window === "undefined") {
      formRef.current?.requestSubmit();
      return;
    }

    try {
      // grecaptcha is loaded dynamically by the reCAPTCHA script
      const grecaptcha = (
        window as unknown as {
          grecaptcha?: { execute: (siteKey: string, options: { action: string }) => Promise<string> };
        }
      ).grecaptcha;
      const token = await grecaptcha?.execute(siteKey, { action });
      // Add token to form as hidden field if needed
      if (token && formRef.current) {
        const existingInput = formRef.current.querySelector('input[name="g-recaptcha-response"]');
        if (existingInput) {
          (existingInput as HTMLInputElement).value = token;
        } else {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = "g-recaptcha-response";
          input.value = token;
          formRef.current.appendChild(input);
        }
      }
      formRef.current?.requestSubmit();
    } catch (error) {
      console.error("reCAPTCHA error:", error);
      formRef.current?.requestSubmit();
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className} disabled={disabled}>
      Submit
    </button>
  );
}
