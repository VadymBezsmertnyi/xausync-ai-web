import React, { FunctionComponent } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
} from "@mui/material";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// constants
import { NAME_APP, CONTACT_EMAIL } from "@/constants";

// styles
import styles from "./About.module.css";

const About: FunctionComponent = () => {
  const { i18n } = useLocalesProvider();

  return (
    <Container maxWidth="lg" className={styles.container}>
      <Box className={styles.header}>
        <Typography variant="h2" className={styles.mainTitle}>
          {i18n._("About {NAME_APP}", { NAME_APP })}
        </Typography>
        <Typography variant="h5" className={styles.subtitle}>
          {i18n._("Your professional beauty companion")}
        </Typography>
      </Box>

      <Card className={styles.introCard}>
        <CardContent>
          <Typography variant="h6" className={styles.introText}>
            {i18n._(
              `Welcome to {NAME_APP} – your comprehensive mobile solution for beauty professionals! Our app is designed to streamline your business operations, manage client relationships, and boost your productivity.`,
              { NAME_APP }
            )}
          </Typography>
        </CardContent>
      </Card>

      <Box className={styles.featuresSection}>
        <Typography variant="h4" className={styles.sectionTitle}>
          {i18n._("Key Features")}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card className={styles.featureCard}>
              <CardContent>
                <Typography variant="h6" className={styles.featureTitle}>
                  {i18n._("Client Management")}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.featureDescription}
                >
                  {i18n._(
                    "Create detailed client profiles, track service history, and maintain comprehensive notes for each appointment."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={styles.featureCard}>
              <CardContent>
                <Typography variant="h6" className={styles.featureTitle}>
                  {i18n._("Smart Calendar")}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.featureDescription}
                >
                  {i18n._(
                    "Seamless integration with your device calendar. Automatic sync ensures you never miss an appointment."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={styles.featureCard}>
              <CardContent>
                <Typography variant="h6" className={styles.featureTitle}>
                  {i18n._("SMS Notifications")}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.featureDescription}
                >
                  {i18n._(
                    "Send automated SMS reminders to your clients about upcoming appointments and important updates."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={styles.featureCard}>
              <CardContent>
                <Typography variant="h6" className={styles.featureTitle}>
                  {i18n._("Speech-to-Text")}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.featureDescription}
                >
                  {i18n._(
                    "Convert your voice notes into text for quick and easy appointment documentation and client notes."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={styles.featureCard}>
              <CardContent>
                <Typography variant="h6" className={styles.featureTitle}>
                  {i18n._("Photo Gallery")}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.featureDescription}
                >
                  {i18n._(
                    "Store and organize photos from each appointment to track client progress and showcase your work."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={styles.featureCard}>
              <CardContent>
                <Typography variant="h6" className={styles.featureTitle}>
                  {i18n._("Multi-Platform Sync")}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.featureDescription}
                >
                  {i18n._(
                    "Access your data seamlessly across mobile app and web platform with real-time synchronization."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box className={styles.subscriptionSection}>
        <Typography variant="h4" className={styles.sectionTitle}>
          {i18n._("Subscription Plans")}
        </Typography>

        <Grid container spacing={3}>
          {/* Free Plan */}
          <Grid item xs={12} md={4}>
            <Card className={styles.subscriptionCard}>
              <CardContent className={styles.subscriptionCardContent}>
                <Typography variant="h5" className={styles.subscriptionTitle}>
                  {i18n._("Free")}
                </Typography>
                <Typography variant="h6" className={styles.subscriptionPrice}>
                  {i18n._("$0/month")}
                </Typography>
                <Box className={styles.subscriptionFeatures}>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("Up to 20 clients")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("3 appointments per client")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("1 photo per appointment")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("1 SMS per month")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("3 minutes speech-to-text per month")}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Pro Plan */}
          <Grid item xs={12} md={4}>
            <Card className={`${styles.subscriptionCard} ${styles.proCard}`}>
              <CardContent className={styles.subscriptionCardContent}>
                <Typography variant="h5" className={styles.subscriptionTitle}>
                  {i18n._("Pro")}
                </Typography>
                <Typography variant="h6" className={styles.subscriptionPrice}>
                  {i18n._("$4.99/month")}
                </Typography>
                <Box className={styles.subscriptionFeatures}>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("Up to 100 clients")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("10 appointments per client")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("3 photos per appointment")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("20 SMS per month")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("60 minutes speech-to-text per month")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("Export clients (CSV)")}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Premium Plan */}
          <Grid item xs={12} md={4}>
            <Card
              className={`${styles.subscriptionCard} ${styles.premiumCard}`}
            >
              <CardContent className={styles.subscriptionCardContent}>
                <Typography variant="h5" className={styles.subscriptionTitle}>
                  {i18n._("Premium")}
                </Typography>
                <Typography variant="h6" className={styles.subscriptionPrice}>
                  {i18n._("$9.99/month")}
                </Typography>
                <Box className={styles.subscriptionFeatures}>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("Unlimited clients")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("Unlimited appointments per client")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("20 photos per appointment")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("50 SMS per month")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("300 minutes speech-to-text per month")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("Export/import clients (CSV)")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("Google Calendar integration")}
                  </Typography>
                  <Typography variant="body2" className={styles.featureItem}>
                    • {i18n._("Priority support")}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Card className={styles.subscriptionInfoCard}>
          <CardContent>
            <Typography variant="body1" className={styles.subscriptionInfoText}>
              {i18n._(
                "Start with our free plan to explore {NAME_APP} features. Upgrade anytime to unlock more capacity and advanced functionality.",
                { NAME_APP }
              )}
            </Typography>
            <Typography variant="body2" className={styles.pricingNote}>
              {i18n._(
                "* Prices may vary by region and are subject to local taxes."
              )}
            </Typography>
            <Typography variant="body2" className={styles.disclaimerNote}>
              {i18n._(
                "** Subscription features, limits, and pricing are subject to change. We reserve the right to modify plans and functionality to improve our service."
              )}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box className={styles.contactSection}>
        <Typography variant="h4" className={styles.sectionTitle}>
          {i18n._("Get in Touch")}
        </Typography>
        <Card className={styles.contactCard}>
          <CardContent>
            <Typography variant="body1" className={styles.contactText}>
              {i18n._(
                "We're constantly improving {NAME_APP} based on your feedback. Have suggestions or questions? We'd love to hear from you!",
                { NAME_APP }
              )}
            </Typography>
            <Typography variant="body1" className={styles.emailText}>
              {i18n._("Contact us: {CONTACT_EMAIL}", { CONTACT_EMAIL })}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box className={styles.footer}>
        <Typography variant="h6" className={styles.thankYouText}>
          {i18n._("Thank you for choosing {NAME_APP}!", { NAME_APP })}
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
