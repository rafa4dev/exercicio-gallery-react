import { useNavigate } from "react-router-dom";
import * as C from './styles';

type Props = {
    label: string;
}

export const BackButton = (Props : Props) => {
    
    const navegator = useNavigate();

    const handleButtonClick = () => {
        return navegator(-1);
    }

    return (
        <C.Button type="button" onClick={handleButtonClick}>{Props.label}</C.Button>
    )
}