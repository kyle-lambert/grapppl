import { Resend } from "resend";
import LoginCodeEmail from "@/emails/login-code";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    if (process.env.NODE_ENV === "development") {
      const { data, error } = await resend.emails.send({
        from: `Grapppl <${process.env.RESEND_SENDER_ADDRESS}>`,
        to: [process.env.RESEND_RECEIVER_ADDRESS],
        subject: "Grapppl Login Code",
        react: LoginCodeEmail({ validationCode: "grapppl-tt226-5398" }),
      });

      if (error) {
        return Response.json({ error }, { status: 500 });
      }
      return Response.json(data);
    }

    return Response.json({ message: "Email testing only runs in development" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
