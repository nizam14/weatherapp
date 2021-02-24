import {RiHazeLine,RiSunFill,RiSunCloudyLine} from 'react-icons/ri'
import {WiCloudy} from 'react-icons/wi'
import {FaCloudSun} from 'react-icons/fa'
import {BiCloudLightRain} from 'react-icons/bi'
export const weatherIcon=(value)=>{
    switch (value) {
        case "haze":
            return <RiHazeLine></RiHazeLine>
        case "clear sky":
            return <RiSunCloudyLine></RiSunCloudyLine>
        case "overcast clouds":
            return <WiCloudy></WiCloudy>
        case "scattered clouds":
        return <FaCloudSun></FaCloudSun>
        case "light rain":
        return <BiCloudLightRain></BiCloudLightRain>
        
        default:
            return <RiSunFill></RiSunFill>
    }
} 