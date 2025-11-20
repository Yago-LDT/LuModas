import './styles.css'
export default function Footer() {
    return (
        <footer>
        <div className='creditos'>
        <p>Desenvolvido por <strong>Yago Pereira</strong></p>
        <a href=""><img src="https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF" alt="link github" /></a>
        <a href=""><img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="link linkedin" /></a>
        </div>

        <div className='contato'>
        <p><strong>Contato Lu Modas</strong></p>
        <a href="http://"><img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="email" /></a>
        <a href="http://"><img src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000" alt="instagram" /></a>
        <a href="http://"><img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="whatsapp" /></a>
        </div>
        </footer>
    )
}