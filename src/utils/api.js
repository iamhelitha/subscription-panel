import axios from "axios";

// Load environment variables
const API_HOST = process.env.REACT_APP_API_HOST;
const API_WEB_BASE_PATH = process.env.REACT_APP_API_WEB_BASE_PATH;
const API_USERNAME = process.env.REACT_APP_API_USERNAME;
const API_PASSWORD = process.env.REACT_APP_API_PASSWORD;

// API login function
export const apiLogin = async () => {
  try {
    const response = await axios.post(
      `${API_HOST}/${API_WEB_BASE_PATH}/login`,
      new URLSearchParams({
        username: API_USERNAME,
        password: API_PASSWORD,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true, // Handle cookies
      }
    );

    // Debugging outputs
    console.log("API Response Data:", response.data);
    console.log("API Response Headers:", response.headers);

    if (response.data.success) {
      return {
        success: true,
        message: response.data.msg,
        headers: response.headers,
      };
    } else {
      return {
        success: false,
        message: response.data.msg || "Login failed",
        headers: response.headers,
      };
    }
  } catch (error) {
    console.error("API Login Error:", error.response ? error.response.data : error.message);
    return {
      success: false,
      message: "API Login Request Failed",
      error: error.response ? error.response.data : error.message,
    };
  }
};
