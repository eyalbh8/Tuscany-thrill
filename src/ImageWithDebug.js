// Debug component to log 404 image errors
import React from "react";

export default function ImageWithDebug(props) {
  return (
    <img
      {...props}
      onError={(e) => {
        const el = e.target;
        console.error("❌ [IMG 404]", el.src);
        console.error("   Alt text:", el.alt);
      }}
      onLoad={(e) => {
        const el = e.target;
        console.log("✅ [IMG OK]", el.src);
      }}
    />
  );
}
