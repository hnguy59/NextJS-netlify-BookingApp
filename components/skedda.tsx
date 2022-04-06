import React from "react";

export default function Skedda() {
  const skeddaUrl = process.env.NEXT_PUBLIC_SKEDDA_URL;
  return (
    <div className="skedda">
      <iframe
        className="skedda__iframe"
        src={skeddaUrl}
        // style="width:100%;height:1000px;"
      ></iframe>
    </div>
  );
}
