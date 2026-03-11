import React, { FunctionComponent } from "react";
import { Box, Typography, Container, Link } from "@mui/material";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// helpers
import { buildPathWithLanguage } from "@/localization/localization.helpers";

// constants
import { NAME_APP, CONTACT_EMAIL } from "@/constants";
import { PATHS } from "@/providers/paths.constants";

// styles
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  const { i18n, language } = useLocalesProvider();

  return (
    <Box className={styles.footer}>
      <Container maxWidth="lg">
        <Box className={styles.footerContent}>
          <Box className={styles.footerSection}>
            <Typography variant="h6" className={styles.footerTitle}>
              {NAME_APP}
            </Typography>
            <Typography variant="body2" className={styles.footerText}>
              {i18n._(
                "AI-powered educational market analysis and learning insights"
              )}
            </Typography>
          </Box>

          <Box className={styles.footerSection}>
            <Typography variant="h6" className={styles.footerTitle}>
              {i18n._("Navigation")}
            </Typography>
            <Box className={styles.footerLinks}>
              <Link
                href={buildPathWithLanguage(PATHS.main, language)}
                className={styles.footerLink}
              >
                {i18n._("Home")}
              </Link>
              <Link
                href={buildPathWithLanguage(PATHS.about, language)}
                className={styles.footerLink}
              >
                {i18n._("About")}
              </Link>
              <Link
                href={buildPathWithLanguage(PATHS.privacyPolicy, language)}
                className={styles.footerLink}
              >
                {i18n._("Privacy Policy")}
              </Link>
              <Link
                href={buildPathWithLanguage(PATHS.termOfUse, language)}
                className={styles.footerLink}
              >
                {i18n._("Terms of Use")}
              </Link>
              <Link
                href={buildPathWithLanguage(PATHS.disclaimer, language)}
                className={styles.footerLink}
              >
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
