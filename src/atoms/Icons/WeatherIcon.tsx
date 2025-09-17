import type { ImgType } from "../../../types/imgType";

const WeatherIcon = ({ src, alt }: ImgType) => {
  return (
    <img className="w-[80px] h-[80px] object-contain" src={src} alt={alt} />
  )
}

export default WeatherIcon