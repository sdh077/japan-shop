'use client'
import usePagination from '@/components/usePagination';
import { useState, useEffect } from 'react';
export default function Pagination({ count }: { count: number }) {
    'use client'
    const itemsPerPage = 5;
    const { currentPage, totalPages, nextPage, prevPage, goToPage } = usePagination(count, 20);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <div>
            <div>
                <button onClick={prevPage} disabled={currentPage === 1}>
                    Previous Page
                </button>
                <span> Page {currentPage} of {totalPages} </span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>
                    Next Page
                </button>
                <input
                    type="number"
                    value={currentPage}
                    onChange={(e) => goToPage(Number(e.target.value))}
                    min="1"
                    max={totalPages}
                />
                <button onClick={() => goToPage(currentPage)}>Go</button>
            </div>
        </div>
    );
};

