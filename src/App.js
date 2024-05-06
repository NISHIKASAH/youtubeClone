import "./App.css";
import Head from "./component/Head.js";
import Body from "./component/Body.js";
import { Provider } from "react-redux";
import appStore from "./utils/store.js";
import MainContainer from "./component/MainContainer.js";
import WatchPage from "./component/WatchPage.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const createRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Head />
        <RouterProvider router={createRoute} />
      </Provider>
    </div>
  );
}

export default App;
