"use client";

import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { set } from "zod";
import { sources } from "next/dist/compiled/webpack/webpack";

const UploadPage = () => {
  interface CloudinaryResult {
    public_id: string;
  }

  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="Ghibli image" />
      )}
      <CldUploadWidget
        uploadPreset="gdbybt2f"
        options={{ sources: ["local", "camera"] }}
        onSuccess={(result, widget) => {
          if (result.event !== "success") {
            return;
          } else {
            const info = result.info as CloudinaryResult;
            setPublicId(info.public_id);
          }
        }}
      >
        {({ open }) => (
          <button
            className="btn btn-primary"
            onClick={() => {
              open();
            }}
          >
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
