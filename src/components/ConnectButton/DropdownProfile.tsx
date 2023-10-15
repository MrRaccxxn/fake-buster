import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAccount, useDisconnect } from "wagmi";

export const DropdownProfile = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const router = useRouter();

  const handleDisconnect = () => {
    disconnect();
    router.replace("/");
  };

  return (
    <div className="dropdown dropdown-end bg-transparent">
      <div
        tabIndex={0}
        className="cursor-pointer btn m-1 bg-transparent border-none hover:bg-gray-200"
      >
        <div className="flex flex-row gap-3 items-center">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <Image
                src="/user-profile-default.jpg"
                alt="avatar"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 font-medium text-start">
            <div className="text-gray-400">
              {address?.slice(0, 5) +
                "..." +
                address?.slice(address.length - 5, address.length)}
            </div>
            <div className="text text-gray-500 dark:text-gray-400" style={{
                fontSize: "10px",
            }}>
              Anonymous Raccoon
            </div>
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow rounded-box w-52 bg-white"
      >
        <li>
          <div onClick={handleDisconnect}>Disconnect</div>
        </li>
      </ul>
    </div>
  );
};
