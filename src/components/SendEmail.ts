"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";
import { portfolioConfig } from "@/config/portfolio.config";

export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");

  if (!message || !SenderEmail) {
    return {
      error: "Invalid message or sender email",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY is not configured. Email submission skipped in dev.");
    return redirect("/");
  }

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: portfolioConfig.email || "ishwarpatro@gmail.com",
    subject: `${name || "Visitor"} sent a message from your Portfolio`,
    reply_to: `${SenderEmail}`,
    text: `Sender: ${name} (${SenderEmail})\n\nMessage:\n${message}`,
  });

  return redirect("/");
};
