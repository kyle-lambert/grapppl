"use server";

import {
  sendMagicAuthCodeSchema,
  TSendMagicAuthCodeSchema,
} from "@/app/(auth)/schemas";
import { sendMagicAuthCodeEmail } from "@/services/resend";
// These are Next.js server actions.
//
// If your application is a single page app (SPA) with a separate backend you will need to:
// - create a backend endpoint to handle each request
// - adapt the code below in each of those endpoints
//
// Please also note that for the sake of simplicity, we return all errors here.
// In a real application, you should pay attention to which errors make it
// to the client for security reasons.

WorkOS;

import { workos } from "@/services/workos";
import { encryptSession } from "@/utils/session";
import { WorkOS } from "@workos-inc/node";
import { ZodError } from "zod";

export async function signInWithMagicAuth(payload: TSendMagicAuthCodeSchema) {
  console.log("[server-action]: signInWithMagicAuth", payload);

  try {
    const { email } = sendMagicAuthCodeSchema.parse(payload);
    const { code } = await workos.userManagement.createMagicAuth({
      email,
    });

    await sendMagicAuthCodeEmail({
      code,
      email,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return { message: "ZodError", error: JSON.parse(JSON.stringify(error)) };
    }
    return { message: "ErrorError", error: JSON.parse(JSON.stringify(error)) };
  }
}

export async function authenticateWithMagicAuth(formData: any) {
  console.log("[server-action]: authenticateWithMagicAuth", formData);
  try {
    const { accessToken, refreshToken, user, impersonator } =
      await workos.userManagement.authenticateWithMagicAuth({
        clientId: process.env.WORKOS_CLIENT_ID || "",
        code: String(formData.get("code")),
        email: String(formData.get("email")),
      });

    const encryptedSession = await encryptSession({
      accessToken,
      refreshToken,
      user,
      impersonator,
    });
  } catch (error) {
    return { error: JSON.parse(JSON.stringify(error)) };
  }
}
