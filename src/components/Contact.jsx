import { useState } from "react"
import emailjs from "@emailjs/browser"

import "./styles/contact.css"

export const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail (e) {
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert("Preencha todos os campos")
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    }

    emailjs.send("service_1azpj1n", "template_lx36ico", templateParams, "a-W5uFf3NbxmKvW96")
    .then(() => {
      alert("MENSAGEM ENVIADA")
      setName('')
      setEmail('')
      setMessage('')

    },
    
    (error) => {
      console.log("ERRO", error)
    })

  }

  return (

    <div className="contact">

        <form onSubmit={sendEmail}>

          <fieldset className="form">

            <legend>Fale conosco</legend>

            <label htmlFor="name">Nome</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Digite seu nome completo"
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoFocus />

            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="exemplo@exemplo.com.br"
              onChange={(e) => setEmail(e.target.value)}
              value={email} />

            <label htmlFor="message">Mensagem</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Digite aqui a sua mensagem" 
              cols="30"
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
              value={message} />

            <button type="submit">Enviar</button>

          </fieldset>

        </form> 
    </div>
  )
}
