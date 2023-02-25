import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"

import Avatar from "../img/eu.jpeg"

import "../styles/components/sidebar.sass"



const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Jonathan De Assis" />
    <p className="title">Estudante de Tecnologia</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="https://drive.google.com/file/d/1MJE2vOpkewR_vnZiZq_bIq7tuorvxNEb/view?usp=share_link" className="btn">
      Download Currículo
      </a>
  </aside>
}

export default Sidebar