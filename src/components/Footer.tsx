import type { JSX } from 'react';

interface FooterProps {
  footerScreenReaderText: string;
  footerMessagePrefix: string;
  footerLinkLabel: string;
  footerLinkHref: string;
}

const Footer = ({
  footerScreenReaderText,
  footerMessagePrefix,
  footerLinkLabel,
  footerLinkHref
}: FooterProps): JSX.Element => {
  return (
    <footer>
      <p className="text-center mx-auto my-4 font-medium mt-14">
        <span className="sr-only">{footerScreenReaderText}</span>
        <span>
          {footerMessagePrefix}{' '}
          <a
            href={footerLinkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500"
          >
            {footerLinkLabel}
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
