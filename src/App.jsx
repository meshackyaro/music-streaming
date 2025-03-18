import { useRoutes } from "react-router-dom";
import { ROUTES } from "./routes/Router";

function App() {
  return useRoutes(ROUTES);
}

export default App;
