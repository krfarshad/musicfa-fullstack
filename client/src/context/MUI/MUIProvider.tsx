import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { ChildrenProps } from "@/types";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

interface Props extends ChildrenProps {}

const MUIProvider = (props: Props) => {
  const { children } = props;

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
