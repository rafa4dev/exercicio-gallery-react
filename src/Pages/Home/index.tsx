import { useEffect, useState } from "react"
import { AlbumItem } from "../../components/AlbumItem"
import { AlbumType } from "../../types/AlbumType";
import { Api } from "../../api";
import { Loading } from "../../components/Loading";

export const Home = () => {

    const [album, setAlbum] = useState<AlbumType[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        setLoading(true);
        let response = await Api.getAlbums();
        setLoading(false);
        setAlbum(response);
    };



    return (
        <>
        {loading &&
            <Loading />
        }
        {album &&
            <>
                {album.map((item, index) => (
                    <AlbumItem key={index} data={item} />
                ))}
            </>
        }
        </>
    )
}