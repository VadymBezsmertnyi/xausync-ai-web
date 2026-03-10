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

  const appStoreUrl = "#"; // Placeholder for future App Store link
  const googlePlayUrl = "#"; // Placeholder for future Google Play link

  const features = [
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: "var(--gold)" }} />,
      title: i18n._("AI-Powered Learning"),
      description: i18n._(
        "Advanced artificial intelligence analyzes XAU/USD market patterns to provide educational insights and learning examples for understanding market behavior."
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
      title: i18n._("Learning Alerts"),
      description: i18n._(
        "Educational notifications for market scenarios and learning opportunities to study real-time market conditions."
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
      title: i18n._("Market Analytics Learning"),
      description: i18n._(
        "Educational market insights and trend analysis for understanding market dynamics and trading logic."
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
    { number: "10K+", label: i18n._("Active Learners") },
    { number: "1M+", label: i18n._("Learning Scenarios") },
    { number: "99.9%", label: i18n._("Uptime") },
    { number: "4.9★", label: i18n._("User Rating") },
  ];

  return (
    <>
      <Head>
        <title>{i18n._("XauSync AI — Learn Trading Analysis with AI")}</title>
        <meta
          name="description"
          content={i18n._(
            "XauSync AI provides AI-powered educational tools for learning trading analysis and market behavior. Study real market scenarios, technical analysis, and trading logic with AI-assisted insights."
          )}
        />
        <meta
          name="keywords"
          content={i18n._(
            "XauSync AI, learn trading, AI trading education, market analysis learning, technical analysis study, trading logic, AI educational tools, market behavior learning"
          )}
        />
        <meta
          property="og:title"
          content={i18n._("XauSync AI — Learn Trading Analysis with AI")}
        />
        <meta
          property="og:description"
          content={i18n._(
            "XauSync AI provides AI-powered educational tools for learning trading analysis and market behavior. Study real market scenarios and technical analysis concepts."
          )}
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={i18n._("XauSync AI - Learn Trading Analysis with AI")}
        />
        <meta property="og:url" content="https://xausync.ai" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={NAME_APP} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={i18n._("XauSync AI — Learn Trading Analysis with AI")}
        />
        <meta
          name="twitter:description"
          content={i18n._(
            "XauSync AI provides AI-powered educational tools for learning trading analysis and market behavior."
          )}
        />
        <meta name="twitter:image" content="/twitter-image.png" />
        <meta
          name="twitter:image:alt"
          content={i18n._("XauSync AI - Learn Trading Analysis with AI")}
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
                    {i18n._("{NAME_APP}: Learn Trading Analysis with AI", {
                      NAME_APP,
                    })}
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
                    {i18n._("Educational Market Analysis Platform")}
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
                      "Learn trading logic and market behavior with AI-powered educational tools. Study real market scenarios, technical analysis, and market insights for educational purposes only."
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
                      href="/about"
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
                      {i18n._("Learn More")}
                    </Button>

                    <Button
                      variant="outlined"
                      size="large"
                      href="/privacy-policy"
                      sx={{
                        backgroundColor: "transparent",
                        color: "var(--gold)",
                        px: 4,
                        py: 2,
                        borderRadius: 3,
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "1.1rem",
                        border: "2px solid var(--gold)",
                        "&:hover": {
                          backgroundColor: "var(--gold)",
                          color: "var(--background)",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {i18n._("Privacy Policy")}
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
                {i18n._("AI-Powered Learning Tools")}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "var(--text-gray)", maxWidth: 600, mx: "auto" }}
              >
                {i18n._(
                  "Educational insights and analysis for learning trading logic and market behavior"
                )}
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
                      "{NAME_APP} provides educational insights and analytical tools to help users learn trading logic and market behavior. Our platform uses real market data as educational context for studying technical analysis and market scenarios.",
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
                      "Important: {NAME_APP} provides educational content only. Real market examples are used for learning purposes. All analysis may be incomplete, delayed, or inaccurate. Use at your own risk.",
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
                  </CardContent>
                </Card>
              </Grid>
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
                {i18n._("Start Your Trading Analysis Learning Journey")}
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                {i18n._(
                  "Join learners who use {NAME_APP} for educational market insights and trading analysis study",
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
                  href="/about"
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    color: "var(--background)",
                    px: 4,
                    py: 2,
                    borderRadius: 3,
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    "&:hover": {
                      backgroundColor: "var(--gold)",
                      color: "var(--background)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {i18n._("Learn About {NAME_APP}", { NAME_APP })}
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="/disclaimer"
                  sx={{
                    backgroundColor: "transparent",
                    color: "var(--white)",
                    px: 4,
                    py: 2,
                    borderRadius: 3,
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    border: "2px solid var(--white)",
                    "&:hover": {
                      backgroundColor: "var(--white)",
                      color: "var(--background)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
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
