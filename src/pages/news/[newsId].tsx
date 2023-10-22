import _ from "lodash";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EventDetailPage: NextPage = () => {
  const router = useRouter();
  const { newsId } = router.query as any;
  const [isFetching, setIsFetching] = useState(true);
  const [itemDetail, setItemDetail] = useState<any>({});

  useEffect(() => {
    if (!newsId) {
      return;
    }
    const fetchNewsById = async () => {
      const response = await fetch(
        `${process.env.HOST_URL ?? ""}/api/news/get`,
        {
          method: "POST",
          body: JSON.stringify({ customId: newsId }),
        }
      ).then((res) => res.json());
      setItemDetail(response.news);
      setIsFetching(false);
    };
    fetchNewsById();
  }, [newsId]);

  if (isFetching)
    return <span className="loading loading-spinner loading-lg"></span>;

  console.log("otem deital", itemDetail);
  return (
    <main className="profile-page relative">
      <section className="relative block h-128 md:h-96 sm:h-72">
        <div
          className="absolute top-0 w-full h-full bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "" ? `url("")` : "none",
            filter: " grayscale(100%)",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div className="flex justify-end w-full max-w-6xl md:w-full mx-auto flex-col relative z-40 h-full">
          <div className="w-full flow-root max-w-6xl md:w-full mx-auto flex-col absolute z-40 translate-y-10 md:translate-y-5"></div>
        </div>
      </section>

      <section className="flex flex-row md:flex-col relativemx-auto mt-16 md:mt-14 gap-16 md:gap-10">
        <div className="w-4/6 md:w-full flex flex-col gap-8 mb-24">
          <div className="flex flex-col gap-3 items-start">
            <h2>{itemDetail?.title}</h2>
            <p>{itemDetail?.description}</p>
          </div>
        </div>
        <div className="pl-8 w-2/6 md:w-full md:pl-0 flex flex-col gap-8">
          <div className="flex flex-col gap-3 items-start">
            <h3>Additional Details</h3>

            <div className="flex flex-row gap-4">
              <div className="scale-150  w-6 text-center">📍</div>
              <p>Publisher Address</p>
            </div>

            <div className="flex flex-row gap-4">
              <div className="scale-150  w-6 text-center">🏷️</div>
              <p>Related URL</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventDetailPage;
