import SmallIconContainer from "../../atoms/Containers/SmallIconContainer"
import type { ImgType } from "../../../types/imgType"

const WeatherIcon = ({ src, alt }: ImgType) => {
  return (
    <SmallIconContainer>
        <WeatherIcon src={src} alt={alt}/>
    </SmallIconContainer>
  )
}

export default WeatherIcon