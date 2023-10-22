import { wagmiInstance } from "@/common/clients/wagmi";
import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import ClientRehydration from "@/utils/ClientRehydration";
import FontFamilyLayout from "@/utils/FontFamilyWrapper";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { WagmiConfig } from "wagmi";

const wagmiClient = wagmiInstance();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiClient}>
      <ClientRehydration>
        <FontFamilyLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Toaster position="top-right"/>
        </FontFamilyLayout>
      </ClientRehydration>
    </WagmiConfig>
  );
}
