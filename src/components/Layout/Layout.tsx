import React, { FunctionComponent } from "react";

// providers
import LocalesProvider from "@/localization/localization.provider";
import LoadingProvider from "@/providers/LoadingProvider/LoadingProvider";

// components
import { Header } from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <LocalesProvider>
      <LoadingProvider>
        <>
          <Header />
          <main>{children}</main>
        </>
      </LoadingProvider>
    </LocalesProvider>
  );
};

export default Layout;
