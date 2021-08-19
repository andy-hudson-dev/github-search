function getPages( totalPages, currentPage = 1, maxButtons = 5 ) {
    const range = totalPages < maxButtons ? totalPages : maxButtons;
    
    const surroundingSpan = Math.floor(range / 2);
    const calculatedStartPage = currentPage - surroundingSpan;
    const calculatedEndPage = currentPage + surroundingSpan;

    let startPage = calculatedStartPage <= 0 ? 1 : calculatedStartPage;
    if(calculatedEndPage > totalPages)
    {
        startPage = calculatedEndPage - (range + 1);
    }

    const pages = [];
    for(let page = startPage; page < startPage + range; page++) {
        pages.push(page);
    }

    return pages;
};

export default getPages;