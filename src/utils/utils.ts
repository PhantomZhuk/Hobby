export function clearInput() {
    const nameInput = document.getElementById('SignUpName') as HTMLInputElement;
    const emailSignInput = document.getElementById('SignUpEmail') as HTMLInputElement;
    const emailLoginInput = document.getElementById('LoginEmail') as HTMLInputElement;
    const phoneInput = document.getElementById('SignUpPhone') as HTMLInputElement;
    const passwordSignInput = document.getElementById('SignUpPassword') as HTMLInputElement;
    const passwordLoginInput = document.getElementById('LoginPassword') as HTMLInputElement;

    nameInput.value = '';
    emailSignInput.value = '';
    emailLoginInput.value = '';
    phoneInput.value = '';
    passwordSignInput.value = '';
    passwordLoginInput.value = '';
} 