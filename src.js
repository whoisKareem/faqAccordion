const answers = {
    '1': 'Answer 1.',
    '2': 'No more than 2GB. All files in your account must fit your allotted storage space.',
    '3': 'Answer 3.',
    '4': 'Answer 4.',
    '5': 'Answer 5.',
};


let answerShown = {
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false,
};

let firstTime = true;

const turnBold = (id, flag) => {
    if (!flag){
        document.getElementById(id).style.fontWeight = '700';
        document.getElementById(id).style.color = 'hsl(238, 29%, 16%)';
        return;
    }
    document.getElementById(id).style.fontWeight = '400';
}

const flipArrow = (id, flag) => {
    if (!flag){
        document.getElementById(id).style.transform = 'rotate(180deg)';
        return;
    }
    document.getElementById(id).style.transform = 'rotate(360deg)';
}

const renderContainer = (id, flag, n) => {
    if (!flag){
        const p = document.createElement('p');
        p.innerText = answers[n];
        document.getElementById(id).appendChild(p);
        answerShown[n] = true;
        return;
    }
    document.getElementById(id).innerHTML = '';
    answerShown[n] = false;
}

const render = (id, num) => {
    turnBold(id, answerShown[num]);
    flipArrow('' + id + num, answerShown[num]);
    renderContainer('' + id + num + num, answerShown[num], num);
}

const showHideAnswer = (id) => {
    const num = id[1];
    render(id, num);
};

if (firstTime) {
    document.getElementById('a2').click();
    firstTime = false;
}