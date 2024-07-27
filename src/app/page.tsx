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
import { useRouter } from "next/navigation";

export default function Home() {
  const Router = useRouter();

  const [activeFilter, setActiveFilter] = useState([""]);

  const [activeModal, setActiveModal] = useState<number>(0);

  //@ts-ignore
  const filteredData: projectInterface[] =
    activeFilter.length > 0
      ? _.filter(data.projects, (obj: projectInterface) =>
          _.some(activeFilter, (text) => {
            return obj.frameworks.includes(text);
          })
        )
      : data.projects;

  const activeModalData = data.projects[activeModal - 1];

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
    Router.push("/projects");

    handleShowAnimation();
  }, [activeFilter]);

  return (
    <Layout>
      <main className="p-5">
        <div className="mb-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">PROJECT&apos;S</h1>

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
                  alt="Project Image"
                  className="h-1/2 w-full object-cover object center"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ghX8TQbN341sDKxu87RODQH2F7YLwm3UXw&s"
                />
                <div className="p-3">
                  <h2 className="font-semibold text-lg mb-1 line-clamp-1">
                    {v.title}
                  </h2>
                  <p className="line-clamp-3 leading-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Libero, cupiditate? Laborum provident libero expedita,
                    officia natus pariatur officiis at quae corporis autem, quod
                    veritatis dolorum obcaecati blanditiis? Aut, molestiae
                    possimus!
                  </p>
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
        >
          <img
            alt="Project Image"
            className="h-[250px] mb-5 rounded-md w-full object-cover object center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ghX8TQbN341sDKxu87RODQH2F7YLwm3UXw&s"
          />

          <h2 className="mb-2 font-bold text-2xl">{activeModalData?.title}</h2>

          <p className="leading-5">
            {htmlParser(activeModalData?.details || "")}
          </p>

          {activeModalData?.libraries && (
            <>
              <h3 className="text-lg font-semibold mt-3">Library :</h3>

              <div className="[&>*:first-child]:!ml-0">
                {activeModalData?.libraries.map((v) => (
                  <AtomTag size="L" variant="primary" className="mx-2" key={v}>
                    {v}
                  </AtomTag>
                ))}
              </div>
            </>
          )}

          <div className="flex justify-end mt-5">
            {activeModalData?.repository && (
              <AtomButton size="L" variant="secondary" className="mx-2">
                Show Repository
              </AtomButton>
            )}
            {activeModalData?.url && (
              <AtomButton size="L" className="mx-2">
                Visit Website
              </AtomButton>
            )}
          </div>
        </AtomModal>
      </main>
    </Layout>
  );
}
