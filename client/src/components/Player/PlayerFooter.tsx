"use client";
import { useState, useRef } from "react";
import ReactPlayer from "react-player";

export const PlayerFooter = () => {
  // const [url, setUrl] = useState(null);
  // const [pip, setPip] = useState(false);
  // const [playing, setPlaying] = useState(true);
  // const [controls, setControls] = useState(false);
  // const [light, setLight] = useState(false);
  // const [volume, setVolume] = useState(0.8);
  // const [muted, setMuted] = useState(false);
  // const [played, setPlayed] = useState(0);
  // const [loaded, setLoaded] = useState(0);
  // const [duration, setDuration] = useState(0);
  // const [playbackRate, setPlaybackRate] = useState(1.0);
  // const [loop, setLoop] = useState(false);
  // const [seeking, setSeeking] = useState(false);

  // const playerRef = useRef(null);
  // const urlInputRef = useRef(null);

  // const load = (url) => {
  //   setUrl(url);
  //   setPlayed(0);
  //   setLoaded(0);
  //   setPip(false);
  // };

  // const handlePlayPause = () => {
  //   setPlaying(!playing);
  // };

  // const handleStop = () => {
  //   setUrl(null);
  //   setPlaying(false);
  // };

  // const handleToggleControls = () => {
  //   setControls(!controls);
  //   load(url);
  // };

  // const handleToggleLight = () => {
  //   setLight(!light);
  // };

  // const handleToggleLoop = () => {
  //   setLoop(!loop);
  // };

  // const handleVolumeChange = (e) => {
  //   setVolume(parseFloat(e.target.value));
  // };

  // const handleToggleMuted = () => {
  //   setMuted(!muted);
  // };

  // const handleSetPlaybackRate = (e) => {
  //   setPlaybackRate(parseFloat(e.target.value));
  // };

  // const handleTogglePIP = () => {
  //   setPip(!pip);
  // };

  // const handlePlay = () => {
  //   console.log("onPlay");
  //   setPlaying(true);
  // };

  // const handleEnablePIP = () => {
  //   console.log("onEnablePIP");
  //   setPip(true);
  // };

  // const handleDisablePIP = () => {
  //   console.log("onDisablePIP");
  //   setPip(false);
  // };

  // const handlePause = () => {
  //   console.log("onPause");
  //   setPlaying(false);
  // };

  // const handleSeekMouseDown = () => {
  //   setSeeking(true);
  // };

  // const handleSeekChange = (e) => {
  //   setPlayed(parseFloat(e.target.value));
  // };

  // const handleSeekMouseUp = (e) => {
  //   setSeeking(false);
  //   playerRef.current.seekTo(parseFloat(e.target.value));
  // };

  // const handleProgress = (state) => {
  //   if (!seeking) {
  //     setPlayed(state.played);
  //     setLoaded(state.loaded);
  //   }
  // };

  // const handleEnded = () => {
  //   console.log("onEnded");
  //   setPlaying(loop);
  // };

  // const handleDuration = (duration) => {
  //   console.log("onDuration", duration);
  //   setDuration(duration);
  // };

  // const handleClickFullscreen = () => {
  //   screenfull.request(document.querySelector(".react-player"));
  // };

  // const renderLoadButton = (url, label) => (
  //   <button onClick={() => load(url)}>{label}</button>
  // );

  return (
    <>
      {/* test
      <ReactPlayer
        ref={playerRef}
        className="react-player"
        width="100%"
        height="100%"
        url={url}
        pip={pip}
        playing={playing}
        controls={controls}
        light={light}
        loop={loop}
        playbackRate={playbackRate}
        volume={volume}
        muted={muted}
        onReady={() => console.log("onReady")}
        onStart={() => console.log("onStart")}
        onPlay={handlePlay}
        onEnablePIP={handleEnablePIP}
        onDisablePIP={handleDisablePIP}
        onPause={handlePause}
        onBuffer={() => console.log("onBuffer")}
        onPlaybackRateChange={handleSetPlaybackRate}
        onSeek={(e) => console.log("onSeek", e)}
        onEnded={handleEnded}
        onError={(e) => console.log("onError", e)}
        onProgress={handleProgress}
        onDuration={handleDuration}
      /> */}
    </>
  );
};
