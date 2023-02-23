import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/searchbox/searchbox.component";

const App = () => {
  const [userVal, setUserVal] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [stringfield, setStringfield] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(userVal);
    });
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, userVal]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((user) => setMonsters(user));
  }, []);
  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setUserVal(searchString);
  };
  return (
    <div>
      <h1
        className="flex justify-center pt-20 pb-20 text-7xl"
        style={{ fontFamily: "papa", fontWeight: "bold" }}
      >
        Monster Mania
      </h1>
      <SearchBox
        className="search-box p-5 mt-5 mb-10 text-center text-2xl rounded-xl border-4 border-green-500"
        onChangeHandler={onSearchChange}
      />
      <CardList monster={filteredMonsters} />
    </div>
  );
};
export default App;
