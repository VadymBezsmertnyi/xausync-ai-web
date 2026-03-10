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
  Assessment,
  Timeline,
  ShowChart,
  Notifications,
  Security,
  Speed,
  BarChart,
  Analytics,
  AutoGraph,
  Star,
} from "@mui/icons-material";

import { useLocalesProvider } from "@/localization/localization.provider";
import { NAME_APP, CONTACT_EMAIL } from "@/constants";

export default function Main() {
  const { i18n } = useLocalesProvider();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const appStoreUrl = "https://apps.apple.com/us/app/beauty-sync/id6737201591";
  const googlePlayUrl =
    "https://play.google.com/store/apps/details?id=com.beautysync.app&hl=uk";

  const features = [
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: "var(--gold)" }} />,
      title: i18n._("AI-Powered Analysis"),
      description: i18n._(
        "Advanced artificial intelligence analyzes XAU/USD market patterns and provides real-time trading signals."
      ),
    },
    {
      icon: <ShowChart sx={{ fontSize: 40, color: "var(--gold)" }} />,
      title: i18n._("Real-Time Charts"),
      description: i18n._(
        "Interactive charts with TradingView-style interface for comprehensive market analysis."
      ),
    },
    {
      icon: <Notifications sx={{ fontSize: 40, color: "var(--gold)" }} />,
      title: i18n._("Smart Alerts"),
      description: i18n._(
        "Instant notifications for trading opportunities and market movements."
      ),
    },
    {
      icon: <BarChart sx={{ fontSize: 40, color: "var(--gold)" }} />,
      title: i18n._("Technical Indicators"),
      description: i18n._(
        "Comprehensive set of technical indicators including RSI, MACD, and Bollinger Bands."
      ),
    },
    {
      icon: <Analytics sx={{ fontSize: 40, color: "var(--gold)" }} />,
      title: i18n._("Market Analytics"),
      description: i18n._(
        "Deep market insights and trend analysis to inform your trading decisions."
      ),
    },
    {
      icon: <AutoGraph sx={{ fontSize: 40, color: "var(--gold)" }} />,
      title: i18n._("Pattern Recognition"),
      description: i18n._(
        "AI-driven pattern recognition identifies profitable trading opportunities."
      ),
    },
  ];

  const stats = [
    { number: "10K+", label: i18n._("Active Traders") },
    { number: "1M+", label: i18n._("Signals Generated") },
    { number: "99.9%", label: i18n._("Uptime") },
    { number: "4.9★", label: i18n._("User Rating") },
  ];

  return (
    <>
      <Head>
        <title>{i18n._("XauSync AI — AI Trading Insights")}</title>
        <meta
          name="description"
          content={i18n._(
            "XauSync AI provides AI-powered trading insights, market analysis, and educational trading tools for XAU/USD trading."
          )}
        />
        <meta
          property="og:title"
          content={i18n._("XauSync AI — AI Trading Insights")}
        />
        <meta
          property="og:description"
          content={i18n._(
            "XauSync AI provides AI-powered trading insights, market analysis, and educational trading tools for XAU/USD trading."
          )}
        />
        <meta property="og:image" content="/icon.png" />
        <meta property="og:url" content="https://xausync.ai" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={i18n._("XauSync AI — AI Trading Insights")}
        />
        <meta
          name="twitter:description"
          content={i18n._(
            "XauSync AI provides AI-powered trading insights, market analysis, and educational trading tools for XAU/USD trading."
          )}
        />
        <meta name="twitter:image" content="/icon.png" />
      </Head>

      <Box sx={{ backgroundColor: "var(--background)", minHeight: "100vh" }}>
        {/* Hero Section */}
        <Box
          sx={{
            background:
              "linear-gradient(135deg, var(--background) 0%, var(--background-gradient-end) 50%, var(--background) 100%)",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ color: "var(--white)" }}>
                  <Typography
                    variant={isMobile ? "h3" : "h2"}
                    component="h1"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      fontFamily: '"Tenor Sans", serif',
                      color: "var(--gold)",
                    }}
                  >
                    {i18n._("Welcome to {NAME_APP}", { NAME_APP })}
                  </Typography>

                  <Typography
                    variant={isMobile ? "h6" : "h5"}
                    sx={{
                      mb: 3,
                      fontWeight: 300,
                      opacity: 0.9,
                      fontFamily: '"Tenor Sans", serif',
                    }}
                  >
                    {i18n._("Your AI Trading Companion")}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      opacity: 0.9,
                      lineHeight: 1.6,
                      fontSize: "1.1rem",
                    }}
                  >
                    {i18n._(
                      "Enhance your XAU/USD trading with our AI-powered analysis. Get real-time signals, advanced charts, and intelligent market insights."
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
                      startIcon={<Apple />}
                      href={appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: "var(--gold)",
                        color: "var(--background)",
                        px: 4,
                        py: 2,
                        borderRadius: 3,
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "1.1rem",
                        "&:hover": {
                          backgroundColor: "var(--gold-opacity-40)",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {i18n._("Download on App Store")}
                    </Button>

                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Android />}
                      href={googlePlayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: "var(--gold)",
                        color: "var(--background)",
                        px: 4,
                        py: 2,
                        borderRadius: 3,
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "1.1rem",
                        "&:hover": {
                          backgroundColor: "var(--gold-opacity-40)",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {i18n._("Get it on Google Play")}
                    </Button>
                  </Stack>

                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Chip
                      icon={<Star sx={{ color: "var(--gold)" }} />}
                      label={i18n._("4.9★ Rating")}
                      sx={{
                        backgroundColor: "var(--tag-gold-muted)",
                        color: "var(--gold)",
                      }}
                    />
                    <Chip
                      icon={<Security sx={{ color: "var(--success)" }} />}
                      label={i18n._("Secure & Private")}
                      sx={{
                        backgroundColor: "var(--success-muted-25)",
                        color: "var(--success)",
                      }}
                    />
                    <Chip
                      icon={<Speed sx={{ color: "var(--primary)" }} />}
                      label={i18n._("Fast & Reliable")}
                      sx={{
                        backgroundColor: "rgba(0, 122, 255, 0.2)",
                        color: "var(--primary)",
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
        <Box sx={{ py: 8, backgroundColor: "var(--dark)" }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Card
                    sx={{
                      textAlign: "center",
                      p: 3,
                      backgroundColor: "var(--background)",
                      boxShadow: "0 4px 20px rgba(244, 197, 66, 0.1)",
                      borderRadius: 3,
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: "var(--gold)",
                          fontFamily: '"Tenor Sans", serif',
                          mb: 1,
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "var(--text-gray)", fontWeight: 500 }}
                      >
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
                {i18n._("Key Features")}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "var(--text-gray)", maxWidth: 600, mx: "auto" }}
              >
                {i18n._("Everything you need for successful XAU/USD trading")}
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      p: 3,
                      textAlign: "center",
                      backgroundColor: "var(--background)",
                      boxShadow: "0 4px 20px rgba(244, 197, 66, 0.1)",
                      borderRadius: 3,
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 8px 30px rgba(244, 197, 66, 0.2)",
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "var(--gold)",
                          fontFamily: '"Tenor Sans", serif',
                          mb: 2,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "var(--text-gray)", lineHeight: 1.6 }}
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

        {/* CTA Section */}
        <Box
          sx={{
            py: 8,
            background:
              "linear-gradient(135deg, var(--background) 0%, var(--background-gradient-end) 100%)",
            color: "var(--white)",
          }}
        >
          <Container maxWidth="md">
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontFamily: '"Tenor Sans", serif',
                  mb: 2,
                }}
              >
                {i18n._("Ready to Enhance Your Trading?")}
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                {i18n._(
                  "Join thousands of traders who trust {NAME_APP} for their XAU/USD analysis",
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
                  startIcon={<Apple />}
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    color: "#582c83",
                    px: 4,
                    py: 2,
                    borderRadius: 3,
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 1)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {i18n._("Download on App Store")}
                </Button>

                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Android />}
                  href={googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "var(--gold)",
                    color: "var(--background)",
                    px: 4,
                    py: 2,
                    borderRadius: 3,
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    "&:hover": {
                      backgroundColor: "var(--gold-opacity-40)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {i18n._("Get it on Google Play")}
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
