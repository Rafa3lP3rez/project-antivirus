import "../css/nav.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
function ResultFile({ onResult }) {

  const [resp, setResp] = useState(null);

  useEffect(() => {
    result();
  }, []);

  const result = async () => {
    const options = {
      method: "GET",
      url: `${onResult}`,
      headers: {
        accept: "application/json",
        "x-apikey":
          "6536c78ddf9bf02201ce0f0e85a09f045c5721463c6b41d2ef88f4612ac35d04",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      
      setResp(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="content">
      {resp ? (
        <div>
      
          {resp.data.attributes.stats && (
            <div>
              <p>Stats:</p>
              <p>Harmless: {resp.data.attributes.stats.harmless}</p>
              <p>Type Unsupported: {resp.data.attributes.stats["type-unsupported"]}</p>
              <p>Suspicious: {resp.data.attributes.stats.suspicious}</p>
              <p>Confirmed Timeout: {resp.data.attributes.stats["confirmed-timeout"]}</p>
      
              <p>Malicious: {resp.data.attributes.stats.malicious}</p>
              <p>Undetected: {resp.data.attributes.stats.undetected}</p>
            </div>
          )}
          <p>Date: {new Date().toDateString()}</p>
          {/* Acceder a más propiedades anidadas aquí */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default ResultFile;
