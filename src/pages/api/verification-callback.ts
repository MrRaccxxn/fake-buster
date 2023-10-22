import redis from "@/libs/redis";
import { resolver, auth } from "@iden3/js-iden3-auth";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import getRawBody from "raw-body";
import { buffer } from "stream/consumers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sessionId = req.query.sessionId;
  if (!sessionId || typeof sessionId !== "string")
    throw new Error("sessionId is required");

  const raw = await buffer(req);
  console.log("rawBody", raw);

  //   const raw = await getRawBody(req);
  //   console.log("raw", raw);

  const tokenStr = raw.toString().trim();

  console.log("tokenStr", tokenStr);

  const authRequest = JSON.parse(
    (await redis.hget("request", sessionId ?? "")) ?? ""
  );
  if (!sessionId) throw new Error("No auth request found");

  // The CredentialAtomicQuerySigValidator contract is used to verify any credential-related zk proof
  // generated by the user using the credentialAtomicQuerySigV2OnChain circuit.
  // https://0xpolygonid.github.io/tutorials/contracts/overview/#blockchain-addresses
  const mumbaiContractAddress = "0x134B1BE34911E39A8397ec6289782989729807a4";
  const circuitsDir = "../../keys";

  const ethStateResolver = new resolver.EthStateResolver(
    process.env.RPC_URL_MUMBAI ?? "",
    mumbaiContractAddress
  );

  const resolvers = {
    ["polygon:mumbai"]: ethStateResolver,
  };

  const verifier = await auth.Verifier.newVerifier({
    stateResolver: resolvers,
    circuitsDir: path.join(__dirname, circuitsDir),
  });

  const opts = {
    AcceptedStateTransitionDelay: 5 * 60 * 1000, // 5 minutes
  };

  return await verifier.fullVerify(tokenStr, authRequest, {
    acceptedStateTransitionDelay: opts.AcceptedStateTransitionDelay,
  });
}
