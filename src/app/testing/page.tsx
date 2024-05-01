"use client";

import AtomCheckbox from "@/components/atoms/checkbox";
import AtomInput from "@/components/atoms/input";
import AtomRadio from "@/components/atoms/radio";
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

      <br />
      <AtomCheckbox
        onChange={() => setIsLoading((prev) => !prev)}
        variant="dot"
        checked={isLoading}
        value={isLoading}
      />
      <br />
      <AtomRadio
        disabled
        onChange={() => setIsLoading((prev) => !prev)}
        checked={isLoading}
        value={isLoading}
        label="Label"
      />
    </div>
  );
}

export default PageTesting;
