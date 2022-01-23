module.exports = (headerMap, filteredAnswers) => {
    console.log(headerMap[11]);
    let ja = 0,
        nein = 0;
    filteredAnswers.forEach((answer) => {
        if (answer[11] === 'Ja') {
            ja++;
        } else if (answer[11] === 'Nein') {
            nein++;
        }
    });
    console.log({ ja, nein });
}