module.exports = async (headerMap, answers) => {
	// filter out invalid answers
	const filteredAnswers = answers.filter((answer) => {
		const age = parseInt(answer[1], 10);
		return (answer[3] === 'Österreich' || answer[3] === '') && !Number.isNaN(age) && age < 100;
	});

	console.log(`Total Answers: ${filteredAnswers.length}`);

	// Wie oft verwenden Sie soziale Medien?
	(() => {
		console.log('');
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
	})();

	// Auf welchen sozialen Plattformen besitzen Sie einen Account ?
	(() => {
		console.log('');
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
	})();

	// Wie erfahren Sie von neuen Veranstaltungen?
	(() => {
		console.log('');
		console.log(headerMap[8]);

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
			const a = answer[8].toLowerCase().split(';');
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
	})();

	// Wie informieren Sie sich über anstehende Veranstaltungen?
	(() => {
		console.log('');
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
	})();
};
