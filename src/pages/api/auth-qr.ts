import redis from "@/libs/redis";
import { auth } from "@iden3/js-iden3-auth";
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from 'uuid';

const humanReadableAuthReason = "Must be born before this year";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sessionId = Date.now();
  const hostUrl = process.env.HOST_URL ?? "";
  const callbackURL = "/api/verification-callback";
  const uri = `${hostUrl}${callbackURL}?sessionId=${sessionId}`;
  const request = auth.createAuthorizationRequest(
    humanReadableAuthReason,
    process.env.VERIFIER_DID ?? "",
    uri
  );

  request.id = uuidv4();
  request.thid = request.id;

  const proofRequest = {
    id: sessionId,
    circuitId: "credentialAtomicQuerySigV2",
    query: {
      allowedIssuers: ["*"],
      type: "KYCAgeCredential",
      context:
        "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld",
      credentialSubject: {
        birthday: {
          $lt: 20000101,
        },
      },
    },
  };

  const scope = request.body.scope ?? [];
  request.body.scope = [...scope, proofRequest];

  redis.hset("request", sessionId, JSON.stringify(request));

  return res.status(200).send(request);
}
