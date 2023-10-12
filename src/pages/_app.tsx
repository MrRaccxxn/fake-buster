import { wagmiInstance } from "@/common/clients/wagmi";
import "@/styles/globals.css";
import ClientRehydration from "@/utils/ClientRehydration";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";

const wagmiClient = wagmiInstance();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiClient}>
      <ClientRehydration>
        <Component {...pageProps} />
      </ClientRehydration>
    </WagmiConfig>
  );
}
