import React, { FunctionComponent } from "react";
import Head from "next/head";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// constants
import { NAME_APP, CONTACT_EMAIL } from "@/constants";

// styles
import styles from "./Disclaimer.module.css";

const Disclaimer: FunctionComponent = () => {
  const { i18n } = useLocalesProvider();

  const line = (subTitle: string, text: string, list: string[] = []) => (
    <>
      {subTitle.length ? <h4 className={styles.subTitle}>{subTitle}</h4> : null}
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
        <title>{i18n._("Disclaimer — XauSync AI")}</title>
        <meta
          name="description"
          content={i18n._(
            "XauSync AI Disclaimer - Important information about trading risks and the educational nature of our AI-powered trading analysis platform."
          )}
        />
        <meta property="og:title" content={i18n._("Disclaimer — XauSync AI")} />
        <meta
          property="og:description"
          content={i18n._(
            "XauSync AI Disclaimer - Important information about trading risks and the educational nature of our AI-powered trading analysis platform."
          )}
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>{i18n._("Disclaimer")}</h1>
        <div>
          <p className={styles.text}>
            <strong>{i18n._("Last updated:")}</strong>{" "}
            {i18n._("March 10, 2026")}
          </p>
          <p className={styles.text}>
            {i18n._(
              `The "{NAME_APP}" mobile and web applications are developed and operated by Vadym Bezsmertnyi, Sole Proprietor (Ukraine) ("us", "we", or "our"). This disclaimer contains important information about the risks associated with using our trading analysis and AI-powered services.`,
              { NAME_APP }
            )}
          </p>
        </div>
        <div>
          <h2 className={styles.title}>{i18n._("Risk Warning")}</h2>
          {line(
            i18n._("Trading Risks"),
            i18n._(
              "Trading financial instruments, including XAU/USD (Gold/US Dollar), involves substantial risk and is not suitable for all investors. You should carefully consider your financial situation, investment objectives, and risk tolerance before engaging in trading activities."
            )
          )}
          {line(
            i18n._("No Investment Advice"),
            i18n._(
              "The information, analysis, and signals provided by {NAME_APP} are for informational and educational purposes only. They do not constitute investment advice, financial advice, trading recommendations, or a solicitation to buy or sell any financial instrument.",
              { NAME_APP }
            )
          )}
          {line(
            i18n._("AI Limitations"),
            i18n._(
              "Our AI-powered analysis is based on historical data and mathematical algorithms. Past performance is not indicative of future results. AI predictions may be inaccurate, and market conditions can change rapidly due to various factors including economic events, political developments, and market sentiment."
            )
          )}
        </div>
        <div>
          <h2 className={styles.title}>{i18n._("Service Limitations")}</h2>
          {line(
            i18n._("Technical Issues"),
            i18n._(
              "We cannot guarantee uninterrupted service or real-time data accuracy. Technical issues, internet connectivity problems, or system maintenance may temporarily affect service availability."
            )
          )}
          {line(
            i18n._("Data Accuracy"),
            i18n._(
              "While we strive to provide accurate market data and analysis, we cannot guarantee the completeness, accuracy, or timeliness of all information. Market data may be delayed or contain errors."
            )
          )}
          {line(
            i18n._("Third-Party Services"),
            i18n._(
              "Our service may rely on third-party data providers and APIs. We are not responsible for the quality, accuracy, or availability of third-party services."
            )
          )}
        </div>
        <div>
          <h2 className={styles.title}>{i18n._("Financial Responsibility")}</h2>
          {line(
            i18n._("Trading Decisions"),
            i18n._(
              "All trading decisions are your sole responsibility. You should conduct your own research, consider seeking advice from qualified financial advisors, and never trade with money you cannot afford to lose."
            )
          )}
          {line(
            i18n._("Loss Acknowledgment"),
            i18n._(
              "You acknowledge and agree that you are solely responsible for any trading losses incurred. {NAME_APP} and its developers shall not be liable for any financial losses resulting from your use of our services.",
              { NAME_APP }
            )
          )}
        </div>
        <div>
          <h2 className={styles.title}>{i18n._("Limitation of Liability")}</h2>
          {line(
            i18n._("Service Use at Your Own Risk"),
            i18n._(
              "You use {NAME_APP} at your own risk. We disclaim all warranties, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.",
              { NAME_APP }
            )
          )}
          {line(
            i18n._("Damages Exclusion"),
            i18n._(
              "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, trading losses, or data loss, arising from your use of our services."
            )
          )}
        </div>
        <div>
          <h2 className={styles.title}>{i18n._("User Responsibilities")}</h2>
          {line(
            i18n._("Account Security"),
            i18n._(
              "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
            )
          )}
          {line(
            i18n._("Compliance"),
            i18n._(
              "You must comply with all applicable laws and regulations when using our services. This includes tax obligations and financial regulations in your jurisdiction."
            )
          )}
          {line(
            i18n._("Professional Advice"),
            i18n._(
              "You should consult with qualified financial, legal, and tax professionals before making any investment decisions."
            )
          )}
        </div>
        <div>
          <h2 className={styles.title}>{i18n._("Market Volatility")}</h2>
          {line(
            i18n._("High Volatility Warning"),
            i18n._(
              "The XAU/USD market can be highly volatile, especially during economic announcements, geopolitical events, or periods of market uncertainty. Prices can move rapidly in either direction, potentially resulting in significant gains or losses."
            )
          )}
          {line(
            i18n._("Leverage Risks"),
            i18n._(
              "If you use leverage in your trading, be aware that it amplifies both potential profits and losses. High leverage can lead to rapid depletion of your trading capital."
            )
          )}
        </div>
        <div>
          {line(
            i18n._("Changes to Disclaimer"),
            i18n._(
              "We may update this disclaimer periodically. All updates will be published on this page with the revised date. Continued use of our services after changes constitutes acceptance of the updated disclaimer."
            )
          )}
          {line(
            i18n._("Contact Information"),
            i18n._(
              "If you have questions about this disclaimer or our services, please contact us at {CONTACT_EMAIL}.",
              { CONTACT_EMAIL }
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
