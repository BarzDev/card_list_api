import Image from "next/image";

const HeroAttribute = ({ hero }) => {
  return (
    <div className="flex content-center items-center gap-1">
      <div className="img-icon">
        {hero.primary_attr === "agi" ? (
          <Image
            src={process.env.NEXT_PUBLIC_AGI}
            alt="Agi Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        ) : hero.primary_attr === "str" ? (
          <Image
            src={process.env.NEXT_PUBLIC_STR}
            alt="Str Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        ) : hero.primary_attr === "int" ? (
          <Image
            src={process.env.NEXT_PUBLIC_INT}
            alt="Int Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        ) : hero.primary_attr === "all" ? (
          <Image
            src={process.env.NEXT_PUBLIC_UNI}
            alt="Universal Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        ) : (
          ""
        )}
      </div>
      <div className="img-icon_atkType">
        {hero.attack_type === "Melee" ? (
          <Image
            src={process.env.NEXT_PUBLIC_MELEE}
            alt="Melee"
            fill
            style={{ objectFit: "contain" }}
          />
        ) : (
          <Image
            src={process.env.NEXT_PUBLIC_RANGED}
            alt="Ranged"
            fill
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
    </div>
  );
};

export default HeroAttribute;
