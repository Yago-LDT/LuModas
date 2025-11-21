import './styles.css'

function HeroSection(){
    return(
        <>
        <div className="heroSection fade">
            <h1>Bem vindo à <span>Lu Modas</span></h1>
            <h2>Serviços de costura, revenda de cosméticos e enxovais de qualidade em Águas Lindas de Goiás!</h2>
            <button onclick="window.scrollTo({ top: 800, behavior: 'smooth' })">Conheça mais!</button>
        </div>
        </>
    )
}

export default HeroSection;