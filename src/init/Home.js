import FileUpload from "../antivirus/fileUpload";


import "../css/nav.css";

function Home() {
  return (
    <div className="content">
      <h1>Analizar archivo</h1>

      <FileUpload />
    </div>
  );
}

export default Home;
