import { Segmented } from "antd";
import { SegmentedLabeledOption, SegmentedValue } from "antd/es/segmented";
import React, { useState } from "react";

interface Props {
  header: SegmentedLabeledOption[];
  headervalue: string | number;
  setHeaderValue: React.Dispatch<React.SetStateAction<string|number>>;
}
const Header = ({ header, setHeaderValue, headervalue }: Props) => {
 

  return (
    <Segmented options={header} value={headervalue} onChange={setHeaderValue} />
  );
};

export default Header;
