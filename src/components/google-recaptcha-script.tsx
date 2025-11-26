/**
 * Google reCAPTCHA Script Component
 *
 * Loads the Google reCAPTCHA v3 script.
 * Set NEXT_PUBLIC_RECAPTCHA_SITE_KEY environment variable to enable.
 *
 * @see https://developers.google.com/recaptcha/docs/v3
 */
import Script from "next/script";

export default function GoogleRecaptchaScript() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    return null;
  }

  return <Script src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`} strategy="lazyOnload" />;
}
