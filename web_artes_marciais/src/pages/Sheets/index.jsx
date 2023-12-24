import Container from '../../components/container'
import Footer from '../../components/Footer'
import logo_selvagem from '../../../public/logoSelvagem.png'
import logout from '../../../public/logout.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Table from 'react-bootstrap/Table'


function Sheets() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <>
                <div id='btn_container'>
                    <label htmlFor="btn_exit"><Link to='/' ><img src={logout} alt="btn_exit" id='btn_exit' /><span id='link_exit'>SAIR</span></Link></label>
                    <input type="button" value="+ Novo Aluno" id='btn_edit' className='btn_add' onClick={openModal} />
                </div>
                <Container>
                    {modalOpen && (
                        <div className='backdrop_modal_close'>
                            <dialog id='dialog' open>
                                <input type="button" value="X" id='dialog_btn' onClick={closeModal} />
                                <form id='data'>
                                    <fieldset className='containerField'>
                                        <legend>Dados pessoais do aluno</legend>
                                        <p>Nome</p><input type="text" className='boxInput' placeholder='Nome completo' />
                                        <div id='phone_mail'>
                                            <div className='line'><p>E-mail</p><input type="text" className='boxInput' /></div>
                                            <div className='line'><p>Celular</p><input type="number" className='boxInput' placeholder='( ) _ ____-____ ' /></div>
                                        </div>
                                        <p>CPF</p><input type="number" className='boxInput' placeholder='Apenas os numeros' />
                                        <p>Data de nascimento</p><input type="date" className='boxInput' />
                                        <div id='textArea'><p>Descricao</p><textarea id="block_text" cols="25" rows="7"></textarea></div>
                                    </fieldset>
                                    <fieldset className='containerField'>
                                        <legend>Endereco</legend>
                                        <p>Logradouro</p><input type="text" className='boxInput' placeholder='Rua./Av./Tv.' />
                                        <p>Numero</p><input type="text" className='boxInput' placeholder='Numero do endereco' /><p>Complemento</p><input type="text" className='boxInput' placeholder='Bloco / Ponto de referencia' />
                                        <p>Bairro</p><input type="text" className='boxInput' />
                                        <div id='container_cityState'><div className='inline'><p>Cidade</p><select name="ncity" id="icity">
                                            <option value="SC">Joinville</option>
                                        </select></div>
                                            <div className='inline'><p>Estado</p><select name="nstate" id="istate" >
                                                <option value="SC">Santa Catarina</option>

                                            </select></div></div>
                                    </fieldset>
                                </form>
                            </dialog>
                        </div>
                    )}
                    <div className='template'>
                        <caption>Alunos Cadastrados<img src={logo_selvagem} alt="logotype" id='logo_2' /></caption>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Idade</th>
                                    <th>Faixa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='back'>1</td>
                                    <td className='back'>Luiz</td>
                                    <td className='back'>26</td>
                                    <td className='back'>Azul</td>
                                    <td><input type="button" value="Editar" className='button_dell_edit' /> <input type="button" value="Apagar" className='button_dell_edit' /> </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Carlos</td>
                                    <td>37</td>
                                    <td>Branca</td>
                                    <td><input type="button" value="Editar" className='button_dell_edit' /> <input type="button" value="Apagar" className='button_dell_edit' /></td>
                                </tr>
                                <tr>
                                    <td className='back'>3</td>
                                    <td className='back'>Monkey</td>
                                    <td className='back'>58</td>
                                    <td className='back'>Preta</td>
                                    <td><input type="button" value="Editar" className='button_dell_edit' /> <input type="button" value="Apagar" className='button_dell_edit' /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <Footer />
                </ Container>
        </>
    )
}

export default Sheets 
