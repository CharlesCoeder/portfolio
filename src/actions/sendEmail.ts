"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  "use server";

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }

  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "croederdev@gmail.com",
      subject: "New message from portfolio site!",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    console.log("email sent");
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
