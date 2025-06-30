import App from './app.tsx';
import Footer from './components/Footer.tsx';
import NavBar from './components/NavBar.tsx';

const routes = [
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <App />
        <Footer />
      </>
    )
  }
];

export default routes;
