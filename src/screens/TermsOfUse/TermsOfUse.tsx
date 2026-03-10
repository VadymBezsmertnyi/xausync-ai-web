import React, { FunctionComponent } from "react";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// constants
import { CONTACT_EMAIL, NAME_APP } from "@/constants";

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
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>{i18n._("Terms of Use")}</h1>
      <div>
        <p className={styles.text}>
          <strong>{i18n._("Last updated:")}</strong>{" "}
          {i18n._("February 6, 2026")}
        </p>
        <p className={styles.text}>
          {i18n._(
            `"{NAME_APP}" mobile and web applications are developed and operated by Vadym Bezsmertnyi, FOP ("us", "we", or "our"). By accessing or using our mobile application and web services ("Service"), you (the User) agree to abide by and be bound by these Terms of Use. Please read these terms carefully before using the service.`,
            { NAME_APP }
          )}
        </p>
      </div>
      <div>
        {line(
          i18n._("1. Purpose of the Application"),
          i18n._(
            `{NAME_APP} is a comprehensive mobile and web application designed to help beauty professionals (stylists, makeup artists, nail technicians, and other beauty specialists) manage their business operations effectively. The application allows users to create detailed client profiles, manage appointments, synchronize schedules with device calendars, send SMS reminders to clients, convert voice notes to text for appointment documentation, store photos from appointments, and receive notifications about upcoming appointments.`,
            { NAME_APP }
          )
        )}
      </div>
      <div>
        {line(
          i18n._(`2. Permissions and Usage Restrictions`),
          i18n._(
            `By using {NAME_APP}, you agree to utilize the app solely for its intended purposes. Any misuse of the app, such as reverse-engineering, unauthorized modifications, or illegal activities, is strictly prohibited. Users are also responsible for maintaining the confidentiality of their account credentials and ensuring that the app is used in compliance with local laws and regulations.`,
            { NAME_APP }
          )
        )}
      </div>
      <div>
        {line(
          i18n._(`3. Subscriptions and Payments`),
          i18n._(
            `{NAME_APP} offers a free tier with basic features, and two premium subscription plans (Pro and Premium) for advanced functionality. All subscriptions are billed monthly. Payments are processed through the Apple App Store or Google Play, according to their respective policies. Apple and Google may adjust subscription prices depending on your region. Subscriptions renew automatically unless canceled at least 24 hours before the end of the billing period. All payments are non-refundable unless required by applicable law.`,
            {
              NAME_APP,
            }
          )
        )}
      </div>
      <div>
        {line(
          i18n._(`4. Subscription Information`),
          i18n._(`The following subscription plans are available:`)
        )}
      </div>
      <div>
        {line(
          i18n._("Free Plan"),
          i18n._("Price: Free"),
          [
            i18n._("Up to 20 clients"),
            i18n._("3 appointments per client"),
            i18n._("1 photo per appointment"),
            i18n._("1 SMS per month"),
            i18n._("3 minutes speech-to-text per month"),
            i18n._("Basic calendar sync"),
          ],
          false,
          true
        )}
      </div>
      <div>
        {line(
          i18n._("Pro Plan"),
          i18n._("Price: $4.99 per month"),
          [
            i18n._("Up to 100 clients"),
            i18n._("10 appointments per client"),
            i18n._("3 photos per appointment"),
            i18n._("20 SMS per month"),
            i18n._("60 minutes speech-to-text per month"),
            i18n._("Export clients (CSV)"),
            i18n._("Advanced calendar sync"),
          ],
          true,
          false
        )}
      </div>
      <div>
        {line(
          i18n._("Premium Plan"),
          i18n._("Price: $9.99 per month"),
          [
            i18n._("Unlimited clients"),
            i18n._("Unlimited appointments per client"),
            i18n._("20 photos per appointment"),
            i18n._("50 SMS per month"),
            i18n._("300 minutes speech-to-text per month"),
            i18n._("Export/import clients (CSV)"),
            i18n._("Google Calendar integration"),
            i18n._("Full calendar sync and analytics"),
            i18n._("Priority support"),
          ],
          true,
          false
        )}
      </div>
      <div>
        {line(
          i18n._(`5. Notifications and Reminders`),
          i18n._(
            `The application sends push notifications and SMS reminders to inform users about upcoming appointments and related updates. By enabling push notifications and SMS features, users consent to receiving these alerts. It is the user's responsibility to ensure notifications are active on their device and to provide accurate phone numbers for SMS reminders to avoid missing important updates.`
          )
        )}
      </div>
      <div>
        {line(
          i18n._(`6. Data Management and Privacy`),
          i18n._(
            `The application provides tools for managing and storing client data, including voice recordings and SMS data. Users are responsible for entering accurate information, maintaining backups of critical data when necessary, and ensuring they have proper consent from clients for data collection. {NAME_APP} is not liable for any data loss due to user error, device failure, unauthorized access, or third-party service failures. Users must comply with applicable data protection laws and regulations.`,
            { NAME_APP }
          )
        )}
      </div>
      <div>
        {line(
          i18n._(`7. Service Limitations and Disclaimers`),
          i18n._(
            `While we strive to provide reliable service, we cannot guarantee uninterrupted access or complete data security. We are not responsible for temporary service interruptions due to maintenance or technical issues, data loss caused by user actions or device malfunctions, third-party service failures (SMS providers, payment processors, etc.), compliance issues arising from user misuse of the service, or financial losses resulting from service interruptions or data issues.`
          )
        )}
      </div>
      <div>
        {line(
          i18n._(`8. Changes to Terms`),
          i18n._(
            `These Terms of Use may be updated periodically. Any changes will be published within the application, and the effective date will be revised accordingly. Continued use of the service after updates signifies acceptance of the new terms.`
          )
        )}
      </div>
      <div>
        {line(
          i18n._(`9. Limitation of Liability`),
          i18n._(
            `{NAME_APP} and its developers are not responsible for any damages resulting from the use or inability to use the service. This includes issues caused by errors, interruptions, third-party integrations, or unauthorized access to data. We are not responsible for illegal use of the application by users.`,
            { NAME_APP }
          )
        )}
      </div>
      <div>
        {line(
          i18n._(`10. Prohibited Activities and Content Monitoring`),
          i18n._(
            `We may monitor usage patterns to ensure compliance with these terms. In case of detecting misuse of the service, violations of applicable laws, or activities that compromise the integrity of the platform, we may suspend or terminate user accounts without refund. Users are responsible for ensuring that their use of the service complies with all applicable laws and regulations.`
          )
        )}
      </div>
      <div>
        {line(
          i18n._(`11. Support`),
          i18n._(
            `For assistance with technical issues, subscription questions, or other inquiries, users can contact us at {CONTACT_EMAIL}. Our team strives to address support requests promptly, typically within 48 hours.`,
            { CONTACT_EMAIL }
          )
        )}
      </div>
      <div>
        {line(
          i18n._(`12. Account Deletion`),
          i18n._(
            `If you wish to delete your account, you can do so through the app's settings or by submitting a request via the developer's feedback form at the following link: https://vb-dev.org.ua/#feedback.`
          )
        )}
      </div>
      <div>
        {line(
          i18n._(`13. Apple's Standard Terms`),
          i18n._(
            `In addition to these Terms of Use, {NAME_APP} operates under the Apple Standard End User License Agreement (EULA), which can be found at the following link:`,
            { NAME_APP }
          )
        )}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Apple Standard EULA
        </a>
      </div>
      <div>
        {line(
          i18n._(
            `By using {NAME_APP}, you confirm that you have read and agreed to these Terms of Use.`,
            { NAME_APP }
          ),
          ""
        )}
      </div>
    </div>
  );
};

export default TermsOfUse;
