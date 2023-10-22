import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const UserDetailPage: NextPage = () => {
  const [qrCodeData, setQrCodeData] = useState();
  const [isLoadingQr, setIsLoadingQr] = useState(false);

  const host = process.env.NEXT_PUBLIC_HOST_URL;
  const startVerification = async () => {
    setIsLoadingQr(true);
    const response = await fetch(`${host}/api/auth-qr`);
    const data = await response.text();
    setIsLoadingQr(false);
    if (data) setQrCodeData(JSON.parse(data));
  };

  return (
    <>
      <main className="profile-page">
        <section className="relative block h-72 sm:h-44 top-0 mb-24 verflow-hidden">
          <div className="absolute bottom-0 bg-red w-full flex flex-col translate-y-20">
            <img
              src="/user-profile-default.png"
              alt="user"
              className="rounded-full border-none mx-auto"
              style={{ maxWidth: "150px" }}
            />
          </div>
        </section>
        <section className="mx-auto mb-16">
          <div className=" flex flex-col min-w-0 w-full rounded-lg">
            {!qrCodeData ? (
              <button className="btn btn-secondary" onClick={startVerification}>
                {!isLoadingQr ? (
                  <span>VERIFY YOUR IDENTITY</span>
                ) : (
                  <span className="loading loading-dots loading-xs"></span>
                )}
              </button>
            ) : (
              <div className="flex flex-col justify-center items-center p-8 gap-4">
                <p className="text-xl text-gray-300">
                  Scan this code from the{" "}
                  <Link
                    className="text text-violet-300 font-bold"
                    href={
                      "https://apps.apple.com/us/app/polygon-id/id1629870183"
                    }
                  >
                    Polygon ID Wallet
                  </Link>
                </p>
                {qrCodeData && <QRCode value={JSON.stringify(qrCodeData)} />}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default UserDetailPage;
