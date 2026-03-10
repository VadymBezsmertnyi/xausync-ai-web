import React, { FunctionComponent } from "react";
import Head from "next/head";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// constants
import { NAME_APP, CONTACT_EMAIL } from "@/constants";

// styles
import styles from "./HowDeleteUser.module.css";

const HowDeleteUser: FunctionComponent = () => {
  const { i18n } = useLocalesProvider();

  return (
    <>
      <Head>
        <title>{i18n._("Delete Your {NAME_APP} Account", { NAME_APP })}</title>
        <meta
          name="description"
          content={i18n._(
            "Learn how to delete your XauSync AI account. Find step-by-step instructions for account deletion in app settings and understand what happens after deletion."
          )}
        />
        <meta
          name="keywords"
          content={i18n._(
            "delete account, XauSync AI, account deletion, remove account, data deletion, privacy settings"
          )}
        />
        <meta
          property="og:title"
          content={i18n._("Delete Your {NAME_APP} Account", { NAME_APP })}
        />
        <meta
          property="og:description"
          content={i18n._(
            "Learn how to delete your XauSync AI account and understand the data deletion process."
          )}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={NAME_APP} />
        <link rel="canonical" href="https://xausync.ai/how-delete-user" />
        <meta
          name="author"
          content="Vadym Bezsmertnyi, Sole Proprietor (Ukraine)"
        />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.mainTitle}>
          {i18n._("Delete Your {NAME_APP} Account", { NAME_APP })}
        </h1>

        <div className={styles.introSection}>
          <h2 className={styles.title}>
            {i18n._("How to Delete Your Account")}
          </h2>
          <p className={styles.text}>
            {i18n._(
              "You can delete your {NAME_APP} account directly from the application settings. Account deletion is permanent and will remove access to your account and associated data according to our Privacy Policy.",
              { NAME_APP }
            )}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.title}>
            {i18n._("Where to Find the Delete Option")}
          </h2>
          <p className={styles.text}>
            {i18n._(
              "To delete your account, open the {NAME_APP} mobile application and follow these steps:",
              { NAME_APP }
            )}
          </p>
          <ol className={styles.orderedList}>
            <li className={styles.itemList}>
              {i18n._("Go to your profile in the app")}
            </li>
            <li className={styles.itemList}>
              {i18n._("Navigate to Settings")}
            </li>
            <li className={styles.itemList}>
              {i18n._("Scroll to the bottom of the settings page")}
            </li>
            <li className={styles.itemList}>
              {i18n._('Tap the "Delete Account" button')}
            </li>
            <li className={styles.itemList}>
              {i18n._(
                "Confirm your decision to permanently delete your account"
              )}
            </li>
          </ol>
        </div>

        <div className={styles.section}>
          <h2 className={styles.title}>
            {i18n._("What Happens After Deletion")}
          </h2>
          <p className={styles.text}>
            {i18n._(
              "Once you delete your account, the following actions will occur:"
            )}
          </p>

          <ul className={styles.list}>
            <li className={styles.itemList}>
              {i18n._("Immediate loss of access to your {NAME_APP} account", {
                NAME_APP,
              })}
            </li>
            <li className={styles.itemList}>
              {i18n._(
                "Removal of your authentication data and login credentials"
              )}
            </li>
            <li className={styles.itemList}>
              {i18n._("Deletion of your personal information and profile data")}
            </li>
            <li className={styles.itemList}>
              {i18n._(
                "Removal of your learning progress and educational activity"
              )}
            </li>
            <li className={styles.itemList}>
              {i18n._("Deletion of your settings and preferences")}
            </li>
            <li className={styles.itemList}>
              {i18n._(
                "Permanent removal of your in-app energy balance - all energy credits will be deleted and cannot be restored"
              )}
            </li>
            <li className={styles.itemList}>
              {i18n._(
                "Permanent removal of any remaining Energy balance - all internal learning currency (Energy) linked to your account will be deleted and cannot be restored"
              )}
            </li>
            <li className={styles.itemList}>
              {i18n._(
                "Removal of Energy purchase information and transaction history within the app"
              )}
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.title}>{i18n._("Important Information")}</h2>
          <div className={styles.warningBox}>
            <p className={styles.warningText}>
              {i18n._(
                "Account deletion is IRREVERSIBLE. Once deleted, you cannot recover your data, restore your account, or recover your in-app energy balance or any account-related benefits. All energy credits will be permanently lost. If you want to use {NAME_APP} again in the future, you will need to create a new account.",
                { NAME_APP }
              )}
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.title}>{i18n._("Need Help?")}</h2>
          <p className={styles.text}>
            {i18n._(
              "If you have any questions about account deletion or need assistance with the process, please contact our support team:"
            )}
          </p>
          <p className={styles.contactText}>
            {i18n._("Contact us: {CONTACT_EMAIL}", { CONTACT_EMAIL })}
          </p>
        </div>

        <div className={styles.footerNote}>
          <p className={styles.footerText}>
            {i18n._(
              "This account deletion process is managed by Vadym Bezsmertnyi, Sole Proprietor (Ukraine), the developer of {NAME_APP}.",
              { NAME_APP }
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default HowDeleteUser;
