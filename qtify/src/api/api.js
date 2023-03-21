import axios from "axios";

const BACKEND_URL = "https://qtify-backend-labs.crio.do";

export const fetchTopSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/albums/top`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchNewSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/albums/new`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export const fetchFilters = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/genres`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/songs`);
    // console.log("function",response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
