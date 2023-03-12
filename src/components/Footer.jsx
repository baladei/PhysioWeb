import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaMailBulk } from "react-icons/fa"
import './styles/footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="whatsapp"><FaWhatsapp />WhatsApp</div>
        <div className="telefone"><FaPhone />Telefone</div>
        <div className="endereco"><FaMapMarkerAlt />Endereço</div>
        <div className="email"><FaMailBulk />E-Mail</div>
    </div>
  )
}
