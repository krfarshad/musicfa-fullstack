"use client";
import Box from "@mui/material/Box";
import MusicInfo from "./MusicInfo";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { PlayBackControls } from "./PlayBackControls";
import { ProgressBar } from "./ProgressBar";
import PlayerActions from "./PlayerActions";

type Props = {
  drawerWidth: number;
};
export default function PLayerBlade(props: Props) {
  const { drawerWidth } = props;
  const { currentMusic } = useSelector((state: RootState) => state.music);

  return (
    <div className="w-full px-2 md:px-8">
      {currentMusic && (
        <div
          className="fixed bottom-0 left-0 w-full"
          style={{ paddingLeft: drawerWidth }}
        >
          <div className="p-2 md:p-4">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 1,
                bgcolor: "#313030",
                color: "text.primary",
                borderRadius: 2,
                boxShadow: 3,
                width: 1,
                mx: "auto",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              <MusicInfo />
              <Box
                sx={{
                  flexGrow: 1,
                  width: "100%",
                  mx: 1,
                  textAlign: "center",
                }}
              >
                <PlayBackControls />
                <ProgressBar />
              </Box>
              <PlayerActions id={currentMusic.id} />
            </Box>
          </div>
        </div>
      )}
    </div>
  );
}
