import React, { FunctionComponent } from "react";
import Head from "next/head";
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
    <>
      <Head>
        <title>
          {i18n._("About XauSync AI — AI Trading Analysis Platform")}
        </title>
        <meta
          name="description"
          content={i18n._(
            "Learn about XauSync AI's AI-powered trading analysis platform, our technology, and commitment to educational trading insights."
          )}
        />
        <meta
          property="og:title"
          content={i18n._("About XauSync AI — AI Trading Analysis Platform")}
        />
        <meta
          property="og:description"
          content={i18n._(
            "Learn about XauSync AI's AI-powered trading analysis platform, our technology, and commitment to educational trading insights."
          )}
        />
        <meta property="og:image" content="/icon.png" />
        <meta property="og:type" content="website" />
      </Head>
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
                `{NAME_APP} is an advanced AI-powered platform designed for XAU/USD trading analysis. Our application combines sophisticated artificial intelligence with comprehensive market data to provide intelligent trading insights and educational analysis for informed decision-making.`,
                { NAME_APP }
              )}
            </Typography>
          </CardContent>
        </Card>

        <Box className={styles.featuresSection}>
          <Typography variant="h4" className={styles.sectionTitle}>
            {i18n._("What {NAME_APP} Does", { NAME_APP })}
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
                      "Advanced machine learning algorithms analyze XAU/USD market patterns and identify potential trading opportunities. Our AI processes historical data and current market conditions to generate insights for educational purposes."
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
                      "Access live XAU/USD market data with interactive charts, comprehensive technical indicators, and instant price updates. Stay informed with real-time market information."
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
                      "Comprehensive suite of technical indicators including RSI, MACD, Bollinger Bands, and custom AI-driven indicators for thorough market analysis and trend identification."
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
                      "AI-driven pattern recognition identifies chart patterns, trend reversals, and potential market movements to help traders understand market dynamics."
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
                      "Receive notifications for significant market movements, important price levels, and analysis updates directly on your device to stay informed."
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
                      "Deep market insights with trend analysis, volatility metrics, and comprehensive market statistics to provide context for trading decisions."
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box className={styles.technologySection}>
          <Typography variant="h4" className={styles.sectionTitle}>
            {i18n._("AI-Powered Insights")}
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card className={styles.techCard}>
                <CardContent>
                  <Typography variant="h6" className={styles.techTitle}>
                    {i18n._("Machine Learning")}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={styles.techDescription}
                  >
                    {i18n._(
                      "State-of-the-art ML models trained on historical XAU/USD data to identify patterns and provide market analysis insights."
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
                  <Typography
                    variant="body2"
                    className={styles.techDescription}
                  >
                    {i18n._(
                      "High-performance data processing ensures instant analysis and market insights with minimal latency."
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card className={styles.techCard}>
                <CardContent>
                  <Typography variant="h6" className={styles.techTitle}>
                    {i18n._("Market Context")}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={styles.techDescription}
                  >
                    {i18n._(
                      "Analysis incorporates market context, economic factors, and technical indicators for comprehensive insights."
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box className={styles.analyticsSection}>
          <Typography variant="h4" className={styles.sectionTitle}>
            {i18n._("Market Analytics and Indicators")}
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card className={styles.techCard}>
                <CardContent>
                  <Typography variant="h6" className={styles.techTitle}>
                    {i18n._("Technical Analysis")}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={styles.techDescription}
                  >
                    {i18n._(
                      "Advanced technical analysis tools including trend lines, support/resistance levels, and multiple time-frame analysis."
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card className={styles.techCard}>
                <CardContent>
                  <Typography variant="h6" className={styles.techTitle}>
                    {i18n._("Market Sentiment")}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={styles.techDescription}
                  >
                    {i18n._(
                      "Analysis of market sentiment and volatility metrics to provide context for market conditions and potential movements."
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box className={styles.purposeSection}>
          <Typography variant="h4" className={styles.sectionTitle}>
            {i18n._("Educational Purpose")}
          </Typography>
          <Card className={styles.purposeCard}>
            <CardContent>
              <Typography variant="body1" className={styles.purposeText}>
                {i18n._(
                  "{NAME_APP} is designed to provide educational insights and analytical tools to help traders understand market dynamics. Our platform serves as an educational resource to supplement your trading knowledge and decision-making process.",
                  { NAME_APP }
                )}
              </Typography>
              <Typography variant="body2" className={styles.purposeNote}>
                {i18n._(
                  "Important: {NAME_APP} provides informational and educational content only. All trading decisions remain your sole responsibility. Trading involves substantial risk, and you should never trade more than you can afford to lose.",
                  { NAME_APP }
                )}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box className={styles.responsibleSection}>
          <Typography variant="h4" className={styles.sectionTitle}>
            {i18n._("Responsible Use")}
          </Typography>
          <Card className={styles.purposeCard}>
            <CardContent>
              <Typography variant="body1" className={styles.purposeText}>
                {i18n._(
                  "While our AI provides advanced analysis, we emphasize that trading involves risks and decisions should be made carefully. Use {NAME_APP} as one tool among many in your trading research and analysis process.",
                  { NAME_APP }
                )}
              </Typography>
              <Typography variant="body2" className={styles.purposeNote}>
                {i18n._(
                  "Always conduct your own research, consider seeking advice from qualified financial professionals, and never risk more than you can afford to lose."
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
    </>
  );
};

export default About;
