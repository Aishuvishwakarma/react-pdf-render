import EditablePdf from "./components/EditablePdf";
import PDFEditor from "./components/PDFEditor";
import Resume from "./components/Resume";
import UploadAndEditPdf from "./components/UploadAndEditPdf";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h1 className="text-3xl font-bold underline">Pdf Render!</h1>
      {/* <PDFEditor document={"doc.pdf"} />
      <EditablePdf /> */}
      <Resume />
      <UploadAndEditPdf />
    </div>
  );
}

export default App;
