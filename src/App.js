import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Quiz from "./components/Quiz/Quiz";

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
          loader: async () => { return fetch('https://openapi.programming-hero.com/api/quiz') },
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
        },
        {
          path: "/topics/:id",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${parseInt(params.id)}`)
          },
          element: <Quiz></Quiz>
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
