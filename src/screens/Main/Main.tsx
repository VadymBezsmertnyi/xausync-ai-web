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
  CalendarToday,
  People,
  PhotoCamera,
  Sms,
  Mic,
  Sync,
  Star,
  TrendingUp,
  Security,
  Speed,
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
      icon: <CalendarToday sx={{ fontSize: 40, color: "#582c83" }} />,
      title: i18n._("Smart Calendar"),
      description: i18n._(
        "Seamless integration with your device calendar. Automatic sync ensures you never miss an appointment."
      ),
    },
    {
      icon: <People sx={{ fontSize: 40, color: "#582c83" }} />,
      title: i18n._("Client Management"),
      description: i18n._(
        "Create detailed client profiles, track service history, and maintain comprehensive notes."
      ),
    },
    {
      icon: <Sms sx={{ fontSize: 40, color: "#582c83" }} />,
      title: i18n._("SMS Notifications"),
      description: i18n._(
        "Send automated SMS reminders to your clients about upcoming appointments."
      ),
    },
    {
      icon: <PhotoCamera sx={{ fontSize: 40, color: "#582c83" }} />,
      title: i18n._("Photo Gallery"),
      description: i18n._(
        "Store and organize photos from each appointment to track client progress."
      ),
    },
    {
      icon: <Mic sx={{ fontSize: 40, color: "#582c83" }} />,
      title: i18n._("Speech-to-Text"),
      description: i18n._(
        "Convert your voice notes into text for quick and easy documentation."
      ),
    },
    {
      icon: <Sync sx={{ fontSize: 40, color: "#582c83" }} />,
      title: i18n._("Multi-Platform Sync"),
      description: i18n._(
        "Access your data seamlessly across mobile app and web platform."
      ),
    },
  ];

  const stats = [
    { number: "1000+", label: i18n._("Active Users") },
    { number: "50K+", label: i18n._("Appointments Managed") },
    { number: "99%", label: i18n._("Uptime") },
    { number: "4.8★", label: i18n._("App Rating") },
  ];

  return (
    <>
      <Head>
        <title>
          {i18n._("{NAME_APP} – Smart Scheduling App for Beauty Experts", {
            NAME_APP,
          })}
        </title>
        <meta
          name="description"
          content={i18n._(
            "Beauty Sync helps beauty professionals manage appointments, clients, and reminders with ease."
          )}
        />
        <meta
          property="og:title"
          content={i18n._(
            "{NAME_APP} – Smart Scheduling App for Beauty Experts",
            { NAME_APP }
          )}
        />
        <meta
          property="og:description"
          content={i18n._(
            "Beauty Sync helps beauty professionals manage appointments, clients, and reminders with ease."
          )}
        />
        <meta property="og:image" content="/adaptive-logo.png" />
        <meta property="og:url" content="https://beautysync.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={i18n._(
            "{NAME_APP} – Smart Scheduling App for Beauty Experts",
            { NAME_APP }
          )}
        />
        <meta
          name="twitter:description"
          content={i18n._(
            "Beauty Sync helps beauty professionals manage appointments, clients, and reminders with ease."
          )}
        />
        <meta name="twitter:image" content="/adaptive-logo.png" />
      </Head>

      <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
        {/* Hero Section */}
        <Box
          sx={{
            background:
              "linear-gradient(135deg, #582c83 0%, #9F88B5 50%, #582c83 100%)",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "300px",
              height: "569px",
              backgroundImage: "url('/background-flowers.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
              opacity: 0.3,
              zIndex: 0,
            }}
          />

          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ color: "white" }}>
                  <Typography
                    variant={isMobile ? "h3" : "h2"}
                    component="h1"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      fontFamily: '"Tenor Sans", serif',
                      color: "#ffffff",
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
                    {i18n._("Your Professional Beauty Companion")}
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
                      "Streamline your beauty business with our comprehensive mobile solution. Manage appointments, track clients, and boost productivity with ease."
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
                      {i18n._("Get it on Google Play")}
                    </Button>
                  </Stack>

                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Chip
                      icon={<Star sx={{ color: "#FFD400" }} />}
                      label={i18n._("4.8★ Rating")}
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        color: "white",
                      }}
                    />
                    <Chip
                      icon={<Security sx={{ color: "#26CB63" }} />}
                      label={i18n._("Secure & Private")}
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        color: "white",
                      }}
                    />
                    <Chip
                      icon={<Speed sx={{ color: "#735BF2" }} />}
                      label={i18n._("Fast & Reliable")}
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        color: "white",
                      }}
                    />
                  </Stack>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ textAlign: "center" }}>
                  <Avatar
                    src="/adaptive-logo.png"
                    sx={{
                      width: 200,
                      height: 200,
                      mx: "auto",
                      mb: 2,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Stats Section */}
        <Box sx={{ py: 8, backgroundColor: "#F6F2FA" }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Card
                    sx={{
                      textAlign: "center",
                      p: 3,
                      backgroundColor: "white",
                      boxShadow: "0 4px 20px rgba(88, 44, 131, 0.1)",
                      borderRadius: 3,
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: "#582c83",
                          fontFamily: '"Tenor Sans", serif',
                          mb: 1,
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#8f9bb3", fontWeight: 500 }}
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
                  color: "#582c83",
                  fontFamily: '"Tenor Sans", serif',
                  mb: 2,
                }}
              >
                {i18n._("Key Features")}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#8f9bb3", maxWidth: 600, mx: "auto" }}
              >
                {i18n._(
                  "Everything you need to manage your beauty business efficiently"
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
                      backgroundColor: "white",
                      boxShadow: "0 4px 20px rgba(88, 44, 131, 0.1)",
                      borderRadius: 3,
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 8px 30px rgba(88, 44, 131, 0.2)",
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "#582c83",
                          fontFamily: '"Tenor Sans", serif',
                          mb: 2,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#8f9bb3", lineHeight: 1.6 }}
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
            background: "linear-gradient(135deg, #582c83 0%, #9F88B5 100%)",
            color: "white",
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
                {i18n._("Ready to Transform Your Business?")}
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                {i18n._(
                  "Join thousands of beauty professionals who trust {NAME_APP} to manage their business",
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
