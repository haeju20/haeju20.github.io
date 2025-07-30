// ddl-floors에서 '----'가 아닌 값이 선택되는 경우,
// ddl-floor (드롭다운리스트) 옆에 버튼이 생긴다
// '----'가 선택되는 경우는 다시 버튼이 사라진다

// 드롭다운과 버튼 요소 가져오기
const floorsDdl = document.getElementById('ddl-floors');
const goBtn = document.getElementById('go-btn');

// 드롭다운 변경 이벤트
floorsDdl.addEventListener('change', function() {
    const selectedValue = this.value;
    console.log('Selected:', selectedValue);

    // '----'가 아닌 값이 선택되면 버튼 표시, '----'이면 버튼 숨김
    if (selectedValue !== '----') {
        goBtn.classList.add('show');
    } else {
        goBtn.classList.remove('show');
    }
});

// 버튼 클릭 이벤트
goBtn.addEventListener('click', function() {
    const selectedValue = floorsDdl.value;
    console.log('Button clicked with selected value:', selectedValue);

    // 여기에 버튼 클릭시 실행할 로직 추가
    window.location.replace(`./${selectedValue}.html`);
});