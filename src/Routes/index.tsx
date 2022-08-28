import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Albums } from "../Pages/Albums";
import { Photo } from "../Pages/Photos";
import { NotFound } from "../Pages/NotFound";

export const RouterList = () => {
    return useRoutes([
        { path: '/', element: <Home />},
        { path: '/albums/:id', element: <Albums />},
        { path: '/photo/:id', element: <Photo />},
        { path: '*', element: <NotFound />}
    ])
}