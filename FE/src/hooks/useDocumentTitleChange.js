import React, { useEffect } from "react";

export const useDocumentTitleChange = (name) => {
  useEffect(() => {
    window.onfocus = () => {
      document.title = name;
    };
  }, []);
};
