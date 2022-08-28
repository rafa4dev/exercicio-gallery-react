import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { PhotoItem } from "../../components/PhotoItem";

import { AlbumType } from "../../types/AlbumType";
import { Api } from "../../api";

import * as C from './styles';
import { BackButton } from "../../components/BackButton";

export const Albums = () => {
    
    let { id } = useParams();

    const [album, setAlbum] = useState<AlbumType[]>([]);
    
    useEffect(() => {
        loadPhotos();
    }, []);

    const loadPhotos = async () => {
        let response = await Api.getPhotos(id);
        setAlbum(response);
    }

    return (
        <>
        <BackButton key="1" label="voltar" />
        <C.Content>
            {album.length > 0 &&
                <>
                {album.map((item, index) => (
                    <C.PhotoGrid key={index}>
                        <PhotoItem data={item} />    
                    </C.PhotoGrid>
                ))}
                </>
            }
        </C.Content>
        </>
    )
}