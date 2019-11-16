import React, { useState } from "react";
import QrReader from "react-qr-reader";
import "../styles/qr-reader.less";

export function QrScanner() {
  const [setResult] = useState("No result");

  const handleScan = data => {
    if (data) {
      setResult(data);
      document.localStorage.set("qr-code", data.toString());
    }
  };

  const handleError = err => {
    console.error(err);
  };

  return (
    <section className="Qr-scanner">
      <QrReader delay={300} onError={handleError} onScan={handleScan} />
    </section>
  );
}

export default QrScanner;
