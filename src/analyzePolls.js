module.exports = async (headerMap, answers) => {
	let amount = 0;

	// filter out invalid answers
	const filteredAnswers = answers.filter((answer) => {
		const age = parseInt(answer[1], 10);
		return (answer[3] === 'Österreich' || answer[3] === '') && !Number.isNaN(age) && age < 100;
	});

	console.log(`Total Answers: ${filteredAnswers.length}`);

	// Wieso verwenden Sie soziale Netzwerke?
	(() => {
		amount++;
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
	})();

	// Wie oft nehmen Sie an öffentlichen Clubveranstaltungen teil?
	(() => {
		amount++;
		console.log('');
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
	})();

	// Wie erwerben Sie ihre Tickets für Events?
	(() => {
		amount++;
		console.log('');
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
	})();

	// Finden Sie es wichtig, dass Veranstalter / Clubs auf sozialen Plattformen vertreten sind?
	(() => {
		amount++;
		console.log('');
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
	})();

	// Teilen Sie Veranstaltungen auf ihren sozialen Netzwerk?
	(() => {
		amount++;
		console.log('');
		console.log(headerMap[10]);
		let ja = 0,
			nein = 0;
		answers.forEach((a) => {
			if (a[10] === 'Ja') {
				ja++;
			} else {
				nein++;
			}
		});
		console.log({ ja, nein });
	})();

	// Geschlecht
	(() => {
		amount++;
		console.log('');
		let females = 0,
			males = 0;
		filteredAnswers.forEach((answer) => {
			if (answer[2] === 'Weiblich') {
				females++;
			} else {
				males++;
			}
		});

		console.log(headerMap[2]);
		console.log({
			males: (males / filteredAnswers.length) * 100,
			females: (females / filteredAnswers.length) * 100,
		});
	})();

	// Alter
	(() => {
		amount++;
		console.log('');
		const ages = filteredAnswers.map((answer) => parseInt(answer[1], 10));
		const minAge = Math.min(...ages);
		const maxAge = Math.max(...ages);
		const avg = ages.reduce((a, b) => a + b, 0) / ages.length;
		console.log(headerMap[1]);
		console.log({ minAge, maxAge, avg });
	})();

	// Wie oft verwenden Sie soziale Medien?
	(() => {
		amount++;
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
		amount++;
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
		amount++;
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
		amount++;
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

	console.log('Total Polls: ', amount);
};
