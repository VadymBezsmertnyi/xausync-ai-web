import React, { FunctionComponent } from "react";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// constants
import { CONTACT_EMAIL, NAME_APP } from "@/constants";

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
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>{i18n._("Privacy Policy")}</h1>
      <div>
        <p className={styles.text}>
          <strong>{i18n._("Last updated:")}</strong>{" "}
          {i18n._("February 6, 2026")}
        </p>
        <p className={styles.text}>
          {i18n._(
            `The "{NAME_APP}" mobile and web applications are developed and operated by Vadym Bezsmertnyi, FOP ("us", "we", or "our"). This Privacy Policy explains how we collect, use, and protect your personal information when you access and use our mobile application and services ("Service").`,
            { NAME_APP }
          )}
        </p>
      </div>
      <div>
        <h2 className={styles.title}>{i18n._("Information We Collect")}</h2>
        {line(
          i18n._("Information Collection"),
          i18n._(
            "We collect information to ensure the effective functionality of the {NAME_APP} app. The data collected may include:",
            { NAME_APP }
          ),
          [
            i18n._("Contacts: to create client records."),
            i18n._("Calendar data: to synchronize appointments and reminders."),
            i18n._(
              "Camera and photo library: to upload client or work photos."
            ),
            i18n._(
              "Push notifications: to remind users about upcoming appointments."
            ),
            i18n._(
              "Personal user information: such as name, email address, and phone number."
            ),
            i18n._(
              "Subscription information: for managing your account and processing payments. Prices may vary by region and are subject to local taxes."
            ),
            i18n._(
              "Voice recordings: for speech-to-text functionality to convert voice notes into text for appointment documentation."
            ),
            i18n._(
              "SMS data: for sending automated reminders to clients about upcoming appointments."
            ),
            i18n._(
              "Usage analytics: to improve app functionality and user experience."
            ),
            i18n._(
              "Export/import data: for CSV export and import functionality (available with Pro and Premium subscriptions)."
            ),
          ]
        )}
        {line(
          i18n._("Use of Information"),
          i18n._(
            "We process your data based on legitimate interests and contractual necessity. The collected data is used to:"
          ),
          [
            i18n._("Create client records and appointments."),
            i18n._("Send SMS reminders to clients."),
            i18n._(
              "Convert voice recordings to text for appointment documentation."
            ),
            i18n._("Synchronize the calendar for appointment reminders."),
            i18n._(
              "Enable app features such as uploading photos and creating notes."
            ),
            i18n._("Manage subscriptions and process billing."),
            i18n._(
              "Provide analytics and insights to improve service functionality."
            ),
            i18n._("Ensure compliance with subscription limits and features."),
            i18n._(
              "Process data for export/import functionality (Pro subscription: export only, Premium subscription: export and import)."
            ),
          ]
        )}
        {line(
          i18n._("Access to Permissions"),
          i18n._(
            "Permissions are requested only for functions directly related to the app's operation. The {NAME_APP} app requires access to the following device features:",
            { NAME_APP }
          ),
          [
            i18n._("Contacts: to add clients to the app."),
            i18n._("Calendar: to sync events."),
            i18n._("Camera and photo library: to upload images."),
            i18n._("Push notifications: to send reminders."),
            i18n._("Microphone: for speech-to-text functionality."),
            i18n._("SMS access: for sending appointment reminders."),
          ]
        )}
      </div>
      <div>
        <h2 className={styles.title}>{i18n._("Data Security")}</h2>
        {line(
          i18n._("Data Security"),
          i18n._(
            "Your data is protected using industry-standard security measures. We implement the following security practices:"
          ),
          [
            i18n._("End-to-end encryption for data transmission."),
            i18n._("Limited access to servers where information is stored."),
            i18n._("Regular security updates and monitoring."),
            i18n._("Secure API authentication for third-party integrations."),
            i18n._("Compliance with industry security standards."),
          ]
        )}
        {line(
          i18n._("Sharing Information with Third Parties"),
          i18n._(
            "We may share your data with third parties in the following cases:"
          ),
          [
            i18n._(
              "SMS service providers: for sending appointment reminders to clients."
            ),
            i18n._(
              "Payment processors: Apple App Store and Google Play for subscription billing."
            ),
            i18n._(
              "Analytics services: for service improvement (anonymized data only)."
            ),
            i18n._(
              "Legal requirements: when required by law or to protect our rights."
            ),
            i18n._(
              "Cloud storage providers: for secure data backup and synchronization."
            ),
          ]
        )}
        {line(
          i18n._("International Data Transfers"),
          i18n._(
            "Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws."
          )
        )}
        {line(
          i18n._("Data Retention"),
          i18n._(
            "We retain your data only as long as necessary to provide our services. Data is automatically deleted when you delete your account or revoke permissions. Some data may be retained for legal or security purposes as required by law. We comply with applicable data protection laws including GDPR where applicable."
          )
        )}
        {line(
          i18n._("Service Limitations and Disclaimers"),
          i18n._(
            "While we strive to provide reliable service, we cannot guarantee uninterrupted access or complete data security. We are not responsible for:"
          ),
          [
            i18n._(
              "Temporary service interruptions due to maintenance or technical issues."
            ),
            i18n._("Data loss caused by user actions or device malfunctions."),
            i18n._(
              "Third-party service failures (SMS providers, payment processors, etc.)."
            ),
            i18n._(
              "Compliance issues arising from user misuse of the service."
            ),
            i18n._(
              "Financial losses resulting from service interruptions or data issues."
            ),
          ]
        )}
        {line(
          i18n._("User Rights"),
          i18n._(
            "To exercise your rights, contact us at {CONTACT_EMAIL}. You have the following rights:",
            {
              CONTACT_EMAIL,
            }
          ),
          [
            i18n._(
              "Access your data: You can review the data we store about you."
            ),
            i18n._(
              "Delete your data: You can request the deletion of your information."
            ),
            i18n._(
              "Revoke permissions: You can modify app permissions via your device settings."
            ),
            i18n._(
              "Export your data: You can request a copy of your data in a portable format or use the built-in CSV export feature (available with Pro and Premium subscriptions)."
            ),
            i18n._(
              "Rectify your data: You can request correction of inaccurate personal data."
            ),
            i18n._(
              "Restrict processing: You can request limitation of data processing under certain circumstances."
            ),
          ]
        )}
        {line(
          i18n._("Changes to the Privacy Policy"),
          i18n._(
            "We may update this Privacy Policy periodically. All updates will be published on this page with the updated date.\nWe recommend checking this section regularly to stay informed of any changes. For significant updates, we will notify you via the app or email."
          )
        )}
        {line(
          i18n._("Contact Information"),
          i18n._(
            "If you have questions about this Privacy Policy, contact us at {CONTACT_EMAIL}.",
            { CONTACT_EMAIL }
          )
        )}
      </div>
    </div>
  );
};
