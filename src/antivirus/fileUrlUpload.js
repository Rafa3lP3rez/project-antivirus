import axios from "axios";
import "../css/nav.css";
import React, { useEffect, useState } from "react";
import ResultUrl from "./resultUrl";

function FileUrlUpload() {
  const [text, setText] = useState(null);
  const [idd, setIdd] = useState(undefined);



  const handleUrlChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (text) {
      const encodedParams = new URLSearchParams();
      encodedParams.set("url", text);

      const options = {
        method: "POST",
        url: "https://www.virustotal.com/api/v3/urls",
        headers: {
          accept: "application/json",
          "x-apikey":
            "6536c78ddf9bf02201ce0f0e85a09f045c5721463c6b41d2ef88f4612ac35d04",
          "content-type": "application/x-www-form-urlencoded",
        },
        data: encodedParams,
      };

      try {
        const response = await axios.request(options);
        const { data } = response.data;

        const { self } = data.links;

        console.log(self);
        const extractedPart = self.split("-")[1];
        console.log(extractedPart);
        setIdd(extractedPart);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const dataUtil =
    idd !== undefined ? <ResultUrl onResult={idd} /> : <p>Result here</p>;

  return (
    <div className="content d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
        <div className="container mt-4">
          <div className="row justify-content-center">
            <label htmlFor="fileInput" className="form-label, font-weight-bold">
              Pegar Url
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleUrlChange}
            />
          </div>{" "}
          <br />
          <div className="row justify-content-center">
            <div className="col-md-6">
              <input
                type="submit"
                value="Analizar"
                className="btn btn-primary"
              />
            </div>
          </div>{" "}
          <br />
          {dataUtil}
        </div>
      </form>
    </div>
  );
}
export default FileUrlUpload;
