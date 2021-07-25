import { Link } from 'react-router-dom'
import { useContext } from 'react'

import IllustrationImg from '../assets/images/illustration.svg'
import LogoImg from '../assets/images/logo.svg'

import {Button} from '../components/Button'
import { AuthContext } from '../contexts/AuthContexts'

import '../styles/auth.scss'


export function NewRoom() {

    const { user } = useContext(AuthContext);

    return(
        <div id="page-auth">
            <aside>
                <img src={IllustrationImg} alt="Simmbolo indicando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A </strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={LogoImg} alt="Letmeask" />
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                        type="text" 
                        placeholder="Digite o código da sala"
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">clique aqui</Link> 
                    </p>
                </div>
            </main>
        </div>
    )
}