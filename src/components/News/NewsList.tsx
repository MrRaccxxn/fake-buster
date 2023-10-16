import { NewsCard } from "./NewsCard";

export const NewsList = () => {
  return (
    <div className="py-16 flex flex-col text-xl justify-center items-center gap-8">
      <p>Pick a story, check if it’s true or false and vote!</p>

      <h3 className="text-white text-5xl font-semibold">
        VERIFY &nbsp;
        <span className="text-primaryTextColor">ANY&nbsp;</span>
        NEWS.
      </h3>

      <div className="flex flex-row gap-24">
        <span className="border-b-4 border-primaryTextColor p-2 cursor-pointer hover:opacity-70 transition-all">Trending</span>
        <span className="p-2 cursor-pointer hover:opacity-70 transition-all">New</span>
        <span className="p-2 cursor-pointer hover:opacity-70 transition-all">Ending Soon</span>
      </div>

      <div className="grid gap-12 grid-cols-2">
        <NewsCard
          title={"POPE HAS RITUALS WITH ANIMAL MEAT."}
          imageSrc={"/news/card-1.png"}
        />
        <NewsCard
          title={"FIRST ROBOT WITH HUMAN HEART HAS BEEN CREATED."}
          imageSrc={"/news/card-2.png"}
        />
        <NewsCard
          title={"ETHEREUM GOES CRAZY: 1ETH IS WORTH USD 10.000."}
          imageSrc={"/news/card-3.png"}
        />
        <NewsCard
          title={"BLOCKCHAIN GETS HACKED FOR THE FIRST TIME."}
          imageSrc={"/news/card-4.png"}
        />
      </div>
    </div>
  );
};
