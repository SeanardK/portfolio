"use client";

import AtomAvatar from "@/components/avatar";
import AtomBreadcrumb from "@/components/breadcrumb";
import RightChevronIcon from "@/components/breadcrumb/ChevronIcon";
import AtomCheckbox from "@/components/checkbox";
import AtomInput from "@/components/input";
import AtomModal from "@/components/modal";
import AtomProgressBar from "@/components/progressBar";
import AtomRadio from "@/components/radio";
import AtomTag from "@/components/tag";
import AtomToggleSwitch from "@/components/toggleSwitch";
import IconCheck from "@/components/icon/Check";
import Pagination from "@/components/pagination";
import CustomMultiSelect from "@/components/select";
import Sidebar from "@/components/sidebar";
import { AtomButton } from "@BigStyle";
import React, { useState, useRef } from "react";
import Layout from "@/components/layout";

function PageTesting() {
  const [isLoading, setIsLoading] = useState(false);

  // Pagination
  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const inputRef = useRef(null);

  return (
    <Layout>
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
      <AtomAvatar name="andreas Kurniawan" />

      <br />
      <AtomProgressBar
        disabled
        label="testing"
        className="w-[500px]"
        value={40}
      />

      <AtomModal
        onClose={() => {
          setIsLoading(false);
        }}
        open={isLoading}
        center
      >
        <h1 className="h-[200px]">Testing</h1>
      </AtomModal>

      <AtomBreadcrumb
        menu={[
          {
            name: "testing 2",
            href: "/testing2",
            disabled: true,
          },
          {
            name: "testing 2",
            disabled: false,
          },
          {
            name: "testing 2",
            href: "/testing2",
          },
        ]}
      />

      <CustomMultiSelect
        // value={["Options 1"]}
        placeholder="Select Select"
        options={[
          {
            label: "Options 1",
            value: "Options 1",
          },
          {
            label: "Options 2",
            value: "Options 2",
          },
          {
            label: "Options 2",
            value: "Options 3",
          },
          {
            label: "Options 2",
            value: "Options 4",
          },
        ]}
      />

      <Pagination
        activePage={activePage}
        totalPage={10}
        onChange={(e) => setActivePage(e)}
        perPage={perPage}
        onChangePerPage={(e) => setPerPage(e)}
      />
    </Layout>
  );
}

export default PageTesting;
