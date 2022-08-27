import { FC } from "react";
import { Box, Stack, StackProps, Typography } from "@mui/material";
import { CountryType } from "../../data/countries";
import Image from "next/image";
import CountryFlag from "../CountryFlag";

interface RenderCountryProps extends StackProps {
  city: CountryType;
  label: string;
}

const RenderCountry: FC<RenderCountryProps> = ({ label, city, ...props }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      gap={1}
      {...props}
    >
      <Typography variant="body1" sx={{ whiteSpace: "nowrap" }}>
        {label}
      </Typography>

      <CountryFlag code={city.code} />

      <Typography
        sx={{
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
        variant="body1"
      >
        {city.label}
      </Typography>
    </Stack>
  );
};

export default RenderCountry;
