import { useState, useEffect } from "react";
import "./App.css";
import useDogList from "./hooks/useDogList";
import handleSearch from "./event-handlers/handle-search";
import usePageScroll from "./hooks/usePageScroll";
import useDogBreed from "./hooks/useDogBreed";
import Grid from "./components/Grid";
function App() {
  const [activeBreed, setActiveBreed] = useState("pug");
  const [data, error] = useDogList();
  const [loadMore, setLoadMore] = useState(0);
  const dogBreed = useDogBreed(activeBreed);
  const [showBreedList, setShowBreedList] = useState(false);
  const [filteredBreedList, setFilteredBreedList] = useState([]);
  const isScrollingDown = usePageScroll();
  useEffect(() => {
    if (!data) return;
    setFilteredBreedList((filteredBreedList) => [
      ...filteredBreedList,
      ...data,
    ]);
  }, [data]);

  return (
    <div className="page">
      <header className={`page__header ${isScrollingDown && "hide"}`}>
        <div className="header__search-wrapper">
          <div className="header__search">
            <input
              onChange={handleSearch(setFilteredBreedList, data)}
              onFocus={() => setShowBreedList(true)}
              onBlur={() => {
                setTimeout(() => {
                  setShowBreedList(false);
                }, 100);
              }}
              className="search__input"
              type="text"
              placeholder={activeBreed}
              spellCheck={false}
            />
            <div className={`search__list ${showBreedList && "show"}`}>
              {filteredBreedList?.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      setActiveBreed(item);
                      setShowBreedList(false);
                    }}
                    className="list__item"
                    key={`${item}-${index}`}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </header>
      <main className="page__main">
        <Grid data={dogBreed} />
      </main>
      <footer className="page__footer">This is a Footer</footer>
    </div>
  );
}

export default App;