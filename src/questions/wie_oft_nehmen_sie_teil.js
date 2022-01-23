module.exports = (headerMap, filteredAnswers) => {
    console.log(headerMap[7]);
    const b = {};
    filteredAnswers.forEach((a) => {
        const as = a[7];
        if (as in b) {
            b[as]++;
        } else {
            b[as] = 1;
        }
    });
    console.log(b);
}