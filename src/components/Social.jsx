import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs"
import "./styles/social.css"

const socialNetworks = [
    { name: "instagram", icon:  <BsInstagram />, link: "https://www.instagram.com/karinalecarvalho/"},
    { name: "facebook", icon: <BsFacebook />, link: "https://www.facebook.com/karina.carvalho.90813"},
    { name: "twitter", icon: <BsTwitter />, link: "https://google.com"},
]

export const Social = () => {
  return <div id="social-networks">
    {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank">
            {network.icon}
        </a>
    ))}
  </div>
}


