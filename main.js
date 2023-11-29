// insertImage.js



for (let i=1; i<=25; i++){
    // 이미지 요소 생성
    var imgElement = document.createElement('img');

    // 이미지 소스 설정
    src_name = './image/' + i + '.jpg' 
    imgElement.src = src_name; // 이미지 파일의 경로로 변경

    id_name = '#day' + i
    var divElement = document.querySelector(id_name);
    divElement.appendChild(imgElement);
}

