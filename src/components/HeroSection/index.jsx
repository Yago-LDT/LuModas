import './styles.css'

function HeroSection(){
    return(
        <>
        <div className="heroSection fade">
            <h1>Bem vindo à <span>Lu Modas</span></h1>
            <h2>Serviços de costura, revenda de cosméticos e enxovais de qualidade em Águas Lindas de Goiás!</h2>
            <button onClick={() => {window.scrollTo({ top: 680, behavior: 'smooth' })}}>Conheça mais!</button>
        </div>
        </>
    )
}

export default HeroSection;