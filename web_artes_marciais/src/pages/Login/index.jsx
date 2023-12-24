import Container from '../../components/container'
import logo_selvagem from '../../../public/logoSelvagem.png'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import logoFight from '../../../public/logoFight.jpg'

function Login() {
    return (
        <>
            <Container>
                    <div id='loginBoxes'>
                    <img src={logoFight} alt="martialArtsImg" id='martialArts' />
                        <div id='interface'>
                        <div id='logo_text'>
                            <img src={logo_selvagem} alt="logotype" id='logo' /> <h1>SELVAGEM JJT</h1>
                        </div>
                            <h1 className='titleBox'>LOGIN
                                <p>Acess the SelvagemJJT panel using your e-mail and passcode.</p>
                            </h1>
                                <label htmlFor="name"><b>Nome de Usuario</b></label>
                                <input id="name" className='typeBox' type="text" placeholder=' Digite o seu nome' maxLength={20} />
                                <label htmlFor="pass"><b>Senha</b></label>
                                <input id='pass' className='typeBox' type="password" placeholder=' Digite a sua senha' maxLength={12} />
                            <Link to='/tabelas'><input type="button" value="CONFIRMAR" id='btn_confirm' /></Link>
                        </div>
                    </div>
                <Footer />
            </Container>
        </>
    )
}

export default Login