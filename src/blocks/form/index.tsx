"use client";
import GoogleRecaptchaScript from "@/components/google-recaptcha-script";
import GoogleRecaptchaSubmit from "@/components/google-recaptcha-submit";
import axios from "axios";
import { MutableRefObject, useRef, useState } from "react";
import { FormFactory, FormSchema } from "./form-factory";
import type { Website, Menu, Location } from "@antlur/backstage";

interface BasicContactFormProps {
  form_id: string;
  type?: string | null;
  title?: string | null;
  subtitle?: string | null;
  form?: FormSchema | null;
  website: Website;
  menus: Menu[];
  locations: Location[];
}

export default function Form({
  form_id,
  title = null,
  subtitle = null,
  form = null,
  website,
  menus,
  locations,
}: BasicContactFormProps) {
  const formRef: MutableRefObject<HTMLFormElement | null> = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [files, setFiles] = useState([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    target.reportValidity();
    if (!target.checkValidity()) return;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "x-api-request": "true",
    };

    if (form?.type === "application") {
      headers["Content-Type"] = "multipart/form-data";
    }
    setSubmitting(true);
    try {
      await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BCKSTG_API_URL ?? "https://bckstg.app/api"}/wa/forms/${form_id}`,
        data: formRef.current ? Object.fromEntries(new FormData(formRef.current).entries()) : {},
        headers: headers,
      });
      alert("We received your message and will be in touch shortly!");
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      alert(`We can't send your message. Please try again.`);
    } finally {
      setSubmitting(false);
    }
  }

  const formProps: React.FormHTMLAttributes<HTMLFormElement> = {
    action: "#",
    id: "form",
    method: "POST",
    className: "max-w-md mx-auto space-y-4",
  };

  if (form?.type === "application") {
    formProps.encType = "multipart/form-data";
  }

  return (
    <>
      <GoogleRecaptchaScript />
      <div className="py-6 text-black md:py-12" id="form">
        <div className="max-w-2xl p-4 mx-auto bg-white rounded-md">
          <div className="text-center">
            <h3 className="my-3 text-3xl font-bold uppercase">{title || "Contact Us"}</h3>
            {subtitle && (
              <p className="mb-6 text-lg" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: subtitle }}></p>
            )}
          </div>
          <div className="form-feedback" id="form-success">
            <div
              id="success"
              className="p-2 mb-2 text-center bg-green-200 rounded-md"
              style={{ display: "none" }}
              role="alert"
            >
              Your message is on it's way! <br /> We'll do our best to get back to you within 24-48 hours
            </div>
            <div className="alert alert-danger" style={{ display: "none" }} role="alert">
              Something went wrong. Check your fields and try again.
            </div>
          </div>
          <form ref={formRef} {...formProps} onSubmit={handleSubmit}>
            {/* <FormFactory files={files} setFiles={setFiles} website={website} locations={locations} menus={menus} /> */}
            {form && <FormFactory form={form} />}
            <div className="relative pb-6">
              {submitting && (
                <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-white opacity-50"></div>
              )}
              <GoogleRecaptchaSubmit
                formRef={formRef}
                className="w-full px-4 py-2 text-white bg-black rounded g-recaptcha disabled:opacity-50"
                disabled={submitting}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
