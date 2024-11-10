import { MusicResponse } from "@/utils/models";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { likeMusic, playMusic } from "@/features/music";

type MusicState = {
  currentMusic: MusicResponse | null;
  loading: boolean;
  error: string | null;
  isPlaying: boolean;
};

const initialState: MusicState = {
  currentMusic: null,
  loading: false,
  error: null,
  isPlaying: false,
};

export const playMusicAsync = createAsyncThunk(
  "music/playMusic",
  async (music: MusicResponse, { dispatch, rejectWithValue }) => {
    dispatch(setCurrentMusic(music));
    try {
      const response = await playMusic({ id: music.id.toString() });
      return response.data as MusicResponse;
    } catch (error) {
      return rejectWithValue("Failed to update play count");
    }
  },
);

export const likeMusicAsync = createAsyncThunk(
  "music/likeMusic",
  async (musicId: number, { rejectWithValue }) => {
    try {
      const response = await likeMusic({ id: musicId.toString() });
      return response.data as MusicResponse;
    } catch (error) {
      return rejectWithValue("Failed to update like count");
    }
  },
);

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setCurrentMusic: (state, action: PayloadAction<MusicResponse>) => {
      state.currentMusic = action.payload;
      state.isPlaying = true;
    },
    toggleIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle playMusicAsync
      .addCase(playMusicAsync.pending, (state) => {
        if (state.currentMusic) {
          state.currentMusic.playCount += 1;
        }
        state.loading = true;
        state.error = null;
      })
      .addCase(playMusicAsync.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(playMusicAsync.rejected, (state, action) => {
        state.loading = false;
        if (state.currentMusic) {
          state.currentMusic.playCount -= 1;
        }
        state.error = action.payload as string;
      })
      // Handle likeMusicAsync
      .addCase(likeMusicAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        if (state.currentMusic) {
          state.currentMusic.likeCount += 1;
        }
      })
      .addCase(likeMusicAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(likeMusicAsync.rejected, (state, action) => {
        state.loading = false;
        if (state.currentMusic) {
          state.currentMusic.likeCount -= 1;
        }
        state.error = action.payload as string;
      });
  },
});

export const { setCurrentMusic, toggleIsPlaying } = musicSlice.actions;

export default musicSlice.reducer;
