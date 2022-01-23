module.exports = (headerMap, filteredAnswers) => {
    console.log(headerMap[10]);
    let ja = 0,
        nein = 0;
    filteredAnswers.forEach((a) => {
    if (a[10] === 'Ja') {
        ja++;
    } else {
        nein++;
        }
    });
    console.log({ ja, nein });
}