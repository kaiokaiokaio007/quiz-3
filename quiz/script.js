const questions = [
    {
        question: "Quem tem mais títulos mundiais?",
        options: ["Palmeiras", "Corinthians", "Ferroviária", "15 de Piracicaba"],
        answer: "Corinthians"
    },
    {
        question: "Qual é o time com mais títulos da Premier League?",
        options: ["Manchester United", "Liverpool", "Chelsea", "Arsenal"],
        answer: "Manchester United"
    },
    {
        question: "Qual seleção venceu a Copa do Mundo de 2018?",
        options: ["Alemanha", "França", "Brasil", "Argentina"],
        answer: "França"
    },
    {
        question: "Quem é o maior artilheiro da história da Liga dos Campeões da UEFA?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Raúl", "Robert Lewandowski"],
        answer: "Cristiano Ronaldo"
    },
    {
        question: "Qual é o clube mais antigo da Inglaterra?",
        options: ["Nottingham Forest", "Sheffield United", "Manchester United", "Arsenal"],
        answer: "Sheffield United"
    },
    {
        question: "Qual país sediou a Copa do Mundo de 2014?",
        options: ["Brasil", "Argentina", "Alemanha", "França"],
        answer: "Brasil"
    },
    {
        question: "Quem venceu a Copa Libertadores em 2023?",
        options: ["Flamengo", "River Plate", "Boca Juniors", "Palmeiras"],
        answer: "Flamengo"
    },
    {
        question: "Qual time italiano é conhecido como 'A Vecchia Signora'?",
        options: ["AC Milan", "Inter de Milão", "Juventus", "Roma"],
        answer: "Juventus"
    },
    {
        question: "Quem é o jogador mais caro da história do futebol?",
        options: ["Neymar", "Kylian Mbappé", "Cristiano Ronaldo", "Lionel Messi"],
        answer: "Neymar"
    },
    {
        question: "Qual seleção venceu a Copa do Mundo de 1998?",
        options: ["França", "Brasil", "Alemanha", "Argentina"],
        answer: "França"
    },
    {
        question: "Quem é conhecido como o 'Rei do Futebol'?",
        options: ["Pelé", "Maradona", "Cristiano Ronaldo", "Lionel Messi"],
        answer: "Pelé"
    },
    {
        question: "Qual é o estádio mais antigo da Europa?",
        options: ["Wembley", "Old Trafford", "San Siro", "Stamford Bridge"],
        answer: "San Siro"
    },
    {
        question: "Qual clube espanhol tem a maior quantidade de títulos da La Liga?",
        options: ["Barcelona", "Real Madrid", "Atlético de Madrid", "Sevilha"],
        answer: "Real Madrid"
    },
    {
        question: "Qual jogador ganhou o prêmio Ballon d'Or mais vezes?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Johan Cruyff", "Michel Platini"],
        answer: "Lionel Messi"
    },
    {
        question: "Qual é o time mais vitorioso da história do Campeonato Brasileiro?",
        options: ["Palmeiras", "Flamengo", "São Paulo", "Santos"],
        answer: "Palmeiras"
    },
    {
        question: "Quem é o maior artilheiro da história da Copa do Mundo?",
        options: ["Miroslav Klose", "Pelé", "Cristiano Ronaldo", "Lionel Messi"],
        answer: "Miroslav Klose"
    },
    {
        question: "Qual jogador brasileiro foi o artilheiro da Copa do Mundo de 2002?",
        options: ["Ronaldo", "Ronaldinho", "Rivaldo", "Pelé"],
        answer: "Ronaldo"
    },
    {
        question: "Qual é o nome do campeonato de clubes mais importante da Europa?",
        options: ["Copa dos Campeões da Europa", "Premier League", "La Liga", "Serie A"],
        answer: "Copa dos Campeões da Europa"
    },
    {
        question: "Qual é o maior rival do Barcelona na Espanha?",
        options: ["Real Madrid", "Atlético de Madrid", "Sevilha", "Valencia"],
        answer: "Real Madrid"
    },
    {
        question: "Qual é a seleção com mais títulos da Copa América?",
        options: ["Brasil", "Argentina", "Uruguai", "Chile"],
        answer: "Uruguai"
    },
    {
        question: "Qual foi o resultado do famoso jogo entre Brasil e Alemanha na Copa do Mundo de 2014?",
        options: ["3-0 para o Brasil", "1-0 para o Brasil", "7-1 para a Alemanha", "5-2 para a Alemanha"],
        answer: "7-1 para a Alemanha"
    },
    {
        question: "Qual é o time mais vitorioso da história da Copa do Mundo?",
        options: ["Brasil", "Alemanha", "Itália", "Argentina"],
        answer: "Brasil"
    },
    {
        question: "Qual é o estádio mais famoso da Argentina?",
        options: ["Estádio Monumental", "Estádio do Boca Juniors", "Estádio do Racing Club", "Estádio do Independiente"],
        answer: "Estádio Monumental"
    },
    {
        question: "Qual jogador brasileiro tem mais gols pela Seleção Brasileira?",
        options: ["Pelé", "Neymar", "Ronaldo", "Romário"],
        answer: "Neymar"
    },
    {
        question: "Qual time inglês é conhecido como 'The Red Devils'?",
        options: ["Liverpool", "Manchester City", "Manchester United", "Chelsea"],
        answer: "Manchester United"
    },
    {
        question: "Qual país ganhou a primeira Copa do Mundo em 1930?",
        options: ["Brasil", "Argentina", "Uruguai", "Alemanha"],
        answer: "Uruguai"
    },
    {
        question: "Quem é o jogador com mais gols em uma única temporada da Premier League?",
        options: ["Mohamed Salah", "Alan Shearer", "Cristiano Ronaldo", "Harry Kane"],
        answer: "Mohamed Salah"
    },
    {
        question: "Qual é o time com mais títulos da Bundesliga?",
        options: ["Bayern de Munique", "Borussia Dortmund", "Schalke 04", "Hamburgo"],
        answer: "Bayern de Munique"
    },
    {
        question: "Quem foi o técnico que levou o Chelsea à vitória na Liga dos Campeões em 2012?",
        options: ["José Mourinho", "Antonio Conte", "Carlo Ancelotti", "Roberto Di Matteo"],
        answer: "Roberto Di Matteo"
    },
    {
        question: "Qual time tem o maior número de títulos da Copa Libertadores?",
        options: ["River Plate", "Boca Juniors", "Palmeiras", "Independiente"],
        answer: "Independiente"
    },
    {
        question: "Qual é a maior vitória em uma final de Copa do Mundo?",
        options: ["4-0", "5-0", "6-0", "7-1"],
        answer: "7-1"
    },
    {
        question: "Qual seleção ganhou a Copa do Mundo em 1966?",
        options: ["Inglaterra", "Brasil", "Alemanha", "Argentina"],
        answer: "Inglaterra"
    },
    {
        question: "Qual clube português é conhecido como 'Os Dragões'?",
        options: ["Benfica", "Sporting", "Porto", "Braga"],
        answer: "Porto"
    },
    {
        question: "Quem é o maior artilheiro da história do Barcelona?",
        options: ["Lionel Messi", "César Rodríguez", "Luis Suárez", "Ronaldinho"],
        answer: "Lionel Messi"
    },
    {
        question: "Qual jogador português venceu o Ballon d'Or em 2016?",
        options: ["Cristiano Ronaldo", "Eusébio", "Luis Figo", "Paulo Futre"],
        answer: "Cristiano Ronaldo"
    },
    {
        question: "Qual é o time mais vitorioso da história da Copa do Brasil?",
        options: ["Palmeiras", "Flamengo", "São Paulo", "Grêmio"],
        answer: "Palmeiras"
    },
    {
        question: "Qual jogador argentino é conhecido como 'El Diego'?",
        options: ["Lionel Messi", "Javier Mascherano", "Diego Maradona", "Ariel Ortega"],
        answer: "Diego Maradona"
    },
    {
        question: "Qual é o maior estádio do Brasil em capacidade?",
        options: ["Maracanã", "Mineirão", "Arena Corinthians", "Estádio Beira-Rio"],
        answer: "Maracanã"
    },
    {
        question: "Qual seleção africana chegou mais longe em uma Copa do Mundo?",
        options: ["Gana", "Camarões", "Senegal", "Nigéria"],
        answer: "Camarões"
    },
]


const correctsound = document.getElementById('correct-sound')
const incorrectsound = document.getElementById('incorrect-sound')

let currentQuestionIndex = 0;
let score = 0;

function showModal() {
    const modal = document.getElementById('modal');
    const questionElement = document.getElementById('modal-question');
    const optionsElement = document.getElementById('modal-options');
    const nextButton = document.getElementById('next-question');
    const feedbackElement = document.getElementById('feedback');

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const label = document.createElement('label');
        label.classList.add('option');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = option;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsElement.appendChild(label);
    });

    feedbackElement.textContent = ''; // Limpa o feedback anterior
    feedbackElement.classList.remove('correct', 'incorrect');
    modal.style.display = 'block';

    nextButton.onclick = () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                feedbackElement.textContent = 'Resposta correta!';
                feedbackElement.classList.add('correct');
                score++;
                correctsound.play();
            } else {
                feedbackElement.textContent = 'Resposta incorreta. A resposta correta é: ' + question.answer;
                feedbackElement.classList.add('incorrect');
                incorrectsound.play();
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(showModal, 2000); // Exibe a próxima pergunta após 2 segundos
            } else {
                document.getElementById('result').textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
                document.getElementById('result').classList.add(score === questions.length ? 'correct' : 'incorrect');
                modal.style.display = 'none';
                document.getElementById('start').style.display = 'block';
            }
        }
    };
}

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('start').style.display = 'none';
    showModal();
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = (event) => {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};