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
        <Footer
          srOnlyText="Secured by Clerk, an authentication provider"
          messagePrefix="Secured by"
          linkLabel="Clerk"
          linkHref="https://clerk.com/"
        />
      </>
    )
  }
];

export default routes;
