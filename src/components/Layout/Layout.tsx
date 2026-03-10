import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";

// providers
import LocalesProvider from "@/localization/localization.provider";
import LoadingProvider from "@/providers/LoadingProvider/LoadingProvider";

// components
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <LocalesProvider>
      <LoadingProvider>
        <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Header />
          <Box sx={{ flex: 1 }}>{children}</Box>
          <Footer />
        </Box>
      </LoadingProvider>
    </LocalesProvider>
  );
};

export default Layout;
