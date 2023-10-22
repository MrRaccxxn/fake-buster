import { useEffect, useState } from "react";
import { NewsCard } from "./NewsCard";
import { INews } from "@/types/INews";
import Link from "next/link";

export const NewsList = () => {
  const [news, setNews] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const fetchAllNews = async () => {
      const response = await fetch(`${process.env.HOST_URL ?? ""}/api/news`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setNews(data.news);
      setIsFetching(false);
    };

    fetchAllNews();
  }, []);

  return (
    <div className="py-16 flex flex-col text-xl justify-center items-center gap-8">
      <p>Pick a story, check if it’s true or false and vote!</p>

      <h3 className="text-white text-5xl font-semibold">
        VERIFY &nbsp;
        <span className="text-primaryTextColor">ANY&nbsp;</span>
        NEWS.
      </h3>

      <div className="flex flex-row gap-24">
        <span className="border-b-4 border-primaryTextColor p-2 cursor-pointer hover:opacity-70 transition-all">
          Trending
        </span>
        <span className="p-2 cursor-pointer hover:opacity-70 transition-all">
          New
        </span>
        <span className="p-2 cursor-pointer hover:opacity-70 transition-all">
          Ending Soon
        </span>
      </div>

      {isFetching ? (
        <span className="loading loading-spinner loading-lg m-24"></span>
      ) : (
        <div className="grid gap-12 grid-cols-2">
          {news?.map((item: INews) => {
            return (
              <Link href={`/news/${item?.customId}`}>
                <NewsCard
                  title={item?.title}
                  imageSrc={item?.image}
                  key={item?.customId}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
