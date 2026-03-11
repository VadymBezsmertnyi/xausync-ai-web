import React, { FunctionComponent, useMemo, useState } from "react";
import { I18n } from "@lingui/core";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useRouter } from "next/router";

// providers
import { useLocalesProvider } from "@/localization/localization.provider";
import { Language } from "@/localization/localization.types";

// helpers
import { buildPathWithLanguage } from "@/localization/localization.helpers";

// components
import LanguageSelect from "../LanguageSelect/LanguageSelect";

// constants
import { PATHS } from "@/providers/paths.constants";
import { NAME_APP } from "@/constants";

// styles
import styles from "./Header.module.css";

type HeaderProps = {
  isShowMenu?: boolean;
};

const getMenuItems = (i18n: I18n, language: Language) => [
  { path: buildPathWithLanguage(PATHS.main, language), label: i18n._("Home") },
  {
    path: buildPathWithLanguage(PATHS.about, language),
    label: i18n._("About"),
  },
  {
    path: buildPathWithLanguage(PATHS.privacyPolicy, language),
    label: i18n._("Privacy Policy"),
  },
  {
    path: buildPathWithLanguage(PATHS.termOfUse, language),
    label: i18n._("Terms of Use"),
  },
  {
    path: buildPathWithLanguage(PATHS.disclaimer, language),
    label: i18n._("Disclaimer"),
  },
];

export const Header: FunctionComponent<HeaderProps> = ({
  isShowMenu = true,
}) => {
  const router = useRouter();
  const { i18n, language } = useLocalesProvider();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = useMemo(
    () => getMenuItems(i18n, language),
    [i18n, language]
  );

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    handleMenuClose();
  };

  const isCurrentPage = (path: string) => {
    const cleanPath = path.replace(/^\/[a-z]{2}/, "");
    if (cleanPath === PATHS.main)
      return router.pathname === "/" || router.pathname === "/index";

    return router.pathname === cleanPath;
  };

  return (
    <>
      <Box className={styles.container}>
        <Box
          className={styles.containerLogo}
          onClick={() => {
            router.push(buildPathWithLanguage(PATHS.main, language));
          }}
        >
          <Image
            src={"/icon.png"}
            alt={i18n._("Logo")}
            width={50}
            height={50}
            priority
          />
          <Typography component={"p"} className={styles.titleLogo}>
            {NAME_APP}
          </Typography>
        </Box>

        {isShowMenu && (
          <>
            {/* Desktop Menu */}
            <Box className={styles.desktopMenu}>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${styles.menuElement} ${
                    isCurrentPage(item.path) ? styles.menuElementActive : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              className={styles.mobileMenuButton}
              onClick={handleMobileMenuToggle}
              aria-label="menu"
              size="small"
            >
              <MenuIcon />
            </IconButton>
          </>
        )}

        <Box className={styles.containerLeft}>
          <LanguageSelect />
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMenuClose}
        className={styles.mobileDrawer}
        PaperProps={{
          className: styles.drawerPaper,
        }}
      >
        <Box className={styles.drawerHeader}>
          <Typography className={styles.drawerTitle}>
            {i18n._("Menu")}
          </Typography>
          <IconButton onClick={handleMenuClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>
        <List className={styles.drawerList}>
          {menuItems.map((item) => (
            <ListItem key={item.path} className={styles.drawerItem}>
              <Link
                href={item.path}
                className={`${styles.drawerLink} ${
                  isCurrentPage(item.path) ? styles.drawerLinkActive : ""
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
