import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../api";
import { BackButton } from "../../components/BackButton";
import { Loading } from "../../components/Loading";
import { AlbumType } from "../../types/AlbumType";
import * as C from './styles';

export const Photo = () => {

    const { id } = useParams(); 
    const [loading, setLoading] = useState(false);
    const [photo, setPhoto] = useState<AlbumType>(Object);

    const loadPhoto = async () => {
        setLoading(true);
        let response = await Api.getPhoto(id);
        setLoading(false);
        setPhoto(response);
    }

    useEffect(() => {
        loadPhoto();
    }, [])

    return (
        <>
        {loading &&
            <Loading />
        }
        {photo &&
            <C.PhotoShow>
                <BackButton label="voltar" />
                <h2>{photo.title}</h2>
                <img src={photo.thumbnailUrl} alt="Imagem Solida" />
            </C.PhotoShow>
        }
        </>
    )
}