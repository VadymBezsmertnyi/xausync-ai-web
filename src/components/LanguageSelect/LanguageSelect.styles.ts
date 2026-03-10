const styles = {
  container: {
    display: "flex",
    gap: "4px",
    color: "var(--gold)",
  },
  containerModal: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    backgroundColor: "rgba(15, 15, 20, 0.95)",
    borderRadius: "12px",
    padding: "8px",
    minWidth: "320px",
  },
  containerTitleModal: {
    padding: "16px",
    borderBottom: "1px solid rgba(244, 197, 66, 0.2)",
    color: "var(--gold)",
  },
  buttonModal: {
    display: "flex",
    gap: "12px",
    justifyContent: "space-between",
    width: "100%",
    padding: "10px 14px",
    borderRadius: "8px",
    color: "var(--text)",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: "rgba(244, 197, 66, 0.08)",
    },
    "&.selected": {
      backgroundColor: "rgba(244, 197, 66, 0.15)",
    },
  },
  titlesButtonModal: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "var(--text)",
  },
};

export default styles;
