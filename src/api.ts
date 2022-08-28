import axios from 'axios';

const BASE = 'https://jsonplaceholder.typicode.com';

const http = axios.create({
    baseURL: BASE
})

export const Api = {
    getAlbums: async () => {

        let response = await http.get('/albums');
        let json = await response.data;
        return json;
    },
    getPhotos: async (userId: string | undefined) => {
        let response = await http.get(`/albums/${userId}/photos`);
        let json = await response.data;
        return json;
    },
    getPhoto: async (photoId: string | undefined) => {
        let response = await http.get(`/photos/${photoId}`);
        let json = await response.data;
        return json;
    }

}