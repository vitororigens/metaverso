import './styles.css';
interface props {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}


export function Popup({text, onClick}: props){ 
  return(
    <div className="Popup">
        <div className='Button' onClick={onClick} ><text className="Text">{text}</text></div>
    </div>
  )
}