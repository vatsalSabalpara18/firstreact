import React from "react";

export default function Pagination({    
    currentPage,
    productsPerPage,
    handlePagination,
    handleNextPage,
    handlePrevousPage,
}) {
    const paginationNumbers = [];

    for (let i = 1; i <= productsPerPage; i++) {
        paginationNumbers.push(i);
    }
    return (
        <div className="product-pagination">
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <button onClick={handlePrevousPage} disabled={currentPage <= 1}>Prevous Page</button>
                {paginationNumbers.map((pageNo) => {
                    return <button key={pageNo} className={currentPage === pageNo ? 'active' : ''} onClick={() => handlePagination(pageNo)}>{pageNo}</button>;
                })}
                <button onClick={handleNextPage} disabled={currentPage >= productsPerPage}>Next Page</button>
            </div>
        </div>
    );
}
