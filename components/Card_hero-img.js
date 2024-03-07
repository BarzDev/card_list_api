import Image from "next/image";

const Card_imgHero = ({ hero }) => {
  const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL;
  return (
    <Image
      src={`${cdnUrl}${hero.img}`}
      alt="Hero Icon"
      fill
      style={{ objectFit: "contain" }}
    />
  );
};

export default Card_imgHero;
