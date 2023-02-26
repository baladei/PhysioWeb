import { GiLifeSupport } from "react-icons/gi"
import { Social } from "./Social"
import "./styles/sidebar.css"

export const Sidebar = () => {
  return (
    <div id="sidebar">
        <div className="title">
            <h2><GiLifeSupport />Karina Letícia</h2>
        </div>
        <div className="menu">
            <h3>Início</h3>
            <h3>Sobre</h3>
            <h3>Tratamentos</h3>
            <h3>Dúvidas Frequentes</h3>
            <h3>Contato</h3>
        </div>
        <div className="social">
             <Social />
        </div>
            
        
    </div>
  )
}
