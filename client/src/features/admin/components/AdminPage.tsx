"use client";
import { Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { UploadMusic } from "./UploadMusic";
import { AddArtist } from "./AddArtist";
import { AddAlbum } from "./AddAlbum";

type TabProp = { label: string; value: string };

const tabs: TabProp[] = [
  { label: "upload music", value: "music" },
  { label: "Add Artist", value: "artist" },
  { label: "Add Album", value: "album" },
];
export const AdminPage = () => {
  const [value, setValue] = useState<TabProp>(tabs[0]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    const newState = tabs.find((tab) => tab.value == newValue);
    newState && setValue(newState);
  };

  const renderComponents = () => {
    switch (value.value) {
      case "music":
        return <UploadMusic />;
      case "artist":
        return <AddArtist />;
      case "album":
        return <AddAlbum />;
      default:
        return <></>;
    }
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value.value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="lab API tabs example"
        >
          {tabs.map((tab) => (
            <Tab key={`tab_${tab.value}`} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
      </Box>
      <div className="w-full p-4">
        <div className="max-w-xl">{renderComponents()}</div>
      </div>
    </Box>
  );
};
