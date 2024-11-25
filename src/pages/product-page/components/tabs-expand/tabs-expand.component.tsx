import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabsExpandProps } from "./tabs-expand.types";
import { FC } from "react";
import BoxContentTabPanel from "./component/box-content-tab-panel";
import * as Styled from "./tabs-expand.styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <BoxContentTabPanel>{children}</BoxContentTabPanel>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsExpand: FC<TabsExpandProps> = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Styled.BoxMain>
      <Styled.BoxParts>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Styled.BoxParts>
      <CustomTabPanel value={value} index={0}>
        Raw denim you probably haven't heard of them jean shorts Austin.
        Nesciunt tofu stum ptown aliqua, retro synth master cleanse. Mustache
        cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
        butcher retro keffiyeh dreamcat cher synth. Cosby sweater eu banh mi
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Styled.BoxMain>
  );
};

export default TabsExpand;
