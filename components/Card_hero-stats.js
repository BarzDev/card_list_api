import Image from "next/image";

const HeroStats = ({ hero }) => {
  let attrAtk = 0;
  if (hero.primary_attr === "str") {
    attrAtk = hero.base_str;
  }
  if (hero.primary_attr === "agi") {
    attrAtk = hero.base_agi;
  }
  if (hero.primary_attr === "int") {
    attrAtk = hero.base_int;
  }
  if (hero.primary_attr === "all") {
    attrAtk = (hero.base_str + hero.base_agi + hero.base_int) * 0.7;
  }

  let Armor = (hero.base_armor + hero.base_agi * 0.167).toFixed(1);

  return (
    <div>
      <div className="flex justify-around">
        {/* attack */}
        <div>
          <div className="flex pb-1">
            <div className="img-icon_stats">
              <Image
                src={process.env.NEXT_PUBLIC_ATK}
                alt="attack"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="ps-1 font-semibold">
              {Math.floor(hero.base_attack_min + attrAtk)} -{" "}
              {Math.floor(hero.base_attack_max + attrAtk)}
            </p>
          </div>
          <div className="flex pb-1">
            <div className="img-icon_stats">
              <Image
                src={process.env.NEXT_PUBLIC_ATK_RATE}
                alt="attack"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="ps-1 font-semibold">{hero.attack_rate}</p>
          </div>
          <div className="flex pb-1">
            <div className="img-icon_stats">
              <Image
                src={process.env.NEXT_PUBLIC_ATK_RANGE}
                alt="attack"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="ps-1 font-semibold">{hero.attack_range}</p>
          </div>

          {/* {hero.projectile_speed !== 0 ? (
            <div className="flex pb-1">
              <div className="img-icon_stats">
                <Image
                  src={process.env.NEXT_PUBLIC_PROJECTILE_SPEED}
                  alt="attack"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="ps-1 font-semibold">{hero.projectile_speed}</p>
            </div>
          ) : null} */}
        </div>

        {/* deffense */}
        <div>
          <div className="flex pb-1">
            <div className="img-icon_stats">
              <Image
                src={process.env.NEXT_PUBLIC_ARMOR}
                alt="attack"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="ps-1 font-semibold">{Armor}</p>
          </div>

          <div className="flex pb-1">
            <div className="img-icon_stats">
              <Image
                src={process.env.NEXT_PUBLIC_MagicResist}
                alt="attack"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="ps-1 font-semibold">{hero.base_mr}%</p>
          </div>

          <div className="flex pb-1">
            <div className="img-icon_stats">
              <Image
                src={process.env.NEXT_PUBLIC_VISION}
                alt="attack"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="ps-1">
              {hero.day_vision} / {hero.night_vision}
            </p>
          </div>
        </div>

        {/* movement */}
        <div>
          <div className="flex pb-1">
            <div className="img-icon_stats">
              <Image
                src={process.env.NEXT_PUBLIC_MOVESPEED}
                alt="attack"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="ps-1 font-semibold">{hero.move_speed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStats;
