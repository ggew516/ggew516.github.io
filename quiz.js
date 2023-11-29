function openModal() {
    document.getElementById('quizModal').style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block';
}

// 모달 닫기
function closeModal() {
    document.getElementById('quizModal').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
}

function hash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
    }
    return hash;
}


function answerDay1(){
    key = document.getElementById('answer').value
    if(hash(key) == '2368947401'){
        new_key = key.toString() + key.toString()
        decryptDay1(parseInt(new_key))
    }else{
        closeModal()
    }
}

function answerDay2(){
    key = document.getElementById('answer').value
    if(hash(key) == '2368946442'){
        new_key = key.toString() + key.toString()
        decryptDay2(parseInt(new_key))
    }else{
        closeModal()
    }
}

function answerDay3(){
    key = document.getElementById('answer').value
    hashed_key = hash(key).toString()
    if(hash(hashed_key) == '271051354'){
        new_key = hashed_key.toString() + hashed_key.toString()
        decryptDay3(parseInt(new_key.substring(0, 16)))
    }else{
        closeModal()
    }
}

function answerDay4(){
    key = document.getElementById('answer').value
    hashed_key = hash(key).toString()
    if(hash(hashed_key) == '-2217549493'){
        new_key = hashed_key.toString() + hashed_key.toString() + hashed_key.toString()
        decryptDay4(parseInt(new_key.substring(0, 16)))
    }else{
        closeModal()
    }
}

function answerDay5(){
    key = document.getElementById('answer').value
    hashed_key = hash(key).toString()
    if(hash(hashed_key) == '-2162166201'){
        new_key = hashed_key.toString() + hashed_key.toString() + hashed_key.toString()
        decryptDay5(parseInt(new_key.substring(0, 16)))
    }else{
        closeModal()
    }
}

function quizDay1(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 처음 사귄 날은? (YYYYMMDD)'
    document.getElementById('submitAnswer').addEventListener('click', answerDay1);
}

function quizDay2(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 처음 만난 날은? (YYYYMMDD)'
    document.getElementById('submitAnswer').addEventListener('click', answerDay2);
}

function quizDay3(){
    openModal()
    document.getElementById('quizText').textContent = '내가 예지한테 가장 많이 보낸 카톡은?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay3);
}

function quizDay4(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 처음 만난 곳은 어떤 역일까?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay4);
}

function quizDay5(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 처음 간 식당은?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay5);
}


$(document).ready(function () {
    // const myDate = new Date(); 
    const myDate = new Date("2023-12-25"); 
    const xmas = Date.parse("Dec 25, "+myDate.getFullYear()) 
    const today = Date.parse(myDate) 

    const daysToChristmas = Math.round((xmas-today)/(1000*60*60*24)) 

    if (myDate >= new Date("2023-12-01")){
        document.getElementById('day1').addEventListener('click', quizDay1);    
    }

    if (myDate >= new Date("2023-12-02")){
        document.getElementById('day2').addEventListener('click', quizDay2);    
    }

    if (myDate >= new Date("2023-12-03")){
        document.getElementById('day3').addEventListener('click', quizDay3);    
    }

    if (myDate >= new Date("2023-12-04")){
        document.getElementById('day4').addEventListener('click', quizDay4);    
    }

    if (myDate >= new Date("2023-12-05")){
        document.getElementById('day5').addEventListener('click', quizDay5);    
    }

    if (myDate >= new Date("2023-12-06")){
        document.getElementById('day6').addEventListener('click', quizDay6);    
    }

    if (myDate >= new Date("2023-12-07")){
        document.getElementById('day7').addEventListener('click', quizDay7);    
    }

    if (myDate >= new Date("2023-12-08")){
        document.getElementById('day8').addEventListener('click', quizDay8);    
    }

    if (myDate >= new Date("2023-12-09")){
        document.getElementById('day9').addEventListener('click', quizDay9);    
    }

    if (myDate >= new Date("2023-12-10")){
        document.getElementById('day10').addEventListener('click', quizDay10);    
    }
    

    

    // if (daysToChristmas == 0) 
    // $('#days').text("It's Christmas!! Merry Christmas!");

    // if (daysToChristmas < 0) 
    // $('#days').text("Christmas was "+-1*(daysToChristmas)+" days ago.");

    // if (daysToChristmas > 0) {
    //     $('#days').text(daysToChristmas+" days to Christmas!");
    //     console.log('hi')
    // }

});