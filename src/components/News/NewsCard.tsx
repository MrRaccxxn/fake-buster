import Image from "next/image";

export const NewsCard = (props: { title: string; imageSrc: string }) => {
  return (
    <div className="relative rounded-3xl w-128 h-72 overflow-hidden">
      <div className="w-full absolute top-0 bg-black">
        <div className="bagde">100% Trust</div>
      </div>
      <Image
        alt="Card image"
        src={props.imageSrc}
        fill={true}
        style={{
          objectFit: "cover",
          transition: "all 0.2s ease-in-out",
        }}
        className="hover:scale-105 cursor-pointer"
      />

      <div className="w-full absolute bottom-0 bg-black bg-opacity-30">
        <p className="text-white p-4 text-base">{props.title}</p>
      </div>
    </div>
  );
};
