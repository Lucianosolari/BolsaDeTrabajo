import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { downloadCV } from "../../api";
import { UserContext } from "../../context/UserContext";

export default function CvFileDownload() {
  const { user } = useContext(UserContext);

  const handleDownloadCV = async () => {
    try {
      const response = await downloadCV(user.token);
      const blob = await response.blob();

      // Crea un enlace temporal y lo simula para descargar el archivo
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = "cv.pdf";
      downloadLink.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button onClick={handleDownloadCV}>Descargar CV</Button>
    </div>
  );
}
