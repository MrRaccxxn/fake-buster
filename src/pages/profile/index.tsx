import { NextPage } from "next";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const UserDetailPage: NextPage = () => {
  const [qrCodeData, setQrCodeData] = useState();
  const [rawData, setRawData] = useState();

  const getQrCodeApi = `https://9ab5-181-188-137-157.ngrok-free.app/api/auth-qr`;

  useEffect(() => {
    const fetchQrCode = async () => {
      const response = await fetch(getQrCodeApi);
      const data = await response.text();
      setRawData(JSON.parse(data))
      return JSON.parse(data);
    };

    fetchQrCode().then(setQrCodeData).catch(console.error);
  }, []);

  console.log(rawData)
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
            <p>VERIFY YOUR IDENTITY</p>

            {qrCodeData && <QRCode value={JSON.stringify(qrCodeData)} />}
          
            <p>raw data</p>
            {

            }
          </div>
        </section>
      </main>
    </>
  );
};

export default UserDetailPage;
