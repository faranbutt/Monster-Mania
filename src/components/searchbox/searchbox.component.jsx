const SearchBox = ({ className, onChangeHandler }) => {
  return (
    <div className="flex justify-center">
      <input
        className={className}
        type="search"
        placeholder="search-monsters"
        onChange={onChangeHandler}
      />
    </div>
  );
};
export default SearchBox;
