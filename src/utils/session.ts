import { workos } from "@/services/workos";
import { Session, SessionCookieData } from "@workos-inc/node";
import { sealData } from "iron-session";
import { jwtVerify, createRemoteJWKSet, decodeJwt } from "jose";

const sessionHeaderName = "x-grapppl-session";
const middlewareHeaderName = "x-grapppl-middleware";

const COOKIE_PASSWORD = "test-password";

const JWKS = createRemoteJWKSet(
  new URL(workos.userManagement.getJwksUrl(process.env.WORKOS_CLIENT_ID)),
);

export async function encryptSession(session: SessionCookieData) {
  return sealData(session, { password: COOKIE_PASSWORD });
}

async function verifyAccessToken(accessToken: string) {
  try {
    await jwtVerify(accessToken, JWKS);
    return true;
  } catch (error) {
    return false;
  }
}
