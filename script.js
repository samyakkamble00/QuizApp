const quiz = [

	{
		question: "What is the capital of India?",
		ans1text: "a) Mumbai",
		ans2text: "b) New Delhi",
		ans3text: "c) Kolkata",
		ans4text: "d) Bangalore",
		answer: "b) New Delhi",
	},
	{
		question: "Which river is known as the Ganges in India?",
		ans1text: "a) Brahmaputra",
		ans2text: "b) Yamuna",
		ans3text: "c) Indus",
		ans4text: "d) Ganga",
		answers: "d) Ganga",
	}, {
		question: "Who was the first Prime Minister of India?",
		ans1text: "a) Mahatma Gandhi",
		ans2text: "b) Jawaharlal Nehru",
		ans3text: "c) Sardar Patel",
		ans4text: "d) Subhas Chandra Bose",
		answers: "b) Jawaharlal Nehru",
	}, {
		question: "Which iconic monument is often referred to as the Symbol of Love in India ? ",
		ans1text: "a) Qutub Minar",
		ans2text: "b) Red Fort",
		ans3text: "c) India Gate",
		ans4text: "d) Taj Mahal",
		answers: "d) Taj Mahal",
	}, {
		question: "What is the national emblem of India?",
		ans1text: "a) Lotus",
		ans2text: "b) Ashoka Chakra",
		ans3text: "c) Tricolor",
		ans4text: "d) Lion Capital of Ashoka",
		answers: "d) Lion Capital of Ashoka",
	}, {
		question: "India gained independence from British rule in which year?",
		ans1text: "a) 1942",
		ans2text: "b) 1945",
		ans3text: "c) 1947",
		ans4text: "d) 1950",
		answers: "c) 1947",
	}, {
		question: "Which state in India is known as the Land of Five Rivers?",
		ans1text: "a) Punjab",
		ans2text: "b) Haryana",
		ans3text: "c) Uttar Pradesh",
		ans4text: "d) Bihar",
		answers: "a) Punjab",
	}, {
		question: "Who is known as the Father of the Indian Constitution",
		ans1text: "a) Bhagat Singh",
		ans2text: "b) Jawaharlal Nehru",
		ans3text: "c) B.R. Ambedkar",
		ans4text: 'd) Sardar Patel',
		answers: "c) B.R.Ambedkar",
	}, {
		question: "Which Indian festival is known as the Festival of Lights?",
		ans1text: "a) Holi",
		ans2text: "b) Diwali",
		ans3text: "c) Eid",
		ans4text: 'd) Christmas',
		answers: "b) Diwali",
	}, {
		question: "Which famous Indian cricketer is often referred to as the Little Master?",
		ans1text: 'a) Sachin Tendulkar',
		ans2text: 'b) Virat Kohli',
		ans3text: "c) Rahul Dravid",
		ans4text: "d) Virender Sehwag",
		answers: "a) Sachin Tendulkar",
	}
]
const question = document.getElementById("quiz-question");
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;



question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
	const checkedAns = document.querySelector('input[type="radio"]:checked')

	if (checkedAns === null) {
		alert("Please select an answer");
	} else {
		if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
			score++;
		}

		currentQuestion++;
		if (currentQuestion < quiz.length) {
			question.textContent = quiz[currentQuestion].question;
			option_a.textContent = quiz[currentQuestion].ans1text;
			option_b.textContent = quiz[currentQuestion].ans2text;
			option_c.textContent = quiz[currentQuestion].ans3text;
			option_d.textContent = quiz[currentQuestion].ans4text;
			checkedAns.checked = false;
		} else {
			alert("Your score is " + score + " out of " + quiz.length);
			location.reload();
		}

	}
});