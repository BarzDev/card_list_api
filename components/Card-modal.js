import Image from "next/image";
import ModalTable from "./Card-modalTable";

const Modal = ({ hero }) => {
  const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL;
  return (
    <div className="modal-box">
      {hero !== null && (
        <>
          <div className="flex gap-2 pb-5">
            <div className="img-icon">
              <Image
                src={`${cdnUrl}${hero.icon}`}
                alt="attack"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h1 className="font-bold text-lg">{hero.localized_name}</h1>
          </div>

          <ModalTable hero={hero} />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
