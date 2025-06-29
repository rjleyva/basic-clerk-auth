import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react';

const AuthPage = () => {
  return (
    <header id="auth-heading">
      <section id="auth-section">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </section>
    </header>
  );
};

export default AuthPage;
