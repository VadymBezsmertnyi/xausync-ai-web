import React, { FunctionComponent } from "react";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// constants
import { NAME_APP } from "@/constants";

// styles
import styles from "./HowDeleteUser.module.css";

const HowDeleteUser: FunctionComponent = () => {
  const { i18n } = useLocalesProvider();
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>{i18n._("Account Deletion")}</h1>

      <h2 className={styles.title}>{i18n._("How to delete your account?")}</h2>
      <p className={styles.text}>
        {i18n._(
          'To delete your account from {NAME_APP}, open the mobile application, go to your profile, then navigate to settings. At the bottom of the settings page, you will find the "Delete account" button. After clicking it, your account and all associated data will be permanently deleted.',
          { NAME_APP }
        )}
      </p>

      <h2 className={styles.title}>{i18n._("Automatic account deletion")}</h2>
      <p className={styles.text}>
        {i18n._(
          "Accounts that have been inactive for more than one year will be automatically deleted along with all associated data. This helps us maintain data security and comply with privacy regulations."
        )}
      </p>

      <h2 className={styles.title}>{i18n._("What data will be deleted?")}</h2>
      <p className={styles.text}>
        {i18n._(
          "When you delete your account, all your personal data and information associated with your account will be permanently removed:"
        )}
      </p>

      <ul className={styles.list}>
        <li className={styles.itemList}>
          {i18n._(
            "Authentication data (Google, Facebook, Apple login information)"
          )}
        </li>
        <li className={styles.itemList}>
          {i18n._("Personal information (name, email, phone number)")}
        </li>
        <li className={styles.itemList}>
          {i18n._("All client data and profiles")}
        </li>
        <li className={styles.itemList}>
          {i18n._("All appointments and scheduling information")}
        </li>
        <li className={styles.itemList}>{i18n._("All photos and images")}</li>
        <li className={styles.itemList}>
          {i18n._("SMS notifications history")}
        </li>
        <li className={styles.itemList}>
          {i18n._("Speech-to-text recordings and transcripts")}
        </li>
        <li className={styles.itemList}>
          {i18n._("All settings and preferences")}
        </li>
        <li className={styles.itemList}>
          {i18n._("Subscription information and payment history")}
        </li>
      </ul>

      <h2 className={styles.title}>{i18n._("Important notes")}</h2>
      <p className={styles.text}>
        {i18n._(
          "Account deletion is irreversible. Once deleted, you cannot recover your data or restore your account. If you want to use {NAME_APP} again in the future, you will need to create a new account.",
          { NAME_APP }
        )}
      </p>

      <p className={styles.text}>
        {i18n._(
          "If you have any questions about account deletion or need assistance, please contact us at our support email."
        )}
      </p>
    </div>
  );
};

export default HowDeleteUser;
