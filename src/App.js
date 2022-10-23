import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
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
          loader: async () => { return fetch('https://openapi.programming-hero.com/api/quiz') },
          element: <Statistics></Statistics>
        },
        {
          path: "blog",
          element: <Blog></Blog>
        },
        {
          path: "/quiz/:id",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: '*',
          element: <NotFound></NotFound>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
