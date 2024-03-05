import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
import './pagination.css'

const HardcodedPagination = ({ setCurrentPage, currentPage, totalPages }) => {
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 2,
      },
    },
  };

  // Dummy data for pagination
  const dummyPages = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <motion.div variants={paginationVariants} initial="hidden" animate="visible">
      <div className="flex mt-8 mb-4">
        {currentPage !== 0 && (
          <span
            className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md mr-4 cursor-pointer"
            onClick={() => handlePageClick(currentPage - 1)}
          >
            <BsChevronLeft />
          </span>
        )}

        {dummyPages.map((page) => (
          <span
            key={page}
            className={`block border border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4 cursor-pointer ${currentPage === page - 1 ? "text-white" : ""
              }`}
            onClick={() => handlePageClick(page - 1)}
          >
            {page}
          </span>
        ))}

        {currentPage !== totalPages - 1 && (
          <span
            className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md cursor-pointer"
            onClick={() => handlePageClick(currentPage + 1)}
          >
            <BsChevronRight />
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default HardcodedPagination;
