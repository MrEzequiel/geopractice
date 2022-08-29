import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  listItemIconClasses,
} from "@mui/material";
import { useRouter } from "next/router";
import CountryFlag from "../CountryFlag";

const contryCode: { [x: string]: string } = {
  "pt-br": "br",
  en: "us",
};

const LocaleSwitcher = () => {
  const { locale = "", locales = [], asPath, push } = useRouter();

  const changeLanguage = (locale: string) => {
    push(asPath, asPath, { locale });
  };

  return (
    <Select
      value={locale}
      size="small"
      sx={{ bgcolor: "background.paper" }}
      inputProps={{
        sx: {
          p: 1,
          pl: 2,
          pr: `${6 * 8}px !important`,
          display: "flex",
          alignItems: "center",
          gap: 1,
          [`.${listItemIconClasses.root}`]: {
            minWidth: "auto !important",
          },
        },
      }}
    >
      {locales.map((locale) => (
        <MenuItem
          key={locale}
          value={locale}
          onClick={() => changeLanguage(locale)}
        >
          <ListItemIcon>
            <CountryFlag code={contryCode[locale]} />
          </ListItemIcon>
          <ListItemText primary={locale} />
        </MenuItem>
      ))}
    </Select>
  );
};

export default LocaleSwitcher;
