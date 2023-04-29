import React from "react";
import Chip from "@mui/material/Chip";
import { Avatar } from "@mui/material";

interface Props {
  color?: any;
  image: string;
  text: string;
  size: "small" | "medium";
  onClick?: () => void;
  variant: "filled" | "outlined";
}
const Pill = ({ image, text, color, size, onClick, variant }: Props) => {
  return (
    <Chip
      variant={variant}
      label={text}
      color={color}
      size={size}
      onClick={onClick}
      avatar={<Avatar src={image} />}
    />
  );
};

export default Pill;
