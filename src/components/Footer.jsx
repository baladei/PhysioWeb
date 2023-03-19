import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaMailBulk } from "react-icons/fa"
import './styles/footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="whatsapp"><a href="https://wa.me/+5519992378933" target={"_blank"}><FaWhatsapp />WhatsApp <p>(19) 99237-8933</p></a></div>
        <div className="telefone"><a href="tel:+5519992378933" target={"_blank"}><FaPhone />Telefone <p>(19) 99237-8933</p></a></div>
        <div className="endereco"><a href="https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/@-23.6824124,-46.5952992,10z/data=!3m1!4b1!4m6!3m5!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571!16zL20vMDIycGZt" target={"_blank"}><FaMapMarkerAlt />Endereço <p>São Paulo - SP</p></a></div>
        <div className="email"><a href="mailto:karina.leticia.car@gmail.com" target={"_blank"}><FaMailBulk />E-mail <p>karina.leticia.car@gmail.com</p></a></div>
    </div>
  )
}
