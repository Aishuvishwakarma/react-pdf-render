import { useEffect, useRef } from "react";

const API_KEY =
  "sdmp4Jj88n_MhK-Xb8KYhF6wE60mfpx1Sw3v4UFf84l7HTqbAK_2pZd8cbeRteOHTSofh_TQ3IsOYHbRE4FiCFRrUkGXc12i9QxBrH8R7xKGqMte7JXM4lxxGJBsjVoOv5XqIncsBXJtztUrlm4gx6zXdaCruBnRW6QDiJQBNw0TuB_PRT2-2lhE5DpJB_Xb1ogL3uesDP0Mg5HO";

function PDFEditor(props) {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit;
    (async function () {
      PSPDFKit = await import("pspdfkit");

      PSPDFKit.unload(container); // Ensure that there's only one PSPDFKit instance.

      await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        container,
        // The document to open.
        document: props.document,
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
        licenseKey:API_KEY
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}

export default PDFEditor;
