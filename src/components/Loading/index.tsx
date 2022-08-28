import * as C from './styles';

import loadingSvg from '../../assets/svgs/loading.svg';


export const Loading = () => {
    return (
        <C.LoadingContainer>
            <img src={loadingSvg} alt="" />
        </C.LoadingContainer>
    )
}