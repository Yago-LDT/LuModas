import './styles.css';
import Midias from '../Midias/index.jsx';
import Precos from '../Precos/index.jsx'


function Body(){
    return(
<>
    <div className="mainbody">
        <div className="introduction" id="introducao">
            <h1>Introdução</h1>
            <p>Trabalho com confecções, reparos, uniformes, freelancer para fábricas, facções de roupas, consertos em geral. Revenda de cosméticos oBoticário e Natura e também bens de cama, mesa e banho.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque cumque odio odit dolore nesciunt impedit, perspiciatis, porro esse at excepturi mollitia in minima possimus quibusdam fugiat est modi! Assumenda, saepe?</p>
            <p>Aberto de segunda a sexta das 08:00 às 17:00</p>
            <p>Estamos localizados na Quadra 30 Lote 36 Jardim Barragem IV em Águas Lindas de Goiás, perto do Colégio Estadual Maria do Carmo, apresentado no mapa abaixo</p>

        <div className="googlemapslocation">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.466655622619!2d-48.2909667!3d-15.726433799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bc9db2717f387%3A0xe2d53a61e050df43!2sLu%20Modas%20-%20Confec%C3%A7%C3%B5es%20e%20Uniformes!5e0!3m2!1spt-BR!2sbr!4v1762542795722!5m2!1spt-BR!2sbr"
            width="400"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa"
            >
            </iframe>
        </div>

    </div>

        <Midias />
        <Precos />
        </div>
        </>
    )
}


export default Body;