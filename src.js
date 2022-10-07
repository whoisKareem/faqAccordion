const render = (id, txt) => {
    const myElement = document.createElement('div');
    const element = document.getElementById(id);
    element.appendChild(myElement);
    myElement.innerText = txt;
    myElement.classList.add('p2');
}

const showAnswer = (q) => {
    let answer;
    if (q = 'q2') {
        answer = 'dlfjaslkdj';
    }
    render(q, answer);
};