const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('toggle-password');
const goRegister = document.getElementById('go-register');

const leftPupil = document.getElementById('left-pupil');
const rightPupil = document.getElementById('right-pupil');

// 🧠 حركة العيون حسب مؤشر الكتابة
emailInput.addEventListener('input', (e) => {
  const valueLength = e.target.value.length;

  const move = Math.min(valueLength * 1.5, 10); // كل ما تكتب حروف أكتر، البؤبؤ يتحرك

  leftPupil.style.transform = `translate(${move}px, 0px)`;
  rightPupil.style.transform = `translate(${move}px, 0px)`;

  // فتح العين لو كانت مغلقة
  leftPupil.parentElement.style.background = 'white';
  rightPupil.parentElement.style.background = 'white';
});

// 😴 لما تكتب في الباسورد، الدب يغمض عينيه
passwordInput.addEventListener('focus', () => {
  leftPupil.parentElement.style.background = '#5c4b36'; // يخليها نفس لون الدب
  rightPupil.parentElement.style.background = '#5c4b36';
});

// ⬅️ لما تطلع من حقل الباسورد، يرجّع العيون تاني
passwordInput.addEventListener('blur', () => {
  leftPupil.parentElement.style.background = 'white';
  rightPupil.parentElement.style.background = 'white';
});

// 👁 زر إظهار كلمة السر (فتح عين واحدة)
togglePasswordBtn.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type');
  if (type === 'password') {
    passwordInput.setAttribute('type', 'text');

    // فتح عين واحدة فقط
    leftPupil.parentElement.style.background = 'white';
    rightPupil.parentElement.style.background = '#5c4b36'; // يغلق العين التانية
  } else {
    passwordInput.setAttribute('type', 'password');

    // إغلاق العيون
    leftPupil.parentElement.style.background = '#5c4b36';
    rightPupil.parentElement.style.background = '#5c4b36';
  }
});

// 🔁 تحويل لصفحة التسجيل
goRegister.addEventListener('click', () => {
  window.location.href = 'register.html';
});
