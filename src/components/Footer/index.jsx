import './styles.css'
export default function Footer() {
    return (
        <footer>
        <div className='creditos'>
        <p>Desenvolvido por <b>Yago Pereira</b></p>
        <a href=""><img src="https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF" alt="link github" /></a>
        <a href=""><img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="link linkedin" /></a>
        </div>

        <div className='contatos'>
        <p><b>Contato Lu Modas</b></p>
        <a href="http://"><img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="email" /></a>
        <a href="http://"><img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="whatsapp" /></a>
        </div>
        </footer>
    )
}