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
          {i18n._("AI-Powered Trading Analysis Platform")}
        </Typography>
      </Box>

      <Card className={styles.introCard}>
        <CardContent>
          <Typography variant="h6" className={styles.introText}>
            {i18n._(
              `Welcome to {NAME_APP} – your advanced AI-powered platform for XAU/USD trading analysis! Our application combines cutting-edge artificial intelligence with comprehensive market data to provide intelligent trading insights and real-time analysis.`,
              { NAME_APP }
            )}
          </Typography>
        </CardContent>
      </Card>

      <Box className={styles.featuresSection}>
        <Typography variant="h4" className={styles.sectionTitle}>
          {i18n._("Core Features")}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card className={styles.featureCard}>
              <CardContent>
                <Typography variant="h6" className={styles.featureTitle}>
                  {i18n._("AI-Powered Analysis")}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.featureDescription}
                >
                  {i18n._(
                    "Advanced machine learning algorithms analyze XAU/USD market patterns, identify trading opportunities, and generate real-time signals with high accuracy."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={styles.featureCard}>
              <CardContent>
                <Typography variant="h6" className={styles.featureTitle}>
                  {i18n._("Real-Time Market Data")}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.featureDescription}
                >
                  {i18n._(
                    "Access live XAU/USD market data with TradingView-style interactive charts, comprehensive technical indicators, and instant price updates."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={styles.featureCard}>
              <CardContent>
                <Typography variant="h6" className={styles.featureTitle}>
                  {i18n._("Technical Indicators")}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.featureDescription}
                >
                  {i18n._(
                    "Comprehensive suite of technical indicators including RSI, MACD, Bollinger Bands, and custom AI-driven indicators for thorough market analysis."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={styles.featureCard}>
              <CardContent>
                <Typography variant="h6" className={styles.featureTitle}>
                  {i18n._("Pattern Recognition")}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.featureDescription}
                >
                  {i18n._(
                    "AI-driven pattern recognition identifies chart patterns, trend reversals, and profitable trading opportunities automatically."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={styles.featureCard}>
              <CardContent>
                <Typography variant="h6" className={styles.featureTitle}>
                  {i18n._("Smart Alerts")}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.featureDescription}
                >
                  {i18n._(
                    "Receive instant notifications for trading opportunities, market movements, and important price levels directly on your device."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={styles.featureCard}>
              <CardContent>
                <Typography variant="h6" className={styles.featureTitle}>
                  {i18n._("Market Analytics")}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.featureDescription}
                >
                  {i18n._(
                    "Deep market insights with trend analysis, volatility metrics, and comprehensive market statistics to inform your trading decisions."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box className={styles.technologySection}>
        <Typography variant="h4" className={styles.sectionTitle}>
          {i18n._("Technology & Innovation")}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card className={styles.techCard}>
              <CardContent>
                <Typography variant="h6" className={styles.techTitle}>
                  {i18n._("Machine Learning")}
                </Typography>
                <Typography variant="body2" className={styles.techDescription}>
                  {i18n._(
                    "State-of-the-art ML models trained on historical XAU/USD data to identify patterns and predict market movements."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className={styles.techCard}>
              <CardContent>
                <Typography variant="h6" className={styles.techTitle}>
                  {i18n._("Real-Time Processing")}
                </Typography>
                <Typography variant="body2" className={styles.techDescription}>
                  {i18n._(
                    "High-performance data processing ensures instant analysis and signal generation with minimal latency."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className={styles.techCard}>
              <CardContent>
                <Typography variant="h6" className={styles.techTitle}>
                  {i18n._("Educational Focus")}
                </Typography>
                <Typography variant="body2" className={styles.techDescription}>
                  {i18n._(
                    "Designed to help traders understand market dynamics and improve their trading strategies through AI insights."
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box className={styles.purposeSection}>
        <Typography variant="h4" className={styles.sectionTitle}>
          {i18n._("Our Purpose")}
        </Typography>
        <Card className={styles.purposeCard}>
          <CardContent>
            <Typography variant="body1" className={styles.purposeText}>
              {i18n._(
                `{NAME_APP} is designed to empower traders with intelligent tools and insights. While our AI provides advanced analysis, we emphasize that trading involves risks and decisions should be made carefully. Our platform serves as an educational and analytical tool to supplement your trading knowledge.`,
                { NAME_APP }
              )}
            </Typography>
            <Typography variant="body2" className={styles.purposeNote}>
              {i18n._(
                "Remember: All trading involves risk. Never trade more than you can afford to lose, and consider seeking advice from qualified financial professionals."
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
                "We're continuously improving {NAME_APP} based on user feedback and market developments. Have questions, suggestions, or need support? We'd love to hear from you!",
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
          {i18n._(
            "Thank you for choosing {NAME_APP} for your trading analysis!",
            { NAME_APP }
          )}
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
