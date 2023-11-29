function openModal() {
    document.getElementById('quizModal').style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block';
}

// 모달 닫기
function closeModal() {
    document.getElementById('quizModal').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
}

function quizDay1(){
    openModal()
    console.log('12')
    document.getElementById('quizText').textContent = '우리가 처음 만난 날은?'
}

document.getElementById('day1').addEventListener('click', quizDay1);