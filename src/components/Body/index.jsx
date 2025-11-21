import './styles.css';
import Midias from '../Midias/index.jsx';
import Precos from '../Precos/index.jsx'
import Contato from '../Contato/index.jsx'

function Body(){
    return(
<>
    <div className="mainbody">
        <div className="introducao fade" id="introducao">
            
            <h1>Sobre</h1>

            <p>Me chamo Luzia, trabalho como costureira a mais de 30 anos e amo o que faço. Foram décadas de sucesso oferecendo serviços com qualidade e rapidez. Flexibilidade e consistência são os fortes do meu negócio.</p>

            <p>A LuModas oferece vários bens e serviços, especialmente em:</p>
            <div className='listas fade'>
            <ul>
                <li>Consertos em geral</li>
                <li>Facções</li>
                <li>Uniformes</li>
                <li>Freelance</li>
            </ul>

                <ul>
                    <li>Perfumes</li>
                    <li>Cremes</li>
                    <li>Desodorantes</li>
                    <li>Maquiagem</li>
                </ul>
            

                <ul>
                    <li>Toalhas</li>
                    <li>Lençóis</li>
                    <li>Colcha</li>
                    <li>Pano de prato</li> 
                </ul>

                <ul>
                    <li>Talheres</li>
                    <li>Edredom</li>
                    <li>Cobre-leitos</li>
                    <li>Cortinas</li>
                    <li>Kit de cozinha</li>
                </ul>
            </div>
            <p>Aberto de <strong>Domingo à domingo</strong> mas com <strong>horários flexíveis</strong>.</p>
            

            <address>
    <h3>Endereço</h3>
    <p>
        Quadra 30, Lote 36, Rua 16<br />
        Jardim Barragem IV<br />
        Águas Lindas de Goiás
    </p>
    <p>Perto do Colégio Estadual Maria do Carmo</p>
</address>


        <div className="googlemapslocation fade">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.466655622619!2d-48.2909667!3d-15.726433799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bc9db2717f387%3A0xe2d53a61e050df43!2sLu%20Modas%20-%20Confec%C3%A7%C3%B5es%20e%20Uniformes!5e0!3m2!1spt-BR!2sbr!4v1762542795722!5m2!1spt-BR!2sbr"
            width="600"
            height="350"
            style={{ border: "4px solid blueviolet", borderRadius: "12px" }}
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
        <Contato /> 
        </div>
        </>
    )
}


export default Body;