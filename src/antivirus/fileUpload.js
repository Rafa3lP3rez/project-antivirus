import axios from "axios";
import "../css/nav.css";
import React, { useState } from "react";
import ResultFile from "./resultFile";
function FileUpload() {
  const [file, setFile] = useState(null);
  const [id, setId] = useState(undefined);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const options = {
          method: "POST",
          headers: {
            accept: "application/json",
            "x-apikey":
              "6536c78ddf9bf02201ce0f0e85a09f045c5721463c6b41d2ef88f4612ac35d04",
            "content-type": "multipart/form-data",
          },
        };

        const response = await axios.post(
          "https://www.virustotal.com/api/v3/files",
          formData,
          options
        );

        const { data } = response.data;

        const { self } = data.links;

        setId(self);

        return;
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const dataUtil =
    id !== undefined ? <ResultFile onResult={id} /> : <p>Result here</p>;

  return (
    <div className="content d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
        <div className="container mt-4">
          <div className="row justify-content-center">
            <label htmlFor="fileInput" className="form-label, font-weight-bold">
              Subir archivo
            </label>
            <input
              type="file"
              className="form-control"
              id="fileInput"
              onChange={handleFileChange}
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
export default FileUpload;
