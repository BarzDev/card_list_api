import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content mb-5 sticky top-0 z-50 overflow-x-hidden">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost sm:text-xl text-base">
          List All Hero
        </Link>
      </div>
      <div className="navbar-center flex sm:gap-3 gap-0">
        <Link href="/str" className="btn sm:btn-md btn-sm btn-ghost relative">
          <Image
            src={process.env.NEXT_PUBLIC_STR}
            alt="Str Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        </Link>
        <div className="btn sm:btn-md btn-sm btn-ghost relative">
          <Image
            src={process.env.NEXT_PUBLIC_AGI}
            alt="Str Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="btn sm:btn-md btn-sm btn-ghost relative">
          <Image
            src={process.env.NEXT_PUBLIC_INT}
            alt="Str Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="btn sm:btn-md btn-sm btn-ghost relative">
          <Image
            src={process.env.NEXT_PUBLIC_UNI}
            alt="Str Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex-none gap-2">
          <div className="form-control flex flex-row items-center border-2 input input-bordered w-24 md:w-auto cursor-no-drop">
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
              className="cursor-no-drop"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;