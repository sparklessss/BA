module.exports = (headerMap, filteredAnswers) => {
    console.log(headerMap[12]);
    const b = {};
    filteredAnswers.forEach((a) => {
        a[12].split(';').forEach((aa) => {
            if (aa in b) {
                b[aa]++;
            } else {
                b[aa] = 1;
            }
        });
    });
    console.log(b);
}