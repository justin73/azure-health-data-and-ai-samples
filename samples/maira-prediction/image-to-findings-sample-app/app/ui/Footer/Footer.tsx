import Link from 'next/link';

import { useFooterStyles } from './styles';

export const Footer = () => {
  const styles = useFooterStyles();

  return (
    <div className="h-[11em] bg-gray-200 p-4 text-justify text-sm text-gray-900">
      <div className="w-90 mx-auto">
        <span className="font-bold">DISCLAIMER:</span> This demo showcases
        several hypothetical products utilizing AI tools and technologies,
        including foundation models and large language models (such as Azure
        OpenAI GPT-4), in a clinical setting. These are not existing Microsoft
        products, and Microsoft makes no commitment to build such products.
        Generative AI does not always provide accurate or complete information.
        You will need to thoroughly test and evaluate whether an AI tool is fit
        for the intended use and identify and mitigate any risks to end users
        associated with its use. You should thoroughly review the product
        documentation for each tool. Microsoft products and services (1) are not
        designed, intended or made available as a medical device, and (2) are
        not designed or intended to be a substitute for professional medical
        advice, diagnosis, treatment, or judgment and should not be used to
        replace or as a substitute for professional medical advice, diagnosis,
        treatment, or judgment. Customers/partners are responsible for ensuring
        solutions comply with applicable laws and regulations.
      </div>
      <div className={styles.footerContainer}>
        <div className={`${styles.innerFooterContainer} gap-2`}>
          <Link
            href="https://go.microsoft.com/?linkid=2028325"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-900"
          >
            Contact us
          </Link>
          <span>|</span>
          <Link
            href="https://go.microsoft.com/fwlink/?LinkId=521839"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-900"
          >
            Privacy & Cookies
          </Link>
          <span>|</span>
          <Link
            href="https://go.microsoft.com/fwlink/?LinkID=760869"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-900"
          >
            Terms of use
          </Link>
          <span>|</span>
          <Link
            href="https://www.microsoft.com/en-us/legal/intellectualproperty/Trademarks/EN-US.aspx"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-900"
          >
            Trademarks
          </Link>
          <span>|</span>
          <span>{`© Microsoft 2023`}</span>
        </div>
      </div>
    </div>
  );
};
