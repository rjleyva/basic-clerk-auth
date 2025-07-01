import type { JSX } from 'react';
import AuthPage from './components/AuthPage';
import Steps from './components/Steps.tsx';

const App = (): JSX.Element => {
  return (
    <main id="main">
      <AuthPage
        authHeading="Welcome to The Kapital"
        authMessage="No sign-in, no glory. Step into the arena."
        authMockupBrowserUrl="https://thekapital.com/signin"
        authScreenReaderText="Authentication Section"
        authSignInLabel="Sign in"
        authAfterSignOutUrl="/"
      />
      <Steps />
    </main>
  );
};

export default App;
