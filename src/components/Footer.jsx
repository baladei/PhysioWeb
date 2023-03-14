import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaMailBulk } from "react-icons/fa"
import './styles/footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="whatsapp"><FaWhatsapp />WhatsApp <p>(19) 99237-8933</p></div>
        <div className="telefone"><FaPhone />Telefone <p>(19) 99237-8933</p></div>
        <div className="endereco"><FaMapMarkerAlt />Endereço <p>São Paulo - SP</p></div>
        <div className="email"><FaMailBulk />E-mail <p>karina.car.leticia@gmail.com</p></div>
    </div>
  )
}
