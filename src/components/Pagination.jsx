

import './styles/Pagination.css'

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    const handlePrevClick = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };
  
    const handleNextClick = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    }; 

    if (totalPages <= 1) {
        return null;
    }
  
    return (
      <div className="pagination">
        <button onClick={handlePrevClick} disabled={currentPage === 1} className='button_1'>Previous</button>
        <span className='counter'>{currentPage} of {totalPages}</span>
        <button onClick={handleNextClick} disabled={currentPage === totalPages} className='button_2'>Next</button>
      </div>
    );
  }
  
  export default Pagination;