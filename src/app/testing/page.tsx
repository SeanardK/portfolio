"use client";

import AtomInput from "@/components/atoms/input";
import AtomTag from "@/components/atoms/tag";
import { AtomButton } from "@BigStyle";
import React, { useState, useRef } from "react";

function LeftIcon() {
  return <div>Icon</div>;
}

function PageTesting() {
  const [isLoading, setIsLoading] = useState(true);

  const inputRef = useRef(null);

  return (
    <div>
      <AtomButton
        isLoading={isLoading}
        onClick={() => setIsLoading((prev) => !prev)}
        size="L"
        variant="transparent1"
      >
        Click Here
      </AtomButton>

      <br />
      <AtomInput ref={inputRef} onChange={() => console.log(inputRef)} />

      <br />
      <AtomTag
        variant="neutral"
        onClick={() => {
          alert("HEHE");
        }}
      >
        Success
      </AtomTag>
    </div>
  );
}

export default PageTesting;
