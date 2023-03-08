import { GiLifeSupport } from "react-icons/gi"
import { Link } from "react-router-dom"
import { Social } from "./Social"
import "./styles/sidebar.css"

export const Sidebar = () => {
  return (
    <div id="sidebar">
        <div className="title">
            <h2><GiLifeSupport />Karina Letícia</h2>
        </div>
        <div className="menu">
            <Link to='/'><h3>Início</h3> </Link>
            <Link to='about'><h3>Sobre</h3> </Link>
            <Link to='treatments'><h3>Tratamentos</h3> </Link>
            <Link to='doubt'><h3>Dúvidas Frequentes</h3> </Link>
            <Link to='contact'><h3>Contato</h3> </Link>
        </div>
        <div className="social">
             <Social />
        </div>
            
        
    </div>
  )
}
