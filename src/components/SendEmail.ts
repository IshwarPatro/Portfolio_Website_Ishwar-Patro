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

  const recipient = portfolioConfig.email || "ishwarpatro000@gmail.com";
  const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "Visitor"}`);
  const body = encodeURIComponent(
    `Hello Ishwar,\n\n${message}\n\n---\nSender: ${name}\nEmail: ${SenderEmail}`
  );

  if (typeof window !== "undefined") {
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }
  return { success: true };
};
