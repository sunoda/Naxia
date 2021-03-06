import IMG_Frame from "assets/location/frame.png";

type LocationProps = {
  value: string;
};
export function Location({ value }: LocationProps) {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <div className="relative w-48 text-white">
        <img src={IMG_Frame} alt="world frame" />

        <h1 className="absolute top-0 h-full w-full flex items-center justify-center">
          {value}
        </h1>
      </div>
    </div>
  );
}
