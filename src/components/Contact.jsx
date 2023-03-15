import "./styles/contact.css"

export const Contact = () => {
  return (

    <div className="contact">

        <form action="" method="post">

          <fieldset className="form">

            <legend>Fale conosco</legend>

            <label for="name">Nome</label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome completo" autoFocus/>

            <label for="email">E-mail</label>
            <input type="text" id="email" name="email" placeholder="exemplo@exemplo.com.br" />

            <label for="message">Mensagem</label>
            <textarea id="message" name="message" placeholder="Digite aqui a sua mensagem" cols="30" rows="10"></textarea>

            <button type="submit">Enviar</button>

          </fieldset>

        </form> 
    </div>
  )
}
