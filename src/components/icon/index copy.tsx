import React, { useState } from "react";
import "./style.css";
import Button from "../button";
import IconChevronRight from "../icon/ChevronRight";
import IconChevronRightDouble from "../icon/ChevronRightDouble";
import IconChevronLeft from "../icon/ChevronLeft";

function Pagination({ showDetail = true, lastIcon, nextIcon }: any) {
  const [page, setPage] = useState(1);

  return (
    <div className="bs_pagination">
      <div className="bs_pagination--pages">
        <Button>&lt;&lt;</Button>
        <Button variant="secondary">
          <IconChevronLeft />
        </Button>

        <Button variant="secondary">{nextIcon || <IconChevronRight />}</Button>
        <Button variant="secondary">
          {lastIcon || <IconChevronRightDouble />}
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
