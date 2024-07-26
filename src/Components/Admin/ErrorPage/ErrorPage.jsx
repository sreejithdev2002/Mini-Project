import React from "react";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <>
      <div className="flex justify-center h-[100vh]">
        <h1 className="flex content-center justify-center flex-wrap text-[6rem] font-[system-ui]">
          <span className="text-[#a50000] text-[5.5em] self-center">404</span>
          PAGE NOT FOUND
        </h1>
      </div>
    </>
  );
}

export default ErrorPage;
