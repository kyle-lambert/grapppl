import MagicAuthCodeEmail from "@/emails/magic-auth-code-email";
import { Resend } from "resend";

export const resend = new Resend(
  process.env.NODE_ENV === "development" ? process.env.RESEND_API_KEY : "",
);

type TSendMagicAuthCodeEmail = {
  code: string;
  email: string;
};

export async function sendMagicAuthCodeEmail({
  code,
  email,
}: TSendMagicAuthCodeEmail) {
  console.log("[resend]: sendMagicAuthCodeEmail", email);

  const { data, error } = await resend.emails.send({
    from: "Grapppl <system@hello.grapppl.app>",
    to: email,
    subject: "Grapppl Login Code",
    react: MagicAuthCodeEmail(code),
  });

  if (error) {
    throw error;
  }

  return data;
}
