const Form = ({ searchData, handleFormSearch }) => {
  return (
    <form className="search-box" id="form">
      <button onClick={(e) => e.preventDefault()} className="btn-search">
        <i className="fas fa-search"></i>
      </button>
      <input
        value={searchData}
        onChange={handleFormSearch}
        type="text"
        id="search"
        className="input-search"
        placeholder="Type to Search..."
        autoComplete="off"
      />
    </form>
  );
};

export default Form;
