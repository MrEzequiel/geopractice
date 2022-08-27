import { FC } from "react";
import { Box, BoxProps } from "@mui/material";
import Image, { ImageProps } from "next/image";

type Sizes = "1x" | "2x" | "3x";

type FlagQuality =
  | "w20"
  | "w40"
  | "w80"
  | "w160"
  | "w320"
  | "w640"
  | "w1280"
  | "w2560";

const widthSizes: { [x in Sizes]: number } = {
  "1x": 24,
  "2x": 40,
  "3x": 80,
};

const heightSizes: { [x in Sizes]: number } = {
  "1x": 18,
  "2x": 28,
  "3x": 56,
};

const sizeToFlagQuality: { [x in Sizes]: FlagQuality } = {
  "1x": "w40",
  "2x": "w80",
  "3x": "w160",
};

interface CountryFlag extends BoxProps {
  code: string;
  size?: Sizes;
  flagQuality?: FlagQuality;
  imageProps?: Partial<ImageProps>;
}

const CountryFlag: FC<CountryFlag> = ({
  code,
  size = "1x",
  flagQuality,
  imageProps,
  ...props
}) => {
  flagQuality = flagQuality || sizeToFlagQuality[size];

  return (
    <Box
      width={widthSizes[size]}
      height={heightSizes[size]}
      position="relative"
      flexShrink={0}
      {...props}
    >
      <Image
        src={`https://flagcdn.com/${flagQuality}/${code.toLowerCase()}.png`}
        alt="bandeira do país"
        layout="fill"
        quality={100}
        {...imageProps}
      />
    </Box>
  );
};

export default CountryFlag;
