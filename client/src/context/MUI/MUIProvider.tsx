import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { ChildrenProps } from "@/types";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { palette } from "./palette";
import { useMemo } from "react";

interface Props extends ChildrenProps {}

const MUIProvider = (props: Props) => {
  const { children } = props;

  const baseOption = useMemo(
    () => ({
      palette: palette(),
      // typography,
      shape: { borderRadius: 8 },
      spacing: 8,
    }),
    [],
  );

  const theme = createTheme(baseOption as ThemeOptions);

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default MUIProvider;
