import { RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./LAYOUTS/Main/Main";
import routes from "./ROUTES/SimpleRoute";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
