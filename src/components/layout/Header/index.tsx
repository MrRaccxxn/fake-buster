import Image from "next/image";
import { ConnectWallet } from "@/components/ConnectButton";

export const Header = () => {
  return (
    <header className="w-full text-white-700 body-font">
      <div className="container flex flex-row items-center justify-between p-6 mx-auto md:flex-row">
        <a className="flex items-center mb-4 font-medium text-white-900 title-font md:mb-0">
          <Image
            src={
              "/logo.png"
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
            Trending News
          </a>
          <a href="#_" className="font-medium hover:text-white-900">
            FAQ
          </a>
        </nav>
        <div className="items-center h-full">
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
};
