import { PublisherAbi } from "@/contractsAbi/Publisher";
import { NextPage } from "next";
import { useEffect } from "react";
import { useContractRead } from "wagmi";

const NewsDetailPage: NextPage = () => {
  const { data, isLoading, isSuccess, refetch } = useContractRead({
    address:
      (process.env.NEXT_PUBLIC_NEWS_PUBLISHER_ADDRESS as `0x${string}`) ?? "",
    abi: PublisherAbi,
    functionName: "counter",
  });

  console.log("read from Sm", Number(data));

  useEffect(() => {
    refetch();
    // const fetchNewsDetail = async () => {
    //   const response = fetch("", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({}),
    //   });
    // };
  }, []);

  return <>Newsid</>;
};

export default NewsDetailPage;
