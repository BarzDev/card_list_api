const HeroBar = ({ hero }) => {
  const healthRegen = (hero.base_health_regen + hero.base_str / 10).toFixed(1);
  const manaRegen = (hero.base_mana_regen + hero.base_int / 20).toFixed(1);

  return (
    <div className="hero_stats px-4 font-semibold text-white">
      <div className="hero_health ">
        <div>
          <p>
            {hero.base_health + hero.base_str * 22}+ {healthRegen}/s
          </p>
        </div>
      </div>
      <div className="hero_mana">
        <div>
          <p>
            {hero.base_mana + hero.base_int * 12} + {manaRegen}/s
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeroBar;
