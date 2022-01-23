const Alter = require('./questions/alter');
const Auf_welchen_besitzen_sie = require('./questions/auf_welchen_besitzen_sie');
const Finden_sie_es_wichtig = require('./questions/finden_sie_es_wichtig');
const Geschlecht = require('./questions/geschlecht');
const Teilen_sie_veranstaltungen = require('./questions/teilen_sie_veranstaltungen');
const Wie_oft_verwenden_sie = require('./questions/wie_oft_verwenden_sie');
const Wieso_verwenden_sie = require('./questions/wieso_verwenden_sie');
const Wie_oft_nehmen_sie_teil = require('./questions/wie_oft_nehmen_sie_teil');
const Wie_erfahren_sie_neue = require('./questions/wie_erfahren_sie_neue');
const Wie_informieren_sie_sich = require('./questions/wie_informieren_sie_sich');
const Wie_erwerben_sie = require('./questions/wie_erwerben_sie');

module.exports = async (headerMap, answers) => {
	// filter out invalid answers
	const filteredAnswers = answers.filter((answer) => {
		const age = parseInt(answer[1], 10);
		return (answer[3] === 'Österreich' || answer[3] === '') && !Number.isNaN(age) && age < 100;
	});

	const questions = [
		Alter,
		Geschlecht,
		Wie_oft_verwenden_sie,
		Auf_welchen_besitzen_sie,
		Wieso_verwenden_sie,
		Wie_oft_nehmen_sie_teil,
		Wie_erfahren_sie_neue,
		Wie_informieren_sie_sich,
		Finden_sie_es_wichtig,
		Teilen_sie_veranstaltungen,
		Wie_erwerben_sie
	];

	console.log('Total Questions:', questions.length);
	console.log('Total Answers:', filteredAnswers.length);

	// execute all questions for data analysis
	for (let i = 0; i < questions.length; i++) {
		console.log('');
		questions[i](headerMap, filteredAnswers);
	}

};
