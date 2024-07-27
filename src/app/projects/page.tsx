"use client";

import { AtomButton } from "@/components";
import AtomModal from "@/components/modal";
import Select from "@/components/select";
import AtomTag from "@/components/tag";
import data, { projectInterface } from "@/data";
import anime from "animejs";
import { useEffect, useState } from "react";
import htmlParser from "html-react-parser";
import _ from "lodash";
import Layout from "@/components/layout";
import Link from "next/link";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState([""]);

  const [activeModal, setActiveModal] = useState<number>(0);

  // @ts-ignore
  const filteredData: projectInterface[] =
    activeFilter.length > 0
      ? _.sortBy(
          _.filter(data.projects, (obj: projectInterface) =>
            _.some(activeFilter, (text) => {
              return obj.frameworks.includes(text);
            })
          ),
          ["title"]
        )
      : _.sortBy(data.projects, ["title"]);

  const activeModalData = filteredData[activeModal - 1];

  const handleChangeActiveModal = (index: number) => setActiveModal(index);

  const handleShowAnimation = () => {
    anime({
      targets: [".card"],
      opacity: [0, 1],
      duration: 500,
      scale: [0.8, 1],
      delay: anime.stagger(100),
      easing: "easeInOutCubic",
    });
  };

  useEffect(() => {
    handleShowAnimation();
  }, [activeFilter]);

  return (
    <Layout>
      <main className="p-5 pt-0">
        <div className="py-5 flex justify-between items-center sticky top-0 z-10 bg-white border-b mb-5">
          <h1 className="text-2xl font-bold">PROJECT LIST</h1>

          <Select
            className="w-[200px]"
            options={data.frameworkList()}
            onChange={(data) => setActiveFilter(data)}
            multiSelect
            size="L"
            placeholder="All Project"
          />
        </div>

        <div className="grid gap-5 grid-cols-4">
          {filteredData.map((v, i) => (
            <button
              className="card"
              key={i}
              onClick={() => handleChangeActiveModal(i + 1)}
            >
              <div
                className="border text-left rounded-md h-[250px] relative overflow-hidden align-top"
                key={i}
              >
                <img
                  key={i}
                  alt="Project Image"
                  className="h-1/2 w-full object-cover object center"
                  src={`https://picsum.photos/200?random=${i}`}
                />
                <div className="p-3">
                  <h2 className="font-semibold text-lg mb-1 line-clamp-1">
                    {v.title}
                  </h2>
                  <p className="line-clamp-3 leading-5">{v.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <AtomModal
          onClose={() => handleChangeActiveModal(0)}
          open={Boolean(activeModal)}
          size="M"
          center
          header={
            <h2 className="mb-2 font-bold text-2xl">
              {activeModalData?.title}
            </h2>
          }
          footer={
            <div className="flex justify-end sticky bottom-0 bg-white">
              {activeModalData?.repository && (
                <Link href={activeModalData?.repository} target="_blank">
                  <AtomButton size="L" variant="secondary" className="mx-2">
                    Show Repository
                  </AtomButton>
                </Link>
              )}
              {activeModalData?.url && (
                <Link href={activeModalData?.url} target="_blank">
                  <AtomButton size="L" className="mx-2">
                    Visit Website
                  </AtomButton>
                </Link>
              )}
            </div>
          }
        >
          <div className="px-3">
            <img
              alt="Project Image"
              className="h-[250px] mb-5 rounded-md w-full object-cover object center"
              src={`https://picsum.photos/1000?random=${activeModalData?.title}`}
            />
          </div>

          <p className="leading-5 text-justify">
            {htmlParser(activeModalData?.details || "")}
          </p>

          <h3 className="text-lg font-semibold mt-3">Tools :</h3>

          <div className="[&>*]:mt-2">
            {activeModalData?.frameworks.map((v) => (
              <AtomTag size="L" variant="primary" className="mx-2" key={v}>
                {v}
              </AtomTag>
            ))}
            {activeModalData?.libraries.map((v) => (
              <AtomTag size="L" variant="primary" className="mx-2" key={v}>
                {v}
              </AtomTag>
            ))}
          </div>
        </AtomModal>
      </main>
    </Layout>
  );
}
