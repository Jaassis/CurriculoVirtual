import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    {name: 'linkedin', icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/jonathan-almeida-de-assis-91174114b/" },
    {name: 'github', icon: <FaGithub />, link: "https://github.com/Jaassis" },
    {name: 'instagram', icon: <FaInstagram />, link: "https://www.instagram.com/ghoratrix/" },
]

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
        {socialNetworks.map((network) => (
            <a target="_blank" href={network.link} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks