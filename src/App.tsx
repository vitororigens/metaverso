import React, { useState } from 'react';
import image from './assets/Montagem-da-cidade.svg';
import personagemStoped from './assets/Personagem01.png';
import city from "./assets/open-the-door.gif"
import personagemWalking from './assets/walking.gif'
import { link } from 'fs';

interface Position {
  top: number;
  left: number;
}

interface Animacao {
  personagem: string;
  direction: 'forward' | 'backward';
}

function App() {
  const [personagemPos, setPersonagemPos] = useState<Position>({ top: 0, left: 0 });
  const [popupStates, setPopupStates] = useState<{ [key: string]: boolean }>({
    Artigos: false,
    Livros: false,
    Cursos: false,
    Revistas: false,
    'Quem Somos': false,
    Eventos: false,
    Criptoverso: false,
    Criptopedia: false,
    Relatórios: false,
    Notícias: false,
  });
  const [personagemSize, setPersonagemSize] = useState<number>(100);
  const [animacaoDoor, setAnimacaoDoor] = useState(false)
  const [animacao, setAnimacao] = useState<Animacao>({ personagem: personagemStoped, direction: 'forward' })

  const handleMovePersonagem = (top: number, left: number, popupName: string, animacao: string, direction: 'forward' | 'backward') => {
    setPersonagemPos({ top, left });
    setPopupStates((prevState) => ({ ...Object.fromEntries(Object.keys(prevState).map(key => [key, false])), [popupName]: true }));
    setAnimacao({ personagem: animacao, direction });

    // Verifica se o personagem está indo para frente ou para trás
    if (direction != 'backward') {
      // Se for para trás, inverte a direção do personagem
      setAnimacao((prevState) => ({ ...prevState, direction: 'forward' }));
    }
  }

  const handleFadeIn = (popupName: string) => {
    setPersonagemSize(0);
    setTimeout(() => {
      setPopupStates((prevState) => ({ ...prevState, [popupName]: false }));
      setAnimacaoDoor(true)
    }, 3000);
  };

  return (
    <div className="App">
      <style>
        {`
        .App {
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          width: 100vw;
        }
        .Container {
          position: relative; 
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50%;
        
        }
        
        .Card{
          display: flex;
          flex-direction: row;
        }
        
        .card1 {
          position: absolute;
          top: 265px;
          left: 100px;
          z-index: 1; 
        }
        
        .card2 {
          position: absolute;
          top: 210px;
          left: 180px;
          z-index: 1; 
        }
        
        .card3 {
          position: absolute;
          top: 100px;
          left: 380px;
          z-index: 1; 
        }
        
        .card4 {
          position: absolute;
          top: 140px;
          left: 500px;
          z-index: 1; 
        }
        
        .card5 {
          position: absolute;
          top: 220px;
          left: 410px;
          z-index: 1; 
        }
        
        .card6{
          position: absolute;
          top: 295px;
          left: 250px;
          z-index: 1; 
        }
        
        .card7 {
          position: absolute;
          top: 340px;
          left: 380px;
          z-index: 1; 
        }
        
        .card8 {
          position: absolute;
          top: 450px;
          left: 495px;
          z-index: 1; 
        }
        
        .card9 {
          position: absolute;
          top: 200px;
          left: 650px;
          z-index: 1; 
        }
        
        .card10 {
          position: absolute;
          top: 310px;
          left: 750px;
          z-index: 1; 
        }
        
        .Animacao{
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: black;
          z-index: 99;
        }
        
        `}
      </style>
      <div className="Container">
        <div >
          <img src={image} alt="Cidade" />
        </div>

        {/* Componente card1 */}
        <div className="card1">
          <div className="Card">
            <Button onClick={() => handleMovePersonagem(245, 100, 'Artigos', personagemWalking, 'forward')} />
            {popupStates['Artigos'] && <Popup link='https://www.ibchain.com.br/artigos/' text="Artigos" onClick={() => handleFadeIn('Artigos')} />}
          </div>
        </div>

        {/* Componente card2 */}
        <div className="card2">
          <div className="Card">
            <Button onClick={() => handleMovePersonagem(210, 180, 'Livros', personagemWalking, 'backward')} />
            {popupStates['Livros'] && <Popup link='https://www.ibchain.com.br/livros/' text="Livros" onClick={() => handleFadeIn('Livros')} />}
          </div>
        </div>

        {/* Componente card3 */}
        <div className="card3">
          <div className="Card">
            <Button onClick={() => handleMovePersonagem(100, 380, 'Cursos', personagemWalking, 'forward')} />
            {popupStates['Cursos'] && <Popup link='https://www.ibchain.com.br/cursos/' text="Cursos" onClick={() => handleFadeIn('Cursos')} />}
          </div>
        </div>

        {/* Componente card4 */}
        <div className="card4">
          <div className="Card">
            <Button onClick={() => handleMovePersonagem(140, 500, 'Revistas', personagemWalking, 'backward')} />
            {popupStates['Revistas'] && <Popup link='revistas' text="Revistas" onClick={() => handleFadeIn('Revistas')} />}
          </div>
        </div>

        {/* Componente card5 */}
        <div className="card5">
          <div className="Card">
            <Button onClick={() => handleMovePersonagem(220, 410, 'Quem Somos', personagemWalking, 'forward')} />
            {popupStates['Quem Somos'] && <Popup link='https://www.ibchain.com.br/quem-somos/' text="Quem Somos" onClick={() => handleFadeIn('Quem Somos')} />}
          </div>
        </div>

        {/* Componente card6 */}
        <div className="card6">
          <div className="Card">
            <Button onClick={() => handleMovePersonagem(295, 250, 'Eventos', personagemWalking, 'backward')} />
            {popupStates['Eventos'] && <Popup link='https://www.ibchain.com.br/eventos/' text="Eventos" onClick={() => handleFadeIn('Eventos')} />}
          </div>
        </div>

        {/* Componente card7 */}
        <div className="card7">
          <div className="Card">
            <Button onClick={() => handleMovePersonagem(340, 380, 'Criptoverso', personagemWalking, 'forward')} />
            {popupStates['Criptoverso'] && <Popup link='https://www.ibchain.com.br/criptoverso/' text="Criptoverso" onClick={() => handleFadeIn('Criptoverso')} />}
          </div>
        </div>

        {/* Componente card8 */}
        <div className="card8">
          <div className="Card">
            <Button onClick={() => handleMovePersonagem(450, 495, 'Criptopedia', personagemWalking, 'backward')} />
            {popupStates['Criptopedia'] && <Popup link='https://www.ibchain.com.br/criptopedia/' text="Criptopedia" onClick={() => handleFadeIn('Criptopedia')} />}
          </div>
        </div>

        {/* Componente card9 */}
        <div className="card9">
          <div className="Card">
            <Button onClick={() => handleMovePersonagem(200, 650, 'Relatórios', personagemWalking, 'forward')} />
            {popupStates['Relatórios'] && <Popup link='https://www.ibchain.com.br/relatorios/' text="Relatórios" onClick={() => handleFadeIn('Relatórios')} />}
          </div>
        </div>

        {/* Componente card10 */}
        <div className="card10">
          <div className="Card">
            <Button onClick={() => handleMovePersonagem(310, 750, 'Notícias', personagemWalking, 'backward')} />
            {popupStates['Notícias'] && <Popup link='https://www.ibchain.com.br/noticias/' text="Notícias" onClick={() => handleFadeIn('Notícias')} />}
          </div>
        </div>

        <img
          src={animacao.personagem}
          alt="Personagem"
          style={{
            height: personagemSize,
            margin: 15,
            position: 'absolute',
            top: personagemPos.top,
            left: personagemPos.left,
            transform: animacao.direction === 'backward' ? 'scaleX(1)' : 'scaleX(-1)', // Inverte a imagem horizontalmente se a direção for backward
            transition: 'height 3s, top 3s, left 3s, transform 0.3s', // Adiciona transform à transição para suavizar a inversão
          }}
        />
      </div>
      {animacaoDoor &&
        <div className='Animacao'>
          <img style={{
            width: '100%',
            height: '100%'
          }} src={city} alt='Entrando na cidade' />
        </div>
      }
    </div>
  );
}

export default App;

interface props {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  link: string;
}


export function Popup({text, onClick, link}: props){ 
  return(
    <div className="Popup">
      <style>
        {`
        .Popup{
          display: flex;
              height: 40px;
              max-width: 110px;
              text-align: center;
              padding-right: 10px;
              padding-left: 10px;
              background-color: #fff;
              background: linear-gradient(90deg, #0099FF 0%, #00DDA6 100%);
              box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
              border-radius: 6px;
              align-items: center;
              justify-content: center;
              z-index: 1;
              margin-left: 5px;
        }
      
        .Text{
          font-size: 14px;
          color: white; 
          font-weight: bold;  
          transition: 0.5s;
        }
      
        .Text:hover{
          color: #00DDA6;
        }
      
        .Button{
          cursor: pointer;
        }
        `}
      </style>
        <div className='Button' onClick={onClick} ><link href={link}></link><text className="Text">{text}</text></div>
    </div>
  )
}

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }

export function Button({ onClick }: ButtonProps) {
  return (
    <div className="Circulo" onClick={onClick}>
      <style>
      {`
      .Bola{
        width: 30px;
        height: 30px;
        background-color: #FFF;
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        transition: 1s;
      }
      .Bola:hover{
        background-color: #0099FF;
    
      }
      
      .Circulo{
        display: flex;
        width: 40px;
        height: 40px;
        border-radius: 50%; 
        border: 2px solid  #FFF; 
        align-items: center;
        justify-content: center;
        transition: 1s;
      }
      .Circulo:hover{
        border: 2px solid  #0099FF; 
    
      }
    
      `}
      </style>
      <div className="Bola" />
    </div>
  );
}
