import { Link } from "react-router-dom"
import { AlbumType } from "../../types/AlbumType"

type Album = {
    data: AlbumType,
}

export const PhotoItem = ({ data }: Album) => {
    return (
        <Link title={data.title} to={`/photo/${data.id}`}>
            <img src={data.thumbnailUrl} alt="Imagem sólida 150x150"/>
        </Link>
    )
}