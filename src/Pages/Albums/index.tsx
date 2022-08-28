import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { PhotoItem } from "../../components/PhotoItem";

import { AlbumType } from "../../types/AlbumType";
import { Api } from "../../api";

import * as C from './styles';
import { BackButton } from "../../components/BackButton";
import { Loading } from "../../components/Loading";

export const Albums = () => {
    
    let { id } = useParams();

    const [album, setAlbum] = useState<AlbumType[]>([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        loadPhotos();
    }, []);

    const loadPhotos = async () => {
        setLoading(true);
        let response = await Api.getPhotos(id);
        setLoading(false);
        setAlbum(response);
    }

    return (
        <>
        <BackButton key="1" label="voltar" />
        {loading &&
            <Loading />
        }
        {album &&
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
        }
        </>
    )
}