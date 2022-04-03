import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/*
const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "secondary",
        fullWidth: false
      }
    },
    MuiGrid: {
      defaultProps: {
        border: 1
      }
    }
  }
});
*/

const theme = createTheme({});

const AppTheme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
