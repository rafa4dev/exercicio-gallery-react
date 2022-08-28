import { useEffect, useState } from "react"
import { AlbumItem } from "../../components/AlbumItem"
import { AlbumType } from "../../types/AlbumType";
import { Api } from "../../api";

export const Home = () => {

    const [album, setAlbum] = useState<AlbumType[]>([]);

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        let response = await Api.getAlbums();
        setAlbum(response);
    };



    return (
        <>
            {album.map((item, index) => (
                <AlbumItem key={index} data={item} />
            ))}
        </>
    )
}