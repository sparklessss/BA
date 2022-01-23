module.exports = (headerMap, filteredAnswers) => {
    let females = 0,
        males = 0;
    filteredAnswers.forEach((answer) => {
        if (answer[2] === 'Weiblich') {
            females++;
        } else {
            males++;
        }
    });

    console.log(headerMap[2]);
    console.log({
        males: (males / filteredAnswers.length) * 100,
        females: (females / filteredAnswers.length) * 100,
    });
}