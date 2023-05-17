import React from 'react';
import s from './pagination.module.scss'
import ReactPaginate from "react-paginate";

type PaginationProps = {
  onChangePage:(page:number) => void,
  currentPage:number,
}

const Pagination:React.FC<PaginationProps> = ({onChangePage,currentPage}) => {

    return (
        <ReactPaginate
        className={s.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={e => onChangePage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={2}
        forcePage={currentPage -1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    );
};
export default Pagination;