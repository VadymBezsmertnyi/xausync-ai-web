import React from "react";
import Head from "next/head";
import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Grid,
  Chip,
  Avatar,
  Stack,
} from "@mui/material";
import {
  Apple,
  Android,
  TrendingUp,
  ShowChart,
  Notifications,
  BarChart,
  Analytics,
  AutoGraph,
  Security,
} from "@mui/icons-material";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";

// helpers
import { buildPathWithLanguage } from "@/localization/localization.helpers";

// constants
import { NAME_APP } from "@/constants";

// styles
import styles from "./Main.module.css";
import { PATHS } from "@/providers/paths.constants";

export default function Main() {
  const { i18n, language } = useLocalesProvider();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const appStoreUrl = "https://apps.apple.com/app/xausync-ai/id6759280799";
  const googlePlayUrl =
    "https://play.google.com/store/apps/details?id=com.xausync.ai.app&hl=uk";

  const features = [
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: "var(--gold)" }} />,
      title: i18n._("AI-Assisted Analysis"),
      description: i18n._(
        "Advanced artificial intelligence analyzes XAU/USD market patterns to provide educational insights and practical examples for understanding market behavior."
      ),
    },
    {
      icon: <ShowChart sx={{ fontSize: 40, color: "var(--gold)" }} />,
      title: i18n._("Interactive Market Charts"),
      description: i18n._(
        "Educational charts with real market data for studying price action, trends, and technical analysis concepts."
      ),
    },
    {
      icon: <Notifications sx={{ fontSize: 40, color: "var(--gold)" }} />,
      title: i18n._("Educational Alerts"),
      description: i18n._(
        "AI-assisted notifications for market events and practical examples to study real-time conditions and technical formations."
      ),
    },
    {
      icon: <BarChart sx={{ fontSize: 40, color: "var(--gold)" }} />,
      title: i18n._("Technical Analysis Tools"),
      description: i18n._(
        "Comprehensive set of technical indicators for learning market analysis concepts and studying price patterns."
      ),
    },
    {
      icon: <Analytics sx={{ fontSize: 40, color: "var(--gold)" }} />,
      title: i18n._("Market Analytics"),
      description: i18n._(
        "Educational market insights and trend analysis for understanding market dynamics and technical concepts."
      ),
    },
    {
      icon: <AutoGraph sx={{ fontSize: 40, color: "var(--gold)" }} />,
      title: i18n._("Pattern Recognition Training"),
      description: i18n._(
        "AI-driven pattern identification for learning to recognize market patterns and studying technical analysis scenarios."
      ),
    },
  ];

  const stats = [
    { number: "AI", label: i18n._("Learning Insights") },
    { number: "XAU", label: i18n._("Market Focus") },
    { number: "LIVE", label: i18n._("Real Market Context") },
    { number: "EDU", label: i18n._("Educational Use") },
  ];

  return (
    <>
      <Head>
        <title>
          {i18n._("XauSync AI — AI-Powered Market Analysis for Learning")}
        </title>
        <meta
          name="description"
          content={i18n._(
            "XauSync AI provides AI-powered educational tools for learning market analysis and studying market behavior. Explore real market scenarios, technical analysis concepts, and AI-assisted educational insights."
          )}
        />
        <meta
          name="keywords"
          content={i18n._(
            "XauSync AI, gold market learning, market behavior study, technical analysis education, AI educational tools, market scenario exploration, educational market analysis"
          )}
        />
        <meta
          property="og:title"
          content={i18n._(
            "XauSync AI — AI-Powered Market Analysis for Learning"
          )}
        />
        <meta
          property="og:description"
          content={i18n._(
            "XauSync AI provides AI-powered educational tools for learning market analysis and studying market behavior with real market scenarios."
          )}
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={i18n._(
            "XauSync AI - AI-Powered Market Analysis for Learning"
          )}
        />
        <meta property="og:url" content="https://xausync.ai" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={NAME_APP} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={i18n._(
            "XauSync AI — AI-Powered Market Analysis for Learning"
          )}
        />
        <meta
          name="twitter:description"
          content={i18n._(
            "XauSync AI provides AI-powered educational tools for learning market analysis and studying market behavior."
          )}
        />
        <meta name="twitter:image" content="/twitter-image.png" />
        <meta
          name="twitter:image:alt"
          content={i18n._(
            "XauSync AI - AI-Powered Market Analysis for Learning"
          )}
        />
        <meta name="twitter:site" content="@xausync_ai" />
        <link rel="canonical" href="https://xausync.ai" />
        <meta
          name="author"
          content="Vadym Bezsmertnyi, Sole Proprietor (Ukraine)"
        />
      </Head>

      <Box sx={{ backgroundColor: "var(--background)", minHeight: "100vh" }}>
        {/* Hero Section */}
        <Box className={styles.heroSection}>
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ color: "var(--white)" }}>
                  <Typography
                    variant={isMobile ? "h3" : "h2"}
                    component="h1"
                    className={styles.heroTitle}
                  >
                    {i18n._(
                      "{NAME_APP}: AI-Powered Market Analysis for Learning",
                      {
                        NAME_APP,
                      }
                    )}
                  </Typography>

                  <Typography
                    variant={isMobile ? "h6" : "h5"}
                    className={styles.heroSubtitle}
                  >
                    {i18n._("Educational Market Analysis App")}
                  </Typography>

                  <Typography variant="body1" className={styles.heroText}>
                    {i18n._(
                      "Study market analysis and explore market behavior with AI-powered educational tools. Discover real market scenarios, technical analysis concepts, and practical insights for educational purposes only."
                    )}
                  </Typography>
                  <Typography variant="body2" className={styles.heroText}>
                    {i18n._(
                      "Premium learning access in the mobile app uses Energy and Learning Days: users can purchase Energy, activate Learning Days, and unlock additional educational scenarios, AI explanations, analytics history, and optional alerts."
                    )}
                  </Typography>

                  <Stack
                    direction={isMobile ? "column" : "row"}
                    spacing={2}
                    sx={{ mb: 4 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      href={appStoreUrl}
                      className={styles.storeButton}
                      startIcon={<Apple />}
                    >
                      {i18n._("Download on the App Store")}
                    </Button>

                    <Button
                      variant="contained"
                      size="large"
                      href={googlePlayUrl}
                      className={styles.storeButton}
                      startIcon={<Android />}
                    >
                      {i18n._("Get it on Google Play")}
                    </Button>
                  </Stack>

                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Chip
                      icon={<Security sx={{ color: "var(--success)" }} />}
                      label={i18n._("Secure & Private")}
                      sx={{
                        backgroundColor: "var(--success-muted-25)",
                        color: "var(--success)",
                      }}
                    />
                  </Stack>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ textAlign: "center" }}>
                  <Avatar
                    src="/icon.png"
                    sx={{
                      width: 200,
                      height: 200,
                      mx: "auto",
                      mb: 2,
                      boxShadow: "0 20px 40px rgba(244, 197, 66, 0.3)",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Stats Section */}
        <Box sx={{ py: 8 }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Card className={styles.statsCard}>
                    <CardContent>
                      <Typography variant="h4" className={styles.statsNumber}>
                        {stat.number}
                      </Typography>
                      <Typography variant="body2" className={styles.statsLabel}>
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Features Section */}
        <Box sx={{ py: 8 }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: "var(--gold)",
                  fontFamily: '"Tenor Sans", serif',
                  mb: 2,
                }}
              >
                {i18n._("AI-Powered Learning Tools")}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "var(--text-gray)", maxWidth: 600, mx: "auto" }}
              >
                {i18n._(
                  "Educational insights and analysis for learning market behavior and studying technical analysis concepts"
                )}
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card className={styles.featureCard}>
                    <CardContent>
                      <Box sx={{ mb: 2 }} className="feature-icon">
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" className={styles.featureTitle}>
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        className={styles.featureDescription}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Educational Purpose Section */}
        <Box sx={{ py: 8, backgroundColor: "var(--dark)" }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: "var(--gold)",
                      fontFamily: '"Tenor Sans", serif',
                      mb: 3,
                    }}
                  >
                    {i18n._("Educational Purpose")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "var(--text-gray)", lineHeight: 1.7, mb: 3 }}
                  >
                    {i18n._(
                      "{NAME_APP} provides educational insights and analytical tools to help users study market behavior and analysis concepts. Our platform uses real market data as educational context for exploring technical analysis and market scenarios.",
                      { NAME_APP }
                    )}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "var(--text-gray)",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                      backgroundColor: "var(--tag-gold-muted)",
                      padding: "16px 20px",
                      borderRadius: "8px",
                      borderLeft: "4px solid var(--gold)",
                    }}
                  >
                    {i18n._(
                      "Important: {NAME_APP} provides informational and educational content only. It does not provide financial, investment, or trading advice. Real market examples are used for study purposes only. All analysis may be incomplete, delayed, or inaccurate. Use at your own risk.",
                      { NAME_APP }
                    )}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    p: 3,
                    backgroundColor: "var(--background)",
                    boxShadow: "0 4px 20px rgba(244, 197, 66, 0.1)",
                    borderRadius: 3,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "var(--gold)",
                        fontFamily: '"Tenor Sans", serif',
                        mb: 2,
                      }}
                    >
                      {i18n._("Learning Responsibility")}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "var(--text-gray)", lineHeight: 1.6 }}
                    >
                      {i18n._(
                        "While our AI provides educational insights, users must rely on their own judgment and independent research. Use {NAME_APP} as a learning tool to study market scenarios and technical analysis concepts.",
                        { NAME_APP }
                      )}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "var(--text-gray)", lineHeight: 1.6, mt: 2 }}
                    >
                      {i18n._(
                        "A one-day trial may be available for new users in the app. Purchases and billing are handled by the App Store or Google Play, including cancellation and refunds according to their policies."
                      )}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box className={styles.ctaSection}>
          <Container maxWidth="md">
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h3" className={styles.ctaTitle}>
                {i18n._("Start Your Educational Journey")}
              </Typography>
              <Typography variant="h6" className={styles.ctaText}>
                {i18n._(
                  "Discover how {NAME_APP} provides AI-powered market analysis tools for educational study and technical learning",
                  { NAME_APP }
                )}
              </Typography>
              <Stack
                direction={isMobile ? "column" : "row"}
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  href={buildPathWithLanguage(PATHS.about, language)}
                  className={styles.ctaButton}
                >
                  {i18n._("Explore {NAME_APP}", { NAME_APP })}
                </Button>

                <Button
                  variant="contained"
                  size="large"
                  href={buildPathWithLanguage(PATHS.disclaimer, language)}
                  className={styles.ctaButton}
                >
                  {i18n._("View Disclaimer")}
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
