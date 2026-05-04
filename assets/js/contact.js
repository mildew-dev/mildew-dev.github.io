(function () {
    const form = document.getElementById('inquiryForm');
    const submitButton = document.getElementById('submitBtn');

    if (!form || !submitButton) {
        return;
    }

    if (!window.APP_CONFIG?.supabaseUrl || !window.APP_CONFIG?.supabaseAnonKey) {
        console.warn('Supabase 설정값이 비어 있습니다. assets/js/config.js를 수정하세요.');
        return;
    }

    const supabaseClient = window.supabase.createClient(
        window.APP_CONFIG.supabaseUrl,
        window.APP_CONFIG.supabaseAnonKey
    );

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        submitButton.innerText = '업로드 및 전송 중...';
        submitButton.disabled = true;

        const fileInput = document.getElementById('userFile');
        const nameInput = document.getElementById('userName');
        const emailInput = document.getElementById('userEmail');
        const messageInput = document.getElementById('userMsg');

        const file = fileInput?.files?.[0] || null;
        let fileUrl = '';

        try {
            if (file) {
                const uploadName = `${Date.now()}_${file.name}`;
                const { error: uploadError } = await supabaseClient.storage
                    .from(window.APP_CONFIG.storageBucket)
                    .upload(uploadName, file);

                if (uploadError) {
                    throw uploadError;
                }

                const { data: publicUrlData } = supabaseClient.storage
                    .from(window.APP_CONFIG.storageBucket)
                    .getPublicUrl(uploadName);

                fileUrl = publicUrlData?.publicUrl || '';
            }

            const { error: dbError } = await supabaseClient
                .from(window.APP_CONFIG.inquiryTable)
                .insert([
                    {
                        name: nameInput?.value || '',
                        email: emailInput?.value || '',
                        message: messageInput?.value || '',
                        file_url: fileUrl
                    }
                ]);

            if (dbError) {
                throw dbError;
            }

            alert('성공적으로 접수되었습니다!');
            window.location.reload();
        } catch (error) {
            alert(`오류: ${error.message}`);
            submitButton.disabled = false;
            submitButton.innerText = '견적 문의 신청하기';
        }
    });
})();
