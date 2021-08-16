import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle";
import Search from "./components/search";
import Results, { Result } from "./components/results";
import search from "./api/search";
import { defaultTheme } from "./theme";

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
