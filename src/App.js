import React, { useEffect, useState } from "react";

import Search from "./components/search";
import Results, { Result } from "./components/results";
import search from "./api/search";
import './App.css';

const DEFAULT_RECORDS_PER_PAGE = 20;

const App = () => {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  useEffect(() => {
    async function searchApi() {
      const data = await search(query, {
          pageSize: DEFAULT_RECORDS_PER_PAGE,
      });

      setResults(data);
    }

    if (query) {
      searchApi();
    }
  }, [query])

  const renderResults = () => {
    if(!results) {
      return null;
    }
    
    return (
      <Results>
        {results.items.map( result => <Result id={result.id} key={result.id} />)}
      </Results>
    );
  }

  return (
    <div className="">
      <header className="">
        <Search labelText="Search Github Users" placeHolderText="Enter search term" buttonText="Search" onSubmit={query => setQuery(query)} />
      </header>
      <main>
        {renderResults()}
      </main>
    </div>
  );
}

export default App;
