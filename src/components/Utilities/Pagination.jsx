const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handleGoToLastPage = () => {
    setPage(lastPage);
    scrollTop();
  };

  const handleGoToFirstPage = () => {
    setPage(1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-accent md:text-2xl text-xl">
      {page === 1 ? null : (
        <>
          <button className="hover:text-color-primary underline transition-all" onClick={handleGoToFirstPage}>
            First
          </button>
          <button className="hover:text-color-primary underline transition-all" onClick={handlePrevPage}>
            Prev
          </button>
        </>
      )}
      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <>
          <button className="hover:text-color-primary underline transition-all" onClick={handleNextPage}>
            Next
          </button>
          <button className="hover:text-color-primary underline transition-all" onClick={handleGoToLastPage}>
            Last
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
