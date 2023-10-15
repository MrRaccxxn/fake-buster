import { useAccount, useConnect, useDisconnect } from "wagmi";
import { DropdownProfile } from "./DropdownProfile";

export const ConnectWallet = () => {
  const { connectors, isLoading, connect, error, pendingConnector } =
    useConnect();
  const { isConnected } = useAccount();

  return (
    <>
      {isConnected ? (
        <DropdownProfile />
      ) : (
        <>
          <div
            onClick={() => {
              connect({ connector: connectors[0] });
            }}
            className="btn text-black bg-white rounded-2xl font-bold hover:bg-gray-200"
          >
            Connect Wallet
          </div>
        </>
      )}
    </>
  );
};
