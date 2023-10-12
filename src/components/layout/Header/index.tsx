import Image from "next/image";
import { useAccount, useConnect } from "wagmi";
import { disconnect } from '@wagmi/core'


export const Header = () => {
  const { connectors, isLoading, connect, error, pendingConnector } =
    useConnect();
  const { connector: activeConnector, isConnected, address } = useAccount();

  return (
    <header className="w-full text-white-700 body-font">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto md:flex-row">
        <a className="flex items-center mb-4 font-medium text-white-900 title-font md:mb-0">
          <Image
            src={
              "https://www.onlygfx.com/wp-content/uploads/2017/12/fake-stamp-3.png"
            }
            alt="fake buster logo"
            width={100}
            height={100}
          />
        </a>
        <nav className="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
          <a href="#_" className="mr-5 font-medium hover:text-white-900">
            Home
          </a>
          <a href="#_" className="mr-5 font-medium hover:text-white-900">
            About
          </a>
          <a href="#_" className="font-medium hover:text-white-900">
            Contact
          </a>
        </nav>
        <div className="items-center h-full">
          <button
            onClick={() => {
              if (!isConnected) connect({ connector: connectors[0] });
              else disconnect()
            }}
          >
            {isConnected ? address : "Login"}
          </button>
        </div>
      </div>
    </header>
  );
};
