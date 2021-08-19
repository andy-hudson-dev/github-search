import React from "react";
import PropTypes from "prop-types";

import PaginationStyled from "./Pagination.styled";
import getPages from "./getPages";

const FIRST = "|<";
const LAST = ">|";
const PREV = "<"
const NEXT = ">";

const Pagination = ({ totalPages, currentPage, pageChanged }) => {

    const isLast = currentPage === totalPages;

    const renderPageButtons = () => {
        const pages = getPages(totalPages, currentPage);

        return pages.map(page => {
            const className= page===currentPage ? "pagination pagination--current" : "pagination";
            
            return <button key={page} className={className} aria-label={`Go to page ${page}`} onClick={() => pageChanged(page)}>{page}</button>;
        })
    }

    return (
        <PaginationStyled>
            <button className="pagination" disabled={currentPage === 1} aria-label="Go to first page" onClick={() => pageChanged(1)}>{FIRST}</button>
            <button className="pagination" disabled={currentPage === 1} aria-label="Go to previous page" onClick={() => pageChanged(currentPage - 1)}>{PREV}</button>
            {renderPageButtons()}
            <button className="pagination" disabled={isLast} aria-label="Go to next page" onClick={() => pageChanged(currentPage + 1)}>{NEXT}</button>
            <button className="pagination" disabled={isLast} aria-label="Go to last page" onClick={() => pageChanged(totalPages)}>{LAST}</button>
        </PaginationStyled>
    )
}

Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    pageChanged: PropTypes.func.isRequired,
}

export default Pagination
