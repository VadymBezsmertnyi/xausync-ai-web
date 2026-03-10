import React, { FunctionComponent } from "react";
import { Box, Typography, Container, Link } from "@mui/material";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";
import { PATHS } from "@/providers/paths.constants";

// constants
import { NAME_APP, CONTACT_EMAIL } from "@/constants";

// styles
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  const { i18n } = useLocalesProvider();

  return (
    <Box className={styles.footer}>
      <Container maxWidth="lg">
        <Box className={styles.footerContent}>
          <Box className={styles.footerSection}>
            <Typography variant="h6" className={styles.footerTitle}>
              {NAME_APP}
            </Typography>
            <Typography variant="body2" className={styles.footerText}>
              {i18n._("AI-powered trading analysis and market insights")}
            </Typography>
          </Box>

          <Box className={styles.footerSection}>
            <Typography variant="h6" className={styles.footerTitle}>
              {i18n._("Navigation")}
            </Typography>
            <Box className={styles.footerLinks}>
              <Link href={PATHS.main} className={styles.footerLink}>
                {i18n._("Home")}
              </Link>
              <Link href={PATHS.about} className={styles.footerLink}>
                {i18n._("About")}
              </Link>
              <Link href={PATHS.privacyPolicy} className={styles.footerLink}>
                {i18n._("Privacy Policy")}
              </Link>
              <Link href={PATHS.termOfUse} className={styles.footerLink}>
                {i18n._("Terms of Use")}
              </Link>
              <Link href={PATHS.disclaimer} className={styles.footerLink}>
                {i18n._("Disclaimer")}
              </Link>
            </Box>
          </Box>

          <Box className={styles.footerSection}>
            <Typography variant="h6" className={styles.footerTitle}>
              {i18n._("Developer")}
            </Typography>
            <Typography variant="body2" className={styles.footerText}>
              {i18n._(
                "Developed by Vadym Bezsmertnyi, Sole Proprietor (Ukraine)"
              )}
            </Typography>
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className={styles.footerLink}
            >
              {CONTACT_EMAIL}
            </Link>
          </Box>
        </Box>

        <Box className={styles.footerBottom}>
          <Typography variant="body2" className={styles.copyright}>
            {i18n._("© {year} {NAME_APP}. All rights reserved.", {
              year: new Date().getFullYear(),
              NAME_APP,
            })}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
