function openModal() {
    document.getElementById('quizModal').style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block';
}

// 모달 닫기
function closeModal() {
    console.trace()
    document.getElementById('answer').value = ''
    document.getElementById('quizModal').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
    
        // 현재 버튼 요소 가져오기
    var currentButton = document.getElementById("submitAnswer");

    // 새로운 노드 생성 (기존 노드를 복제하여 새로운 노드를 만들어도 됨)
    var newButton = currentButton.cloneNode(true);

    // 이벤트 리스너가 없는 버튼으로 교체
    currentButton.parentNode.replaceChild(newButton, currentButton);


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

function answerDay6(){
    key = document.getElementById('answer').value
    hashed_key = hash(key).toString()
    if(hash(hashed_key) == '50455962'){
        new_key = hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString()
        decryptDay6(parseInt(new_key.substring(0, 16)))
    }else{
        closeModal()
    }
}

function answerDay7(){
    key = document.getElementById('answer').value
    console.log(key)
    hashed_key = hash(key).toString()
    if(hash(hashed_key) == '1514310'){
        new_key = hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString()
        decryptDay7(parseInt(new_key.substring(0, 16)))
    }else{
        closeModal()
    }
}

function answerDay8(){
    key = document.getElementById('answer').value
    hashed_key = hash(key).toString()
    if(hash(hashed_key) == '334714957'){
        new_key = hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString()
        decryptDay8(parseInt(new_key.substring(0, 16)))
    }else{
        closeModal()
    }
}

function answerDay9(){
    key = document.getElementById('answer').value
    hashed_key = hash(key).toString()
    if(hash(hashed_key) == '1513189'){
        new_key = hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString()
        decryptDay9(parseInt(new_key.substring(0, 16)))
    }else{
        closeModal()
    }
}


function answerDay10(){
    key = document.getElementById('answer').value
    hashed_key = hash(key).toString()
    if(hash(hashed_key) == '-2192637552'){
        new_key = hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString()
        decryptDay10(parseInt(new_key.substring(0, 16)))
    }else{
        closeModal()
    }
}

function answerDay11(){
    key = document.getElementById('answer').value
    hashed_key = hash(key).toString()
    if(hash(hashed_key) == '49742191'){
        new_key = hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString()
        decryptDay11(parseInt(new_key.substring(0, 16)))
    }else{
        closeModal()
    }
}

function answerDay12(){
    key = document.getElementById('answer').value
    hashed_key = Math.abs(hash(key)).toString()
    if(hash(hashed_key) == '-5467003299'){
        new_key = hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString()
        decryptDay12(parseInt(new_key.substring(0, 16)))
    }else{
        closeModal()
    }
}

function answerDay13(){
    key = document.getElementById('answer').value
    hashed_key = Math.abs(hash(key)).toString()
    if(hash(hashed_key) == '99302246'){
        new_key = hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString()
        decryptDay13(parseInt(new_key.substring(0, 16)))
    }else{
        closeModal()
    }
}

function answerDay14(){
    key = document.getElementById('answer').value
    hashed_key = Math.abs(hash(key)).toString()
    if(hash(hashed_key) == '1697'){
        new_key = hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString()
        decryptDay14(parseInt(new_key.substring(0, 16)))
    }else{
        closeModal()
    }
}

function answerDay15(){
    key = document.getElementById('answer').value
    hashed_key = Math.abs(hash(key)).toString()
    if(hash(hashed_key) == '50454103'){
        new_key = hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString()
        decryptDay15(parseInt(new_key.substring(0, 16)))
    }else{
        closeModal()
    }
}

function answerDay16(){
    key = document.getElementById('answer').value
    hashed_key = Math.abs(hash(key)).toString()
    if(hash(hashed_key) == '-2221423416'){
        new_key = hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString()
        decryptDay16(parseInt(new_key.substring(0, 16)))
    }else{
        closeModal()
    }
}

function answerDay17(){
    key = document.getElementById('answer').value
    hashed_key = Math.abs(hash(key)).toString()
    if(hash(hashed_key) == '-2193537113'){
        new_key = hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString() + hashed_key.toString()
        decryptDay17(parseInt(new_key.substring(0, 16)))
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

function quizDay6(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 처음으로 시켜먹은 메뉴는?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay6);
}

function quizDay7(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 2023년 10월 한 달 동안 몇 번의 [사랑해] 를 카톡으로 보냈을까?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay7);
}

function quizDay8(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 함께한 첫 번째 게임은?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay8);
}

function quizDay9(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 지금까지 함께 한 게임의 갯수는?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay9);
}

function quizDay10(){
    openModal()
    document.getElementById('quizText').textContent = '내가 예지를 처음으로 봤을 때 입은 셔츠는 무슨 재질일까?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay10);
}

function quizDay11(){
    openModal()
    document.getElementById('quizText').textContent = '나의 퍼스널 컬러의 계절은?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay11);
}

function quizDay12(){
    openModal()
    document.getElementById('quizText').textContent = '곰이 구르면?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay12);
}

function quizDay13(){
    openModal()
    document.getElementById('quizText').textContent = '통모짜핫도그의 반대말은?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay13);
}

function quizDay14(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 미쁘동을 몇 번이나 갔을까?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay14);
}

function quizDay15(){
    openModal()
    document.getElementById('quizText').textContent = '내가 예지 머리 냄새를 맡아도 될까?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay15);
}

function quizDay16(){
    openModal()
    document.getElementById('quizText').textContent = '우리의 첫 여행지는?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay16);
}

function quizDay17(){
    openModal()
    document.getElementById('quizText').textContent = '오늘은 우리가 사귄지 며칠 째 되는 날일까?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay17);
}

function quizDay18(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 처음 간 식당은?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay18);
}

function quizDay19(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 처음 간 식당은?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay19);
}

function quizDay20(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 처음 간 식당은?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay20);
}

function quizDay21(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 처음 간 식당은?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay21);
}

function quizDay22(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 처음 간 식당은?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay22);
}

function quizDay23(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 처음 간 식당은?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay23);
}

function quizDay24(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 처음 간 식당은?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay24);
}

function quizDay25(){
    openModal()
    document.getElementById('quizText').textContent = '우리가 처음 간 식당은?'
    document.getElementById('submitAnswer').addEventListener('click', answerDay25);
}


$(document).ready(function () {
    const myDate = new Date();
    // const myDate = new Date("2023-12-25"); 
    myDate.setHours(myDate.getHours() + 9);
    
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

    if (myDate >= new Date("2023-12-11")){
        document.getElementById('day11').addEventListener('click', quizDay11);    
    }
    
    if (myDate >= new Date("2023-12-12")){
        document.getElementById('day12').addEventListener('click', quizDay12);    
    }

    if (myDate >= new Date("2023-12-13")){
        document.getElementById('day13').addEventListener('click', quizDay13);    
    }

    if (myDate >= new Date("2023-12-14")){
        document.getElementById('day14').addEventListener('click', quizDay14);    
    }

    if (myDate >= new Date("2023-12-15")){
        document.getElementById('day15').addEventListener('click', quizDay15);    
    }

    if (myDate >= new Date("2023-12-16")){
        document.getElementById('day16').addEventListener('click', quizDay16);    
    }

    if (myDate >= new Date("2023-12-17")){
        document.getElementById('day17').addEventListener('click', quizDay17);    
    }

    if (myDate >= new Date("2023-12-18")){
        document.getElementById('day18').addEventListener('click', quizDay18);    
    }

    if (myDate >= new Date("2023-12-19")){
        document.getElementById('day19').addEventListener('click', quizDay19);    
    }

    if (myDate >= new Date("2023-12-20")){
        document.getElementById('day20').addEventListener('click', quizDay20);    
    }

    if (myDate >= new Date("2023-12-21")){
        document.getElementById('day21').addEventListener('click', quizDay21);    
    }

    if (myDate >= new Date("2023-12-22")){
        document.getElementById('day22').addEventListener('click', quizDay22);    
    }

    if (myDate >= new Date("2023-12-23")){
        document.getElementById('day23').addEventListener('click', quizDay23);    
    }

    if (myDate >= new Date("2023-12-24")){
        document.getElementById('day24').addEventListener('click', quizDay24);    
    }

    if (myDate >= new Date("2023-12-25")){
        document.getElementById('day25').addEventListener('click', quizDay25);    
    }
});