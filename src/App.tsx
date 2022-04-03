import React from "react";
import "./i18n";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography
} from "@mui/material";

import { DatePicker, LocalizationProvider } from "@mui/lab";
import DateFnsAdapter from "@date-io/luxon";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import AppTheme from "./AppTheme";

const SignUp = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState<Date | null>(null);
  return (
    <Container
      maxWidth="xs"
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center"
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography component="h1" variant="h5">
            {t("signUp")}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            autoFocus
            fullWidth
            label={t("firstName")}
            name="firstName"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="family-name"
            fullWidth
            label={t("lastName")}
            name="lastName"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DatePicker
            disableFuture
            label={t("dateOfBirth")}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField name="dateOfBirth" fullWidth required {...params} />
            )}
            value={value}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Gender" name="gender" required />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="email"
            fullWidth
            label={t("email")}
            name="email"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="tel"
            fullWidth
            label={t("mobile")}
            name="mobile"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="username"
            fullWidth
            label={t("username")}
            name="username"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="new-password"
            fullWidth
            name="password"
            label={t("password")}
            required
            type="password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="new-password"
            fullWidth
            name="confirmPassword"
            label={t("confirmPassword")}
            required
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label={t("allowExtraEmails")}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {t("signUp")}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default function App() {
  const { i18n } = useTranslation();
  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter} locale={i18n.language}>
      <AppTheme>
        <SignUp />
      </AppTheme>
    </LocalizationProvider>
  );
}
