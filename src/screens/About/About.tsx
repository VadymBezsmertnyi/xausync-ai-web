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
          {i18n._("About XauSync AI — AI-Powered Market Analysis Education")}
        </title>
        <meta
          name="description"
          content={i18n._(
            "Discover XauSync AI's intelligent market analysis platform. Learn through AI-driven insights, real-world examples, and comprehensive technical analysis tools designed for educational purposes."
          )}
        />
        <meta
          name="keywords"
          content={i18n._(
            "About XauSync AI, AI market analysis education, learn market behavior, educational market analysis, XAU/USD analysis, AI learning technology, responsible market education"
          )}
        />
        <meta
          property="og:title"
          content={i18n._(
            "About XauSync AI — AI-Powered Market Analysis Education"
          )}
        />
        <meta
          property="og:description"
          content={i18n._(
            "Discover XauSync AI's intelligent market analysis platform and our commitment to providing AI-driven insights for educational use."
          )}
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={i18n._(
            "About XauSync AI - AI-Powered Market Analysis Education Platform"
          )}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={NAME_APP} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={i18n._(
            "About XauSync AI — AI-Powered Market Analysis Education"
          )}
        />
        <meta
          name="twitter:description"
          content={i18n._(
            "Discover XauSync AI's intelligent market analysis platform and our commitment to providing AI-driven insights for educational use."
          )}
        />
        <meta name="twitter:image" content="/twitter-image.png" />
        <meta
          name="twitter:image:alt"
          content={i18n._(
            "About XauSync AI - AI-Powered Market Analysis Education Platform"
          )}
        />
        <link rel="canonical" href="https://xausync.ai/about" />
        <meta
          name="author"
          content="Vadym Bezsmertnyi, Sole Proprietor (Ukraine)"
        />
      </Head>
      <Container maxWidth="lg" className={styles.container}>
        <Box className={styles.header}>
          <Typography variant="h2" component="h1" className={styles.mainTitle}>
            {i18n._("About {NAME_APP}", { NAME_APP })}
          </Typography>
          <Typography variant="h5" className={styles.subtitle}>
            {i18n._("AI-Powered Market Analysis for Learning")}
          </Typography>
        </Box>

        <Card className={styles.introCard}>
          <CardContent>
            <Typography variant="h6" className={styles.introText}>
              {i18n._(
                `{NAME_APP} is an AI-powered educational platform designed for studying XAU/USD market dynamics. Our application combines advanced artificial intelligence with comprehensive market data to provide analytical insights and real-world examples for understanding technical analysis and market behavior.`,
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
                      "Advanced machine learning algorithms analyze XAU/USD market patterns to provide AI-assisted insights and practical examples for understanding market dynamics and technical analysis."
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
                      "Access live XAU/USD market data with interactive charts for studying price action, trends, and technical indicators in real-world scenarios."
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
                      "Comprehensive suite of technical indicators including RSI, MACD, Bollinger Bands, and custom AI-driven indicators for studying market patterns and price dynamics."
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
                      "AI-driven pattern recognition identifies chart patterns and trend reversals for understanding market movements and studying technical formations."
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card className={styles.featureCard}>
                <CardContent>
                  <Typography variant="h6" className={styles.featureTitle}>
                    {i18n._("Educational Alerts")}
                  </Typography>
                  <Typography
                    variant="body1"
                    className={styles.featureDescription}
                  >
                    {i18n._(
                      "AI-assisted notifications for market events and practical examples to study real-time conditions and technical formations."
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
                      "Market insights with trend analysis, volatility metrics, and comprehensive statistics for understanding market dynamics and price movements."
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
                      "State-of-the-art ML models trained on historical XAU/USD data to identify patterns and provide analytical insights for study purposes."
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
                      "High-performance data processing ensures instant analysis and AI-assisted insights with minimal latency for studying market conditions."
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
                      "Analysis incorporates market context, economic factors, and technical indicators for comprehensive insights and practical examples."
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
                      "Advanced technical analysis tools including trend lines, support/resistance levels, and multiple time-frame analysis for studying market patterns."
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
                      "Analysis of market sentiment and volatility metrics to provide context for understanding market conditions and studying price behavior patterns."
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box className={styles.purposeSection}>
          <Typography variant="h4" className={styles.sectionTitle}>
            {i18n._("Purpose")}
          </Typography>
          <Card className={styles.purposeCard}>
            <CardContent>
              <Typography variant="body1" className={styles.purposeText}>
                {i18n._(
                  "{NAME_APP} provides analytical insights and educational tools to help users study market dynamics and technical concepts. Our platform uses real market data as context for exploring analysis techniques and practical examples.",
                  { NAME_APP }
                )}
              </Typography>
              <Typography variant="body2" className={styles.purposeNote}>
                {i18n._(
                  "Important: {NAME_APP} provides informational and educational content only. It does not provide financial, investment, or trading advice. Real market examples are for study purposes only. All analysis may be incomplete, delayed, or inaccurate. Use at your own risk and rely on your own judgment.",
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
                  "While our AI provides analytical insights, users must rely on their own judgment and independent research. Use {NAME_APP} as a study tool to explore market scenarios and technical concepts.",
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
              "Thank you for choosing {NAME_APP} for your market analysis studies!",
              { NAME_APP }
            )}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;
