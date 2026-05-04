(function () {
    const fileUploadBox = document.getElementById('fileUploadBox');
    const userFile = document.getElementById('userFile');
    const kakaoChatButton = document.getElementById('kakaoChatButton');
    const fileNameDisplay = document.getElementById('fileNameDisplay');

    if (fileUploadBox && userFile) {
        fileUploadBox.addEventListener('click', () => userFile.click());
        fileUploadBox.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                userFile.click();
            }
        });
    }

    if (userFile && fileNameDisplay) {
        userFile.addEventListener('change', (event) => {
            const selectedFile = event.target.files && event.target.files[0];
            fileNameDisplay.innerText = selectedFile ? selectedFile.name : '📁 사진 또는 동영상 첨부 (클릭)';
        });
    }

    if (kakaoChatButton && window.APP_CONFIG?.kakaoOpenChatUrl) {
        kakaoChatButton.addEventListener('click', () => {
            window.open(window.APP_CONFIG.kakaoOpenChatUrl, '_blank', 'noopener');
        });
    }
})();
