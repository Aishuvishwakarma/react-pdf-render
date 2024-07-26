import React, { useEffect, useRef, useState } from "react";
import WebViewer from "@pdftron/webviewer";
// import UploadPDF from "./Uploadpdf";

const EditablePdf = () => {
  const viewer = useRef(null);
  const [instance, setInstance] = useState(null);
  const [pdfPath, setPdfPath] = useState("/pdfs/doc.pdf");

  useEffect(() => {
    const initializeViewer = async () => {
      try {
        const newInstance = await WebViewer(
          {
            path: "/webviewer", // Correct path to the WebViewer assets
            licenseKey:
              "demo:1720770902907:7f9fb2eb030000000058a0dceaffd26848d4094b774b5c502a52d36930",
          },
          viewer.current
        );

        const { docViewer, UI, Core } = newInstance;
        const { documentViewer, annotationManager, Tools, Annotations } = Core;

        documentViewer.addEventListener("documentLoaded", () => {
          console.log("Document Loaded");
        });

        setInstance(newInstance);

        if (pdfPath) {
          loadPDF(newInstance, pdfPath);
        }
      } catch (error) {
        console.error("Error initializing WebViewer:", error);
      }
    };

    initializeViewer();

    return () => {
      if (instance && instance.dispose) {
        instance.dispose();
      }
    };
  }, [pdfPath]);

  const loadPDF = async (instance, pdfPath) => {
    const { UI } = instance;
    if (UI && UI.loadDocument) {
      try {
        console.log("Loading document:", pdfPath);
        await UI.loadDocument(pdfPath);
        await UI.enableFeatures([instance.UI.Feature.ContentEdit]);
        await UI.setToolbarGroup(instance.UI.ToolbarGroup.EDIT_TEXT);
      } catch (error) {
        console.error("Error loading document:", error);
      }
    } else {
      console.error("docViewer or loadDocument is not defined");
    }
  };

  return (
    <div id="viewer-container" style={{ height: "100vh" }}>
      {/* <UploadPDF onFileUpload={handleFileUpload} /> */}
      <div className="webviewer" ref={viewer} style={{ height: "100%" }}></div>
    </div>
  );
};

export default EditablePdf;
