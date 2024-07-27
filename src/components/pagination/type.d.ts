import { sizeType } from "../type";

export interface PaginationInterface {
  activePage: number;
  lastIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  onChange?: (number) => any;
  onChangePerPage?: (number) => any;
  perPage?: number;
  showDetail?: boolean;
  showPerPage?: boolean;
  totalPage?: number;
  totalData?: number;
}
