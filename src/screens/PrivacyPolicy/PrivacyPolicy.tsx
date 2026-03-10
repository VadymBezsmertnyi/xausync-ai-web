import React, { FunctionComponent } from "react";
import Head from "next/head";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// constants
import { NAME_APP, CONTACT_EMAIL } from "@/constants";

// styles
import styles from "./PrivacyPolicy.module.css";

export const PrivacyPolicy: FunctionComponent = () => {
  const { i18n } = useLocalesProvider();

  const line = (subTitle: string, text: string, list: string[] = []) => (
    <>
      <h4 className={styles.subTitle}>{subTitle}</h4>
      {text.length ? <p className={styles.text}>{text}</p> : null}
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
        <title>{i18n._("Privacy Policy — XauSync AI")}</title>
        <meta
          name="description"
          content={i18n._(
            "XauSync AI Privacy Policy - Learn how we collect, use, and protect your personal information when using our AI-powered educational market analysis app. Understand our data practices and your privacy rights."
          )}
        />
        <meta
          name="keywords"
          content={i18n._(
            "Privacy Policy, XauSync AI, data protection, personal information, AI market analysis education, privacy rights, data security, GDPR compliance"
          )}
        />
        <meta
          property="og:title"
          content={i18n._("Privacy Policy — XauSync AI")}
        />
        <meta
          property="og:description"
          content={i18n._(
            "XauSync AI Privacy Policy - Learn how we collect, use, and protect your personal information when using our AI-powered educational market analysis app."
          )}
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={i18n._("XauSync AI Privacy Policy")}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={NAME_APP} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={i18n._("Privacy Policy — XauSync AI")}
        />
        <meta
          name="twitter:description"
          content={i18n._(
            "XauSync AI Privacy Policy - Learn how we collect, use, and protect your personal information when using our AI-powered educational market analysis app."
          )}
        />
        <meta name="twitter:image" content="/twitter-image.png" />
        <meta
          name="twitter:image:alt"
          content={i18n._("XauSync AI Privacy Policy")}
        />
        <link rel="canonical" href="https://xausync.ai/privacy-policy" />
        <meta
          name="author"
          content="Vadym Bezsmertnyi, Sole Proprietor (Ukraine)"
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>{i18n._("Privacy Policy")}</h1>
        <div>
          <p className={styles.text}>
            <strong>{i18n._("Last updated:")}</strong>{" "}
            {i18n._("March 10, 2026")}
          </p>
          <p className={styles.text}>
            {i18n._(
              `The "{NAME_APP}" mobile and web applications are developed and operated by Vadym Bezsmertnyi, Sole Proprietor (Ukraine) ("us", "we", or "our"). This Privacy Policy explains how we collect, use, and protect your personal information when you access and use our AI-powered educational market analysis app and services ("Service").`,
              { NAME_APP }
            )}
          </p>
        </div>
        <div>
          <h2 className={styles.title}>{i18n._("Information We Collect")}</h2>
          {line(
            i18n._("Authentication Data"),
            i18n._(
              "To provide access to {NAME_APP} features, we collect authentication information when you create an account or sign in:",
              { NAME_APP }
            ),
            [
              i18n._("Email address and display name from your account"),
              i18n._("Firebase UID for user identification"),
              i18n._(
                "Authentication provider information (Google, Apple, Email/Password)"
              ),
              i18n._("Profile photo URL (if provided)"),
              i18n._("Onboarding preferences and settings"),
            ]
          )}
          {line(
            i18n._("Device and Session Data"),
            i18n._(
              "We automatically collect technical information to operate and improve our services:"
            ),
            [
              i18n._("Unique device identifier"),
              i18n._("IP address and general location information"),
              i18n._("Browser and application user agent details"),
              i18n._("Push notification token for alerts"),
              i18n._("Session tokens and authentication refresh tokens"),
            ]
          )}
          {line(
            i18n._("Analytics and Usage Data"),
            i18n._(
              "We use Firebase Analytics to understand how our app is used:"
            ),
            [
              i18n._("Feature usage patterns and frequency"),
              i18n._("Screen views and navigation paths"),
              i18n._("App performance and crash data"),
              i18n._("General demographic information (anonymous)"),
            ]
          )}
          {line(
            i18n._("Learning Data"),
            i18n._(
              "We store data related to your learning activities and analysis:"
            ),
            [
              i18n._("Saved analysis examples and learning history"),
              i18n._("Custom indicators and settings preferences"),
              i18n._("Alert configurations and notification preferences"),
              i18n._("Market watchlists and favorites"),
            ]
          )}
        </div>
        <div>
          <h2 className={styles.title}>
            {i18n._("How We Use Your Information")}
          </h2>
          {line(
            i18n._("Service Provision"),
            i18n._(
              "We use your information to provide and maintain our AI-powered educational market analysis service:"
            ),
            [
              i18n._("Authenticate users and provide personalized access"),
              i18n._(
                "Deliver real-time market analysis and educational insights"
              ),
              i18n._("Send push notifications for market alerts"),
              i18n._("Maintain your learning history and preferences"),
            ]
          )}
          {line(
            i18n._("Service Improvement"),
            i18n._("Analytics data helps us enhance the user experience:"),
            [
              i18n._("Identify and fix technical issues"),
              i18n._("Optimize app performance and features"),
              i18n._("Understand user behavior to improve design"),
              i18n._("Develop new features based on usage patterns"),
            ]
          )}
        </div>
        <div>
          <h2 className={styles.title}>{i18n._("Third-Party Services")}</h2>
          {line(
            i18n._("Service Providers"),
            i18n._(
              "We integrate with trusted third-party services to deliver {NAME_APP}:",
              { NAME_APP }
            ),
            [
              i18n._("Firebase Authentication for secure user login"),
              i18n._(
                "Google Sign-In and Apple Sign-In for social authentication"
              ),
              i18n._("Firebase Analytics for usage insights"),
              i18n._("RevenueCat for Energy purchase management and billing"),
              i18n._("MetaApi.cloud for real-time market data integration"),
            ]
          )}
          {line(
            i18n._("Data Sharing"),
            i18n._("We only share data with third parties when necessary:"),
            [
              i18n._("Authentication providers for login verification"),
              i18n._("App stores for Energy purchase billing processing"),
              i18n._("Market data providers for real-time price information"),
              i18n._("Analytics services (anonymous, aggregated data only)"),
            ]
          )}
        </div>
        <div>
          <h2 className={styles.title}>{i18n._("Data Security")}</h2>
          {line(
            i18n._("Security Measures"),
            i18n._(
              "We implement industry-standard security to protect your data:"
            ),
            [
              i18n._("Encryption for data transmission"),
              i18n._("Secure Firebase backend with access controls"),
              i18n._("Regular security reviews and updates"),
              i18n._(
                "Limited access to user data by authorized personnel only"
              ),
            ]
          )}
          {line(
            i18n._("Data Retention"),
            i18n._(
              "We retain data for a limited period where necessary for legal, security, billing, or operational purposes:"
            ),
            [
              i18n._("Account data: retained while your account is active"),
              i18n._(
                "Learning history: retained for a reasonable period after account deletion"
              ),
              i18n._("Analytics data: retained in anonymous, aggregated form"),
              i18n._(
                "Authentication tokens: automatically refreshed and expired"
              ),
            ]
          )}
        </div>
        <div>
          <h2 className={styles.title}>{i18n._("Your Rights and Choices")}</h2>
          {line(
            i18n._("User Rights"),
            i18n._(
              "You have the following rights regarding your personal data:"
            ),
            [
              i18n._("Access: Request a copy of your personal data"),
              i18n._("Correction: Update inaccurate or incomplete information"),
              i18n._("Deletion: Request removal of your account and data"),
              i18n._("Portability: Request your data in a readable format"),
              i18n._("Opt-out: Disable analytics tracking in app settings"),
            ]
          )}
          {line(
            i18n._("Managing Your Data"),
            i18n._("You can manage your data through the app:"),
            [
              i18n._("Account settings to update profile information"),
              i18n._("Privacy settings to control data sharing preferences"),
              i18n._("Delete account option to remove all personal data"),
              i18n._("Contact us to request data access or correction"),
            ]
          )}
        </div>
        <div>
          <h2 className={styles.title}>{i18n._("Push Notifications")}</h2>
          {line(
            i18n._("Notification Types"),
            i18n._("With your permission, we send push notifications for:"),
            [
              i18n._("Learning alerts and market examples"),
              i18n._("Price movement notifications"),
              i18n._("AI analysis updates and insights"),
              i18n._("Important service announcements"),
            ]
          )}
          {line(
            i18n._("Notification Control"),
            i18n._("You have full control over notifications:"),
            [
              i18n._("Enable/disable notifications in app settings"),
              i18n._("Choose which alert types you receive"),
              i18n._("Manage notification frequency and timing"),
              i18n._("Revoke notification permission at any time"),
            ]
          )}
        </div>
        <div>
          <h2 className={styles.title}>
            {i18n._("Energy Purchases and Payments")}
          </h2>
          {line(
            i18n._("Billing Information"),
            i18n._(
              "We use RevenueCat and app stores for Energy purchase management:"
            ),
            [
              i18n._("Payment processing through App Store and Google Play"),
              i18n._("Energy purchase status and transaction management"),
              i18n._("Receipt validation and fraud prevention"),
              i18n._("No credit card information stored on our servers"),
            ]
          )}
          {line(
            i18n._("Energy Purchase Data"),
            i18n._("We store minimal Energy purchase-related information:"),
            [
              i18n._("Energy balance and transaction status"),
              i18n._("Purchase dates and transaction information"),
              i18n._("Feature access levels and permissions"),
              i18n._("Support and billing communication history"),
            ]
          )}
        </div>
        <div>
          <h2 className={styles.title}>{i18n._("Children's Privacy")}</h2>
          {line(
            i18n._("Age Restrictions"),
            i18n._("Our service is not intended for individuals under 18:"),
            [
              i18n._("We do not knowingly collect data from children"),
              i18n._("The service is designed for adult users"),
              i18n._("Parental controls are not implemented"),
              i18n._("If we discover underage users, we delete their data"),
            ]
          )}
        </div>
        <div>
          <h2 className={styles.title}>
            {i18n._("International Data Transfers")}
          </h2>
          {line(
            i18n._("Global Service"),
            i18n._(
              "As a global application, data may be processed internationally:"
            ),
            [
              i18n._("Firebase servers may be located outside your country"),
              i18n._("Data transfers include appropriate safeguards"),
              i18n._("We comply with applicable data protection laws"),
              i18n._("Security measures protect international transfers"),
            ]
          )}
        </div>
        <div>
          {line(
            i18n._("Changes to This Privacy Policy"),
            i18n._(
              "We may update this Privacy Policy periodically. Changes will be posted on this page with a revised date. For significant changes, we will notify users through the app or email. Continued use of the service after changes constitutes acceptance of the updated policy."
            )
          )}
          {line(
            i18n._("Contact Information"),
            i18n._(
              "If you have questions about this Privacy Policy or need to exercise your rights, please contact us at {CONTACT_EMAIL}.",
              { CONTACT_EMAIL }
            )
          )}
        </div>
      </div>
    </>
  );
};
