import Layout from "../components/layout/Layout";
import Login from "../pages/login/Login";
import MusicPlayer from "../pages/musicPlayer/MusicPlayer";

export const ROUTES = [
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/music-player",
    element: <MusicPlayer />,
  },
];
