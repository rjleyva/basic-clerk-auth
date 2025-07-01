import { lazy, Suspense } from 'react';
import LoadingRing from './components/LoadingRing.tsx';

const App = lazy(() => import('./app.tsx'));
const NavBar = lazy(() => import('./components/NavBar.tsx'));
const Footer = lazy(() => import('./components/Footer.tsx'));

const routes = [
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingRing />}>
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
      </Suspense>
    )
  }
];

export default routes;
