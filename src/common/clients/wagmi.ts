import { configureChains, createConfig } from "wagmi";
import { filecoinHyperspace, goerli } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";

export const wagmiInstance = () => {
  const { chains, publicClient } = configureChains(
    [goerli],
    [publicProvider()]
  );

  return createConfig({
    autoConnect: true,
    connectors: [
      new InjectedConnector({ chains }),
      new MetaMaskConnector({
        chains,
      }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: "wagmi",
        },
      }),
    ],
    publicClient,
  });
};
