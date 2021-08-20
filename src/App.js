import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle";
import Search from "./components/search";
import Results, { Result } from "./components/results";
import Pagination from "./components/pagination";
import search from "./api/search";
import { defaultTheme } from "./theme";

const DEFAULT_RECORDS_PER_PAGE = 10;

const App = () => {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    async function searchApi() {
      try {
        const data = await search(query, {
            pageSize: DEFAULT_RECORDS_PER_PAGE,
            page: currentPage,
        });

        setResults(data);
      }
      catch (e) {
        setError(e.message);
      }
    }

    if (query) {
      searchApi();
    }
  }, [query, currentPage])

  const renderResults = () => {

    if(error) {
      return <p>{error}</p>
    }

    if(!results) {
      return null;
    }
    
    const totalPages = Math.round(results.total_count / DEFAULT_RECORDS_PER_PAGE);

    return (
      <>
      <Pagination totalPages={totalPages} currentPage={currentPage} pageChanged={page => setCurrentPage(page)}/>
        <Results>
          {results.items.map(result => <Result id={result.id} key={result.id} />)}
        </Results>        
      </>
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <header>
        <h1>Github User Search</h1>        
      </header>
      <main>
        <Search labelText="Search Users" placeHolderText="Enter search term" buttonText="Search" onSubmit={query => setQuery(query)} />
        {renderResults()}
      </main>
      </ThemeProvider>
  );
}

export default App;
