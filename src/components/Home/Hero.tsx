import Image from "next/image";

export const Hero = () => {
  return (
    <div
      className="flex flex-row p-20 justify-between"
      style={{
        minHeight: "100dvh",
      }}
    >
      <div className="flex flex-col gap-3">
        <h1>
          <span className="font-bold text-8xl">NO MORE </span>
          <br />
          <span className="font-bold text-8xl text-primaryTextColor">
            {" "}
            FAKE NEWS
          </span>
        </h1>
        <p className="max-w-[360px]">
          Fact-check your news with us and get reward for verifying the truth.
        </p>
        <div className="flex flex-row gap-4 pt-6">
          <div className="btn bg-white text-black hover:bg-slate-300">
            PUBLISH NEWS
          </div>
          <div className="btn btn-outline">VERIFY NEWS</div>
        </div>
      </div>
      <div
        className="flex justify-end items-end relative overflow-hidden rounded-lg"
        style={{
          width: "400px",
          height: "400px",
        }}
      >
        <Image alt="hero" src={"/hero-bg.png"} fill={true} objectFit="cover" />
        <div className="absolute bottom-0 bg-black bg-opacity-30">
          <div
            className="relative h-11 flex justify-start"
            style={{
              maxWidth: "250px",
              marginTop: "8px",
            }}
          >
            <Image
              alt="Breaking News"
              src={"/breaking-news.png"}
              fill={true}
              objectFit="contain"
              style={{
                paddingLeft: "16px",
              }}
            />
          </div>
          <p className="px-4 pb-4 pt-2 text-white text-lg">
            CORONAVIRUS CREATES ZOMBIE REACTION IN CHINA
          </p>
        </div>
      </div>
    </div>
  );
};
