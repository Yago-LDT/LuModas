import './styles.css'

export default function Precos(){
    return (
        <div className="precos fade">
            <h1>Preços</h1>
            <hr />
            <div className='categoria'>
                <p className='item'>Consertos</p><p className='valor'>A partir de R$5,00</p>
            </div>
            <hr />
            <div className='categoria'>
                <p className='item'>Facção</p><p className='valor'>A partir de R$5,00 por peça</p>
            </div>
            <hr />
            <div className='categoria'>
                <p className='item'>Cortinas</p><p className='valor'>A partir de R$10,00</p>
            </div>
            <hr />
        <p id="aviso"><strong>Preços adaptáveis</strong>. Podem mudar de acordo com o volume do serviço.</p>
        </div>
    )

}