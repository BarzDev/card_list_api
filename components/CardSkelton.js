export const CardSkelton = () => {
  return (
    <div className="flex flex-col gap-4 w-72 p-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};

export const Skelton = () => {
  return (
    <div className="flex justify-center  items-center w-[98vw] ">
      <div className="w-[80vw] m-8 flex flex-wrap gap-5 items-center justify-center">
        <CardSkelton />
        <CardSkelton />
        <CardSkelton />
        <CardSkelton />
        <CardSkelton />
        <CardSkelton />
      </div>
    </div>
  );
};
