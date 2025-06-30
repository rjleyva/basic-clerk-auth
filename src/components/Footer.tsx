const Footer = () => {
  return (
    <footer>
      <p className="text-center mx-auto my-4 font-medium text-gray-500 mt-14">
        <span className="sr-only">
          Secured by Clerk, an authentication provider
        </span>
        <span aria-hidden="true">
          Secured by{' '}
          <a
            href="https://clerk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-700"
          >
            Clerk
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
