const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const startBtn = document.getElementById('start-btn');

const questions = [
    "¿Cómo te sientes hoy?",
    "¿Te sientes estresado en la escuela?",
    "¿Te resulta fácil hacer amigos?",
    "¿Te gusta participar en clase?",
    "¿Tienes problemas para dormir?",
    "¿Cómo te sientes con respecto a tus calificaciones?",
    "¿Te sientes aceptado por tus compañeros?",
    "¿Tienes algún hobby o actividad que disfrutes?",
    "¿Te resulta difícil concentrarte en clase?",
    "¿Sientes apoyo por parte de tus profesores?",
    "¿Te sientes seguro en la escuela?",
    "¿Tienes buenos amigos en la escuela?",
    "¿Te sientes motivado para estudiar?",
    "¿Te llevas bien con tus padres?",
    "¿Te sientes feliz en general?",
    "¿Te preocupas mucho por tus notas?",
    "¿Te gusta aprender cosas nuevas?",
    "¿Sientes que puedes confiar en tus amigos?",
    "¿Te sientes aburrido en la escuela?",
    "¿Te sientes presionado por tus estudios?",
    "¿Te resulta fácil pedir ayuda cuando la necesitas?",
    "¿Te sientes valorado por tus compañeros?",
    "¿Te preocupas por el futuro?",
    "¿Te sientes solo a menudo?",
    "¿Te resulta difícil hacer tareas escolares?",
    "¿Te sientes en control de tu vida?",
    "¿Te gusta participar en actividades extracurriculares?",
    "¿Te sientes respetado por tus profesores?",
    "¿Te resulta fácil expresarte?",
    "¿Te sientes satisfecho con tu vida?"
];

let questionIndex = 0;

function appendMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    
    const textElement = document.createElement('div');
    textElement.classList.add('text');
    textElement.textContent = text;
    
    messageElement.appendChild(textElement);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;

    if (sender === 'bot') {
        speakText(text);
    }
}

function askNextQuestion() {
    if (questionIndex < questions.length) {
        appendMessage('bot', questions[questionIndex]);
        questionIndex++;
    } else {
        appendMessage('bot', "Gracias por completar el test. Evaluaremos tus respuestas.");
        // Aquí podrías agregar lógica para evaluar las respuestas del usuario
    }
}

function startChat() {
    appendMessage('bot', "Hola, soy tu chatbot de psicología. Te haré algunas preguntas.");
    askNextQuestion();
}

sendBtn.addEventListener('click', () => {
    const userText = userInput.value;
    if (userText.trim() !== "") {
        appendMessage('user', userText);
        userInput.value = '';
        setTimeout(askNextQuestion, 1000);
    }
});

startBtn.addEventListener('click', startChat);

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    speechSynthesis.speak(utterance);
}
