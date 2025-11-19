import './styles.css'
export default function Footer() {
    return (
    <div className="footer">
        <div className='contato'>
        <h1>Contato</h1>
        <a href="http://"><img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="email" /></a>
        <a href="http://"><img src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000" alt="instagram" /></a>
        <a href="http://"><img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="whatsapp" /></a>
        </div>
        
        <div className='creditos'>
        <p>Desenvolvido por Yago Pereira</p>
        <a href=""><img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="link github" /></a>
        </div>
    </div>
    )
}