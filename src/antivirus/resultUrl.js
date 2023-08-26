import "../css/nav.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
function ResultUrl({ onResult }) {
  const [resp, setResp] = useState(null);

  useEffect(() => {
    result();
  }, []);

  const result = async () => {
    const options = {
      method: "GET",
      url: `https://www.virustotal.com/api/v3/urls/${onResult}`,
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
          {resp && (
            <div>
              <h2>URL Information</h2>

              <p>Title: {resp.data.attributes.title}</p>

              <p>Categories: {resp.data.attributes.categories.Sophos}</p>
              <p>Reputation: {resp.data.attributes.reputation}</p>

              <b>Virus</b>
              <p>Malicious: {resp.data.attributes.total_votes.malicious}</p>
              <p>Last Analysis Date: {new Date().toLocaleString()}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default ResultUrl;
