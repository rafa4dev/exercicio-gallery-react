import * as C from './styles';
import { AlbumType } from '../../types/AlbumType';
import { Link } from 'react-router-dom';

type Album = {
    data: AlbumType,
}

export const AlbumItem = ({ data }: Album) => {
    return (
        <Link to={`/albums/${data.userId}`}>
            <C.AlbumContainer>
                <h2>{data.title}</h2>
            </C.AlbumContainer>
        </Link>
    )
}
 