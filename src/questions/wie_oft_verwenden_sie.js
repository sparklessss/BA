module.exports = (headerMap, filteredAnswers) => {
    console.log(headerMap[4]);
    const total = {
        'mehrmals täglich': 0,
        täglich: 0,
        wöchentlich: 0,
        monatlich: 0,
        nie: 0,
    };

    for (const answer of filteredAnswers) {
        total[answer[4]]++;
    }

    const result = Object.entries(total).map(([key, value]) => {
        return {
            title: key,
            total: value,
            percent: `${Math.round((value / filteredAnswers.length) * 100)}%`,
        };
    });

    console.log(result);
}