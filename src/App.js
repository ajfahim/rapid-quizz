import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";

import Statistics from "./components/Statistics/Statistics";
import Topics from "./components/Topics/Topics";
import Main from "./layouts/Main/Main";



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => { return fetch('https://openapi.programming-hero.com/api/quiz') },
          element: <>
            <Header></Header>
            <Topics></Topics>
          </>,

        },
        {
          path: 'topics',
          element: <>
            <Header></Header>
            <Topics></Topics>
          </>,

        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: "blog",
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
