module.exports = (headerMap, filteredAnswers) => {
    console.log(headerMap[9]);

		const total = {
			mundpropaganda: 0,
			'soziale medien': 0,
			eventkalender: 0,
			printmedien: 0,
			mail: 0,
			'radio und fernsehen': 0,
			website: 0,
			andere: 0,
		};

		for (const answer of filteredAnswers) {
			const a = answer[9].toLowerCase().split(';');
			for (const source of a) {
				const totalKey = Object.keys(total).filter(
					(k) => source.toLowerCase().indexOf(k) > -1
				);
				if (totalKey.length > 0) {
					total[totalKey]++;
				} else {
					total.andere++;
				}
			}
		}

		const resultSum = Object.values(total).reduce((a, b) => a + b, 0);

		const result = Object.entries(total).map(([source, amount]) => {
			return {
				title: source,
				total: amount,
				percent: `${Math.round((amount / resultSum) * 100)}%`,
			};
		});

		console.log(result);
}