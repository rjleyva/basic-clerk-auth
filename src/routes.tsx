import App from './app.tsx';
import Footer from './components/Footer.tsx';
import NavBar from './components/NavBar.tsx';

const routes = [
  {
    path: '/',
    element: (
      <>
        <NavBar home="The Kapital" />
        <App />
        <Footer
          footerScreenReaderText="Secured by Clerk, an authentication provider"
          footerMessagePrefix="Secured by"
          footerLinkLabel="Clerk"
          footerLinkHref="https://clerk.com/"
        />
      </>
    )
  }
];

export default routes;
