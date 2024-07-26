import React from 'react';

const UploadPDF = ({ onFileUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadPDF;


// import React, { useEffect, useRef, useState } from "react";
// import WebViewer from "@pdftron/webviewer";
// import UploadPDF from "./uploadpdf"; // Make sure this component handles the PDF upload and returns the file

// const EditablePdf = () => {
//   const viewer = useRef(null);
//   const [instance, setInstance] = useState(null);
//   const [uploadedPDF, setUploadedPDF] = useState(null);

//   useEffect(() => {
//     if (viewer.current) {
//       // Cleanup any existing instance
//       const initializeViewer = async () => {
//         if (instance) {
//           instance.dispose();
//           setInstance(null);
//         }
//         const newInstance = await WebViewer(
//           {
//             path: '/public/webviewer', // path to the PDFTron 'lib' folder on your server
//             licenseKey: 'demo:1720770902907:7f9fb2eb030000000058a0dceaffd26848d4094b774b5c502a52d36930',
//           },
//           viewer.current
//         );
//         setInstance(newInstance);

//         newInstance.docViewer.on("documentLoaded", () => {
//           // Perform actions when document is loaded
//         });
//       };

//       initializeViewer();
//     }
//     // Cleanup on component unmount
//     return () => {
//       if (instance) {
//         instance.dispose();
//       }
//     };
//   }, [viewer]);

//   useEffect(() => {
//     if (instance && uploadedPDF) {
//       const { docViewer } = instance;
//       docViewer.loadDocument(uploadedPDF);
//     }
//   }, [uploadedPDF, instance]);

//   const handleFileUpload = (file) => {
//     const fileURL = URL.createObjectURL(file);
//     setUploadedPDF(fileURL);
//   };

//   return (
//     <div>
//       <UploadPDF onFileUpload={handleFileUpload} />
//       <div id="viewer-container" style={{ height: "100vh" }}>
//         <div className="webviewer" ref={viewer}></div>
//       </div>
//     </div>
//   );
// };

// export default EditablePdf;
