import React from "react";
import PropTypes from "prop-types";

import ResultsStyled from "./Results.styled";

const Results = ({children}) =>  {

    return (
        <ResultsStyled>
            <ul>{children}</ul>
        </ResultsStyled>
    )
}

Results.propTypes = {

}

export default Results
