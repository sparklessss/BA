const path = require('path');
const fs = require('fs').promises;
const analyzePolls = require('./analyzePolls.js');

(async () => {
	try {
		// get file path to poll data
		const pathToCSV = path.join(__dirname, '../input/Umfrage.csv');

		// read file content
		const content = await fs.readFile(pathToCSV, 'utf-8');

		// get each line as string in an array
		const lines = content.split('\n');

		// array will contain each poll
		const answers = Array.from({ length: lines.length - 1 }, () => []);

		// remove first line and store as header array & filter out empty values
		const headerMap = lines
			.shift()
			.split('"')
			.map((header) => header.trim())
			.filter((header) => {
				return header !== '' && header !== ',';
			});

		// merge all line array elements into one string, seperated by comma
		const lineString = lines.join(',');

		// find all strings in between quotes and optional commas
		const regex = /,?"(.*?"),?/gi;

		// get all regex matches
		const matches = lineString.matchAll(regex);

		// loop through regex matches and assign each row to a poll object
		let idx = 0;
		let idxPoll = 0;
		for (const [match] of matches) {
			// store answer in correct poll object
			const answer = match.replaceAll(',', '').replaceAll('"', '').trim();

			answers[idxPoll].push(answer);

			// handle header map logic
			idx++;
			if (idx % headerMap.length === 0) {
				idx = 0;
				idxPoll++;
			}
		}

		await analyzePolls(headerMap, answers);
	} catch (err) {
		console.error(err);
	}
})();
