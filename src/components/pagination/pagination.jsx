import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
import "./pagination.css";

const PaginationButtons = ({ setCurrentPage, currentPage, totalPages }) => {
  // State for animation
  const [isAnimating, setIsAnimating] = useState(false);
  

  const handlePageClick = (page) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsAnimating(false);
    }, 300);
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

  // Generate page numbers starting from 1
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <motion.div
      variants={paginationVariants}
      initial="hidden"
      animate="visible"
      className={`pagination ${isAnimating ? "animating" : ""}`}
    >
      <div className="flex mt-8 mb-4">
        {currentPage !== 1 && ( // Changed condition to check currentPage !== 1
          <span
            className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md mr-4 cursor-pointer disabled"
            onClick={() => handlePageClick(currentPage - 1)}
          >
            <BsChevronLeft />
          </span>
        )}

        {pageNumbers.map((page) => (
          <span
          key={page}
          className={`block border border-solid border-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4 cursor-pointer ${
            page === currentPage ? "normal" : ""
          }`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </span>
        ))}

        {currentPage !== totalPages && (
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

export default PaginationButtons;