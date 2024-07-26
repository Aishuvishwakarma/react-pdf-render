import React, { useState } from "react";
// import { pdfjs } from 'pdfjs-dist';
import { pdfjs } from "react-pdf";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PdfToHtmlConverter = () => {
  const [htmlContent, setHtmlContent] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const typedArray = new Uint8Array(e.target.result);
        console.log(typedArray)
        // const pdf = await pdfjs.getDocument({ data: typedArray }).promise;
        // let html = "";

        // for (let i = 1; i <= pdf.numPages; i++) {
        //   const page = await pdf.getPage(i);
        //   const viewport = page.getViewport({ scale: 1 });
        //   const textContent = await page.getTextContent();
        //   const pageHtml = textContent.items.map((item) => item.str).join(" ");
        //   html += `<div style="margin-bottom: 20px;"><strong>Page ${i}</strong><br>${pageHtml}</div>`;
        // }

        // setHtmlContent(html);
      };
      reader.readAsArrayBuffer(file);
    }
  };
// console.log(htmlContent)
  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      {/* <ReactQuill value={htmlContent} readOnly={true} theme="snow" /> */}
    </div>
  );
};

export default PdfToHtmlConverter;
