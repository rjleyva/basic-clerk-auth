import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react';
import type { JSX } from 'react';

interface AuthPageProps {
  authHeading: string;
  authMessage: string;
  authMockupBrowserUrl: string;
  authScreenReaderText: string;
  authSignInLabel: string;
  authAfterSignOutUrl: string;
}

const AuthPage = ({
  authHeading,
  authMessage,
  authMockupBrowserUrl,
  authScreenReaderText,
  authSignInLabel,
  authAfterSignOutUrl
}: AuthPageProps): JSX.Element => {
  return (
    <main
      className="flex flex-col items-center m-auto p-4 max-w-xl"
      role="main"
    >
      <header className="text-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold my-4">
          {authHeading}
        </h1>
        <p className="text-base mb-6 font-medium">{authMessage}</p>
      </header>

      <section
        className="mockup-browser border-base-300 border w-full"
        aria-label="Sign in panel"
      >
        <header className="mockup-browser-toolbar">
          <div className="input">{authMockupBrowserUrl}</div>
        </header>

        <section
          id="auth-section"
          aria-labelledby="auth-heading"
          className="grid place-content-center border-t border-base-300 h-80"
        >
          <h2 id="auth-heading" className="sr-only">
            {authScreenReaderText}
          </h2>

          <SignedOut>
            <SignInButton mode="modal">
              <span className="btn btn-primary">{authSignInLabel}</span>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl={authAfterSignOutUrl} />
          </SignedIn>
        </section>
      </section>
    </main>
  );
};

export default AuthPage;
