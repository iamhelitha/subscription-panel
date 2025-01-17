import React, { useState } from "react";
import { apiLogin } from "../utils/api";

const Dashboard = () => {
  const [apiLoginStatus, setApiLoginStatus] = useState(null);
  const [debugInfo, setDebugInfo] = useState(null); // Store all debug information

  const handleApiConnect = async () => {
    setApiLoginStatus("Connecting to API...");
    setDebugInfo(null); // Clear previous debug info

    const loginResponse = await apiLogin();

    if (loginResponse.success) {
      setApiLoginStatus("API Login Successful!");
      setDebugInfo({
        status: "Success",
        message: loginResponse.message,
        headers: loginResponse.headers,
      });
    } else {
      setApiLoginStatus(`API Login Failed: ${loginResponse.message}`);
      setDebugInfo({
        status: "Failed",
        message: loginResponse.message,
        error: loginResponse.error,
        headers: loginResponse.headers,
      });
    }
  };

  return (
    <div className="min-h-screen p-6 bg-darkBlue text-white">
      <h2 className="text-3xl mb-4">Dashboard</h2>

      {/* Connect Button */}
      <button
        onClick={handleApiConnect}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
      >
        Connect to API
      </button>

      {/* API Login Status */}
      {apiLoginStatus && (
        <div
          className={`mt-4 p-4 rounded-lg ${
            apiLoginStatus.includes("Failed") ? "bg-red-600" : "bg-green-600"
          }`}
        >
          <p>{apiLoginStatus}</p>
        </div>
      )}

      {/* Debug Information */}
      {debugInfo && (
        <div className="mt-6 bg-gray-800 p-4 rounded-lg text-white">
          <h3 className="text-xl mb-4">Debug Information</h3>
          <pre className="whitespace-pre-wrap">{JSON.stringify(debugInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
