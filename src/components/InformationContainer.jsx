import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return <section id="information">
    <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
            <h3>Telefone</h3>
            <p>(11)98917-0124 - WhatsApp</p>
            <p>(11)91733-6999</p>
        </div>
    </div>
    <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
            <h3>E-Mail</h3>
            <p>jassis@icloud.com</p>
        </div>
    </div>
    <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
            <h3>Endereçol</h3>
            <p>Rua: Fernando Pessoa, 931 - Jandira-SP</p>
        </div>
    </div>
  </section>
}

export default InformationContainer