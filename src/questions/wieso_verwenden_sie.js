module.exports = (headerMap, filteredAnswers) => {
    console.log(headerMap[6]);
		const b = {};
		filteredAnswers.forEach((allanswers) => {
			const as = allanswers[6].split(';');
			as.forEach((a) => {
				if (a in b) {
					b[a]++;
				} else {
					b[a] = 1;
				}
			});
		});
		console.log(b);
}