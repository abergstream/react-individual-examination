import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { store } from "./store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Projects from "./pages/Projects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Projects />,
        loader: () => (document.title = "bla - bla"),
      },
      {
        path: "/projects",
        element: <Projects />,
        loader: () => (document.title = "blablabla"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>
  </React.StrictMode>
);
