import App from './app.tsx';
import NavBar from './components/NavBar.tsx';

const routes = [
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <App />
      </>
    )
  }
];

export default routes;
