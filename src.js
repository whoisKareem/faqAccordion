const answers = {
    'a111': 'Answer 1.',
    'a222': 'No more than 2GB. All files in your account must fit your allotted storage space.',
    'a333': 'Answer 3.',
    'a444': 'Answer 4.',
    'a555': 'Answer 5.',
};


let answerShown = false;

const flipArrow = (id, flag) => {
    if  (!flag){
        document.getElementById(id).style.transform = 'rotate(180deg)';
        return;
    }
    document.getElementById(id).style.transform = 'rotate(360deg)';
}

const render = (id, flag) => {
    if  (!flag){
        const p = document.createElement('p');
        p.innerText = answers[id];
        document.getElementById(id).appendChild(p);
        answerShown = true;
        return;
    }
    document.getElementById(id).innerHTML = '';
    answerShown = false;
}

const showHideAnswer = (id) => {
    const l = id[1];
    flipArrow('' + id + l, answerShown);
    render('' + id + l + l, answerShown);
};