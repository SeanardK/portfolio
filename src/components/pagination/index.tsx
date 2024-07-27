import React, { useState } from "react";
import { PaginationInterface } from "./type";
import "./style.css";
import Button from "../button";
import IconChevronRight from "../icon/ChevronRight";
import IconChevronRightDouble from "../icon/ChevronRightDouble";
import IconChevronLeft from "../icon/ChevronLeft";
import IconChevronLeftDouble from "../icon/ChevronLeftDouble";
import Select from "../select";

function Pagination({
  showDetail = true,
  lastIcon,
  nextIcon,
  activePage = 1,
  totalPage = 1,
  perPage = 10,
  onChangePerPage = () => {},
  onChange = () => {},
  showPerPage = true,
  totalData = 1,
}: PaginationInterface) {
  return (
    <div className="bs_pagination">
      <div className="bs_pagination--pages">
        <Button
          variant={"secondary"}
          disabled={activePage <= 1}
          onClick={() => {
            onChange(1);
          }}
        >
          <IconChevronLeftDouble />
        </Button>
        <Button
          variant="secondary"
          disabled={activePage <= 1}
          onClick={() => {
            onChange(activePage - 1);
          }}
        >
          <IconChevronLeft />
        </Button>

        {Array(totalPage)
          .fill("-")
          .map((v, i) => (
            <Button
              key={i + 1}
              variant={activePage == i + 1 ? "primary" : "transparent2"}
              onClick={() => onChange(i + 1)}
            >
              {i + 1}
            </Button>
          ))}

        <Button
          variant="secondary"
          disabled={activePage >= totalPage}
          onClick={() => {
            onChange(activePage + 1);
          }}
        >
          {nextIcon || <IconChevronRight />}
        </Button>
        <Button
          variant="secondary"
          disabled={activePage >= totalPage}
          onClick={() => {
            onChange(totalPage);
          }}
        >
          {lastIcon || <IconChevronRightDouble />}
        </Button>
      </div>

      <div className="bs_pagination--details">
        {showPerPage && (
          <Select
            className="bs_pagination--perpage"
            onChange={(e) => console.log(e)}
            value={[`${perPage}`]}
            options={[
              {
                label: "10",
                value: "10",
              },
              {
                label: "20",
                value: "20",
              },
              {
                label: "30",
                value: "30",
              },
            ]}
          />
        )}

        {showDetail && (
          <p className="bs_pagination--details--detail">
            Displaying {activePage * perPage - perPage + 1} -{" "}
            {activePage * perPage} of {totalData} records
          </p>
        )}
      </div>
    </div>
  );
}

export default Pagination;
