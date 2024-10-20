const searchInput = document.querySelector('.search-input');
let isInputActive = false;

searchInput.addEventListener('focus', () => {
    isInputActive = true; // 입력 중 상태
});

searchInput.addEventListener('blur', () => {
    isInputActive = false; // 입력이 끝났을 때 상태 변경
});

// 입력이 활성화된 상태일 때 애니메이션을 비활성화
searchInput.addEventListener('input', () => {
    searchInput.style.transition = isInputActive ? 'none' : 'width 0.3s'; // 애니메이션 제어
});
