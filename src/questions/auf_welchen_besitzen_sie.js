module.exports = (headerMap, filteredAnswers) => {
    console.log(headerMap[5]);
    const total = {
        facebook: [],
        instagram: [],
        twitter: [],
        snapchat: [],
        youtube: [],
        other: [],
    };

    for (const answer of filteredAnswers) {
        const a = answer[5].toLowerCase().split(';');
        const age = parseInt(answer[1], 10);

        for (const platform of a) {
            if (Object.keys(total).includes(platform)) {
                total[platform].push(age);
            } else {
                total.other.push(age);
            }
        }
    }

    const result = Object.entries(total).map(([platform, ages]) => {
        const average = ages.reduce((a, b) => a + b, 0) / ages.length;

        return {
            title: platform,
            total: ages.length,
            averageAge: Math.round(average),
        };
    });

    console.log(result);
};