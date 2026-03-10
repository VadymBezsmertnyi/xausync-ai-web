import React, { FunctionComponent } from "react";
import Head from "next/head";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// constants
import { NAME_APP, CONTACT_EMAIL } from "@/constants";

// styles
import styles from "./TermsOfUse.module.css";

const TermsOfUse: FunctionComponent = () => {
  const { i18n } = useLocalesProvider();

  const line = (
    subTitle: string,
    text: string,
    list: string[] = [],
    isPrice: boolean = false,
    isFreePrice: boolean = false
  ) => (
    <>
      {subTitle.length ? <h4 className={styles.subTitle}>{subTitle}</h4> : null}
      {text.length ? (
        <p
          className={
            isFreePrice
              ? styles.priceFree
              : isPrice
                ? styles.price
                : styles.text
          }
        >
          {text}
        </p>
      ) : null}
      {list.length ? (
        <ul className={styles.list}>
          {list.map((item, index) => (
            <li className={styles.itemList} key={index}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );

  return (
    <>
      <Head>
        <title>{i18n._("Terms of Use — XauSync AI")}</title>
        <meta
          name="description"
          content={i18n._(
            "XauSync AI Terms of Use - Read our terms for using the AI-powered educational market analysis app, including user responsibilities, educational purpose, and service guidelines."
          )}
        />
        <meta
          name="keywords"
          content={i18n._(
            "Terms of Use, XauSync AI, legal terms, user agreement, market analysis terms, educational market analysis, service terms"
          )}
        />
        <meta
          property="og:title"
          content={i18n._("Terms of Use — XauSync AI")}
        />
        <meta
          property="og:description"
          content={i18n._(
            "XauSync AI Terms of Use - Read our terms for using the AI-powered educational market analysis app, including user responsibilities and service guidelines."
          )}
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={i18n._("XauSync AI Terms of Use")}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={NAME_APP} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={i18n._("Terms of Use — XauSync AI")}
        />
        <meta
          name="twitter:description"
          content={i18n._(
            "XauSync AI Terms of Use - Read our terms for using the AI-powered educational market analysis app, including user responsibilities and service guidelines."
          )}
        />
        <meta name="twitter:image" content="/twitter-image.png" />
        <meta
          name="twitter:image:alt"
          content={i18n._("XauSync AI Terms of Use")}
        />
        <link rel="canonical" href="https://xausync.ai/terms-of-use" />
        <meta
          name="author"
          content="Vadym Bezsmertnyi, Sole Proprietor (Ukraine)"
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>{i18n._("Terms of Use")}</h1>
        <div>
          <p className={styles.text}>
            <strong>{i18n._("Last updated:")}</strong>{" "}
            {i18n._("March 10, 2026")}
          </p>
          <p className={styles.text}>
            {i18n._(
              `"{NAME_APP}" mobile and web applications are developed and operated by Vadym Bezsmertnyi, Sole Proprietor (Ukraine) ("us", "we", or "our"). By accessing or using our AI-powered educational market analysis app and web services ("Service"), you (the User) agree to abide by and be bound by these Terms of Use. Please read these terms carefully before using the service.`,
              { NAME_APP }
            )}
          </p>
        </div>
        <div>
          {line(
            i18n._("1. Purpose of the Application"),
            i18n._(
              `{NAME_APP} is an AI-powered mobile and web application designed to provide educational market analysis, learning insights, and information for studying XAU/USD (Gold/US Dollar) market behavior. The application offers real-time market data, AI-generated educational insights, technical indicators, pattern recognition, and analytical tools to help users understand market analysis concepts. The service is intended for informational and educational purposes only.`,
              { NAME_APP }
            )
          )}
        </div>
        <div>
          {line(
            i18n._("2. Educational and Informational Use"),
            i18n._(
              `{NAME_APP} provides market analysis and educational insights for learning purposes only. The application does not provide financial advice, investment recommendations, or guarantee profits, outcomes, or results. Users are responsible for their own decisions and should conduct their own research before making any financial decisions.`,
              { NAME_APP }
            )
          )}
        </div>
        <div>
          {line(
            i18n._("3. No Financial Advice"),
            i18n._(
              "The content, educational insights, and analysis provided by {NAME_APP} do not constitute financial advice, investment advice, or trading recommendations. All information is for educational purposes only. Users should consult with qualified financial advisors before making any investment decisions.",
              { NAME_APP }
            )
          )}
        </div>
        <div>
          {line(
            i18n._("4. Trading Risks"),
            i18n._(
              "Trading financial instruments, including XAU/USD, involves substantial risk and may not be suitable for all investors. Past performance does not guarantee future results. {NAME_APP} does not guarantee profits, outcomes, or results. Users should never trade with money they cannot afford to lose.",
              { NAME_APP }
            )
          )}
        </div>
        <div>
          {line(
            i18n._("5. AI Analysis Limitations"),
            i18n._(
              "The AI-powered analysis and educational insights provided by {NAME_APP} are based on historical data and algorithms. Market conditions can change rapidly, and AI predictions may be incomplete, delayed, or inaccurate. Users should use AI insights as one tool among many in their learning process.",
              { NAME_APP }
            )
          )}
        </div>
        <div>
          {line(
            i18n._("6. Account Registration and Security"),
            i18n._(
              "To access {NAME_APP} features, users can create an account using email/password, Google Sign-In, or Apple Sign-In. Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account. Users should provide accurate information during registration and notify us immediately of any unauthorized use.",
              { NAME_APP }
            )
          )}
        </div>
        <div>
          {line(
            i18n._("7. Energy Purchases and Payments"),
            i18n._(
              "{NAME_APP} offers premium features through Energy-based access. Users purchase internal learning currency called Energy through the App Store or Google Play (via RevenueCat). Energy is used to access AI educational analysis and learning features. Payment processing is handled by the respective app stores. Energy purchases are non-refundable except as required by law or app store policies. Users may manage their Energy purchases through their app store account settings.",
              { NAME_APP }
            )
          )}
        </div>
        <div>
          {line(
            i18n._("8. Acceptable Use"),
            i18n._(
              "Users agree to use {NAME_APP} in accordance with these terms and applicable laws. Prohibited activities include:",
              { NAME_APP }
            ),
            [
              i18n._(
                "Reverse-engineering or attempting to extract our source code"
              ),
              i18n._("Using automated bots or scripts to access the service"),
              i18n._("Sharing account credentials with third parties"),
              i18n._(
                "Using the service for unlawful activities or market manipulation"
              ),
              i18n._(
                "Distributing proprietary information without authorization"
              ),
              i18n._("Interfering with the service's operation or security"),
            ]
          )}
        </div>
        <div>
          {line(
            i18n._("9. Intellectual Property"),
            i18n._(
              "All content, features, and functionality of {NAME_APP} are owned by Vadym Bezsmertnyi, Sole Proprietor (Ukraine) and protected by copyright, trademark, and other intellectual property laws. Users may not copy, modify, distribute, or create derivative works without our explicit written permission.",
              { NAME_APP }
            )
          )}
        </div>
        <div>
          {line(
            i18n._("10. Market Data and Third-Party Content"),
            i18n._(
              "Market data provided through {NAME_APP} is sourced from third-party providers and may be delayed or contain errors. We do not guarantee the accuracy, completeness, or timeliness of market data. Users should verify critical market information from multiple sources before making decisions.",
              { NAME_APP }
            )
          )}
        </div>
        <div>
          {line(
            i18n._("11. Service Availability"),
            i18n._(
              "We strive to provide reliable service but cannot guarantee uninterrupted access. {NAME_APP} may be temporarily unavailable for maintenance, technical issues, or other reasons beyond our control. We are not liable for losses resulting from service interruptions.",
              { NAME_APP }
            )
          )}
        </div>
        <div>
          {line(
            i18n._("12. Limitation of Liability"),
            i18n._(
              "To the maximum extent permitted by law, {NAME_APP} and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to financial losses, lost profits, data loss, or other damages, arising from your use of our services or inability to use our services.",
              { NAME_APP }
            )
          )}
        </div>
        <div>
          {line(
            i18n._("13. Indemnification"),
            i18n._(
              "Users agree to indemnify and hold harmless {NAME_APP} and its developers from any claims, damages, or expenses arising from their use of the service, violation of these terms, or infringement of third-party rights.",
              { NAME_APP }
            )
          )}
        </div>
        <div>
          {line(
            i18n._("14. Account Suspension and Termination"),
            i18n._(
              "We reserve the right to suspend or terminate user accounts for violations of these terms, fraudulent activity, or any reason necessary to protect our service or other users. Terminated users lose access to all features and data. Users may delete their accounts at any time through the app settings.",
              { NAME_APP }
            )
          )}
        </div>
        <div>
          {line(
            i18n._("15. Privacy and Data Protection"),
            i18n._(
              "Your privacy is important to us. Our collection, use, and protection of your personal information is described in our Privacy Policy, which is incorporated into these terms by reference. By using {NAME_APP}, you consent to our data practices as described in the Privacy Policy.",
              { NAME_APP }
            )
          )}
        </div>
        <div>
          {line(
            i18n._("16. Dispute Resolution"),
            i18n._(
              "Any disputes arising from these terms or your use of {NAME_APP} shall be governed by applicable laws. We encourage users to contact us directly at {CONTACT_EMAIL} to resolve any issues informally before pursuing formal dispute resolution.",
              { NAME_APP, CONTACT_EMAIL }
            )
          )}
        </div>
        <div>
          {line(
            i18n._("17. Changes to Terms"),
            i18n._(
              "We may update these Terms of Use periodically. Changes will be posted on this page with a revised date. For significant changes, we will notify users through the app or email. Continued use of the service after changes constitutes acceptance of the updated terms."
            )
          )}
        </div>
        <div>
          {line(
            i18n._("18. Contact Information"),
            i18n._(
              "If you have questions about these Terms of Use, please contact us at {CONTACT_EMAIL}.",
              { CONTACT_EMAIL }
            )
          )}
        </div>
      </div>
    </>
  );
};

export default TermsOfUse;
