import getPages from "../getPages";

test.each`
    totalPages | currentPage  | maxButtons   | expected
    ${3}       | ${undefined} | ${undefined} | ${[1, 2, 3]}
    ${12}      | ${undefined} | ${undefined} | ${[1, 2, 3, 4, 5]}
    ${12}      | ${4}         | ${undefined} | ${[2, 3, 4, 5, 6]}
    ${3}       | ${1}         | ${5}         | ${[1, 2, 3]}
    ${5}       | ${1}         | ${5}         | ${[1, 2, 3, 4, 5]}
    ${5}       | ${3}         | ${5}         | ${[1, 2, 3, 4, 5]}
    ${10}      | ${1}         | ${5}         | ${[1, 2, 3, 4, 5]}
    ${17}      | ${8}         | ${5}         | ${[6, 7, 8, 9, 10]}
    ${99}      | ${76}        | ${5}         | ${[74, 75, 76, 77, 78]}
    ${999}     | ${999}       | ${5}         | ${[995, 996, 997, 998, 999]}
    ${999}     | ${997}       | ${5}         | ${[995, 996, 997, 998, 999]}
    ${10}      | ${5}         | ${10}        | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
    ${28}      | ${15}        | ${7}         | ${[12, 13, 14, 15, 16, 17, 18]}
`(
    "returns $expected when current page is $currentPage, total pages is $totalPages and maxButtons is $maxButtons",
    ({ totalPages, currentPage, maxButtons, expected }) => {
        const actual = getPages(
            totalPages,
            currentPage,
            maxButtons,
        );

        expect(actual).toEqual(expected);
    },
);