module.exports = (headerMap, filteredAnswers) => {
    const ages = filteredAnswers.map((answer) => parseInt(answer[1], 10));
    const minAge = Math.min(...ages);
    const maxAge = Math.max(...ages);
    const avg = ages.reduce((a, b) => a + b, 0) / ages.length;
    console.log(headerMap[1]);
    console.log({ minAge, maxAge, avg });
}