"use client";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-10">


      
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-all"
      >
        Prev
      </button>

      

      {[...Array(totalPages)].map((_, i) => {
        const pageNumber = i + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`px-4 py-2 rounded-lg transition-all ${
              currentPage === pageNumber
                ? "bg-[#00d8d6] text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-300"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-all"
      >
        Next
      </button>
    </div>
  );
}