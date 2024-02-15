import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogsData: [],
  error: false,
  loading: false,
  blogDetail: [],
};

export const getBlogsData = createAsyncThunk(
  "getBlogs",

  async () => {
    const url = `https://32104.fullstack.clarusway.com/blogs/?page=1&limit=10`;
    const data = await axios(url);
    console.log(data.data.data);
    return data.data.data;
  }
);
export const getBlogDetailData = createAsyncThunk(
  "getBlogDetail",

  async (id) => {
    const url = `https://32104.fullstack.clarusway.com/blogs/${id}`;
    const data = await axios(url);
    console.log(data.data.data);
    return data.data.data;
  }
);

const blogApiSlice = createSlice({
  name: "blogsApi",
  initialState,
  //   reducers: {
  //     clearBlogsData: (state) => {
  //       state.blogsData = []
  //     },
  //   },
  extraReducers: (builder) => {
    // getBlogsData durumları
    builder
      .addCase(getBlogsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogsData.fulfilled, (state, action) => {
        state.loading = false;
        state.blogsData = action.payload;
      })
      .addCase(getBlogsData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      // getBlogDetailData durumları
      .addCase(getBlogDetailData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogDetailData.fulfilled, (state, action) => {
        state.loading = false;
        state.blogDetail = action.payload;
      })
      .addCase(getBlogDetailData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// export const { clearBlogsData } = blogApiSlice.actions

export default blogApiSlice.reducer;
