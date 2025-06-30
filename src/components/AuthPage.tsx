import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react';

const afterSignOutUrl = '/';

const AuthPage = () => {
  return (
    <main
      className="flex flex-col items-center m-auto p-4 max-w-xl"
      role="main"
    >
      <header className="text-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold my-4">
          Welcome to Me in Bytes
        </h1>
        <p className="text-base mb-6 font-medium">
          Sign up now for free and claim your rewards.
        </p>
      </header>

      <div className="mockup-browser border-base-300 border w-full">
        <div className="mockup-browser-toolbar">
          <div className="input">https://meinbytes.com/signin</div>
        </div>

        <div className="grid place-content-center border-t border-base-300 h-80">
          <section id="auth-section" aria-labelledby="auth-heading">
            <h2 id="auth-heading" className="sr-only">
              Authentication Section
            </h2>

            <SignedOut>
              <SignInButton mode="modal">
                <span className="btn btn-primary">Sign In with Clerk</span>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl={afterSignOutUrl} />
            </SignedIn>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
