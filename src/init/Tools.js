import FileUrlUpload from '../antivirus/fileUrlUpload';
import '../css/nav.css' 
 
 function Tools(){
  return (
    <div className="content">
      <h1>Scanear Url</h1>
      <FileUrlUpload/>
    </div>
  );
};


export default Tools;