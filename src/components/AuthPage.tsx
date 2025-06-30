import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react';

const afterSignOutUrl = '/';

const AuthPage = () => {
  return (
    <header
      id="auth-header"
      className="flex flex-col items-center m-auto p-4 max-w-xl"
    >
      <h1
        id="auth-heading"
        className="text-xl md:text-2xl lg:text-4xl font-bold my-4"
      >
        Welcome to Me in Bytes
      </h1>

      <p id="auth-message" className="text-base mb-6 font-medium">
        Sign up for free and start earning rewards.
      </p>

      <div className="mockup-browser border-base-300 border w-full">
        <div className="mockup-browser-toolbar">
          <div className="input">https://meinbytes.com/signin</div>
        </div>

        <div className="grid place-content-center border-t border-base-300 h-80">
          <section id="auth-section" aria-labelledby="auth-heading">
            <SignedOut>
              <SignInButton mode="modal">
                <span className="btn btn-primary">Sign In</span>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl={afterSignOutUrl} />
            </SignedIn>
          </section>
        </div>
      </div>
    </header>
  );
};

export default AuthPage;
