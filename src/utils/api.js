import axios from "axios";

// Load environment variables
const API_HOST = process.env.REACT_APP_API_HOST;
const API_WEB_BASE_PATH = process.env.REACT_APP_API_WEB_BASE_PATH;
const API_USERNAME = process.env.REACT_APP_API_USERNAME;
const API_PASSWORD = process.env.REACT_APP_API_PASSWORD;

// API login function using XMLHttpRequest
export const apiLogin = async () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_HOST}/${API_WEB_BASE_PATH}/login`, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.withCredentials = true; // Handle cookies

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          const response = JSON.parse(xhr.responseText);
          console.log("API Response Data:", response);
          console.log("API Response Headers:", xhr.getAllResponseHeaders());

          if (response.success) {
            resolve({
              success: true,
              message: response.msg,
              headers: xhr.getAllResponseHeaders(),
            });
          } else {
            resolve({
              success: false,
              message: response.msg || "Login failed",
              headers: xhr.getAllResponseHeaders(),
            });
          }
        } else {
          console.error("API Login Error:", xhr.responseText);
          reject({
            success: false,
            message: "API Login Request Failed",
            error: xhr.responseText,
          });
        }
      }
    };

    const params = new URLSearchParams({
      username: API_USERNAME,
      password: API_PASSWORD,
    }).toString();

    xhr.send(params);
  });
};
