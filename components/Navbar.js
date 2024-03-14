import Image from "next/image";

const Navbar = ({ onFilterChange, searchValue, handleSearchChange }) => {
  return (
    <div className="navbar bg-neutral text-neutral-content sticky top-0 z-50 overflow-x-hidden">
      <div className="navbar-start">
        <div
          className="btn btn-ghost sm:text-xl text-base"
          onClick={() => onFilterChange("all")}
        >
          Show All Heroes
        </div>
      </div>
      <div className="navbar-center flex sm:gap-3 gap-0">
        <div
          className="btn sm:btn-md btn-sm btn-ghost relative"
          onClick={() => onFilterChange("str")}
        >
          <Image
            src={process.env.NEXT_PUBLIC_STR}
            alt="Str Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          className="btn sm:btn-md btn-sm btn-ghost relative"
          onClick={() => onFilterChange("agi")}
        >
          <Image
            src={process.env.NEXT_PUBLIC_AGI}
            alt="Agi Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          className="btn sm:btn-md btn-sm btn-ghost relative"
          onClick={() => onFilterChange("int")}
        >
          <Image
            src={process.env.NEXT_PUBLIC_INT}
            alt="Int Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          className="btn sm:btn-md btn-sm btn-ghost relative"
          onClick={() => onFilterChange("uni")}
        >
          <Image
            src={process.env.NEXT_PUBLIC_UNI}
            alt="Uni Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex-none gap-2">
          <div className="form-control flex flex-row items-center border-2 input input-bordered w-24 md:w-auto ">
            <div className="btn-sm flex items-center hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className=""
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
