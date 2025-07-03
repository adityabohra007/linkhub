import { Button } from "flowbite-react";
import React, { useState } from "react";

function CopyToClipboard() {
  const [text, setText] = useState("");
  const [copyStatus, setCopyStatus] = useState("ready"); // ready, success, error

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus("success");
      setTimeout(() => setCopyStatus("ready"), 2000); // Reset status after 2 seconds
    } catch (error) {
      setCopyStatus("error");
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="w-3/4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        // placeholder="Text to copy"
      />
      <Button
        className="p-5 bg-white hover:bg-gray-100 hover:border-1 focus:border-0 text-black border-1 flex w-full justify-between"
        onClick={copyToClipboard}
        disabled={copyStatus === "success"}
      >
        <span>linkhub/abohra</span>
        <span>
          {copyStatus === "ready"
            ? "Copy"
            : copyStatus === "success"
            ? "Copied!"
            : "Error"}
        </span>
      </Button>

      {/* {copyStatus === "error" && <p>Failed to copy to clipboard.</p>} */}
    </div>
  );
}

export default CopyToClipboard;
