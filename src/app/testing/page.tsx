"use client";

import AtomAvatar from "@/components/atoms/avatar";
import AtomCheckbox from "@/components/atoms/checkbox";
import AtomInput from "@/components/atoms/input";
import AtomRadio from "@/components/atoms/radio";
import AtomTag from "@/components/atoms/tag";
import AtomToggleSwitch from "@/components/atoms/toggleSwitch";
import { AtomButton } from "@BigStyle";
import React, { useState, useRef } from "react";
import Head from "next/head";

function PageTesting() {
  const [isLoading, setIsLoading] = useState(true);

  const inputRef = useRef(null);

  return (
    <>
      <AtomButton
        isLoading={isLoading}
        onClick={() => setIsLoading((prev) => !prev)}
        size="L"
        variant="transparent1"
      >
        Click Here
      </AtomButton>

      <br />
      <AtomInput
        placeholder="testing"
        ref={inputRef}
        onChange={() => console.log(inputRef)}
      />

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
        disabled
      />
      <br />
      <AtomRadio
        onChange={() => setIsLoading((prev) => !prev)}
        checked={isLoading}
        label="Label"
      />

      <br />
      <AtomToggleSwitch active disabled>
        T
      </AtomToggleSwitch>
      <br />
      <AtomAvatar disabled name="andreas Kurniawan" />
    </>
  );
}

export default PageTesting;
