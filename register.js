const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const togglePasswordBtn = document.getElementById('toggle-password');
const goLogin = document.getElementById('go-login');
const registerForm = document.getElementById('register-form');

const leftPupil = document.getElementById('left-pupil');
const rightPupil = document.getElementById('right-pupil');

// 🧠 حركة العيون حسب الكتابة في الإيميل
emailInput.addEventListener('input', (e) => {
  const valueLength = e.target.value.length;
  const move = Math.min(valueLength * 1.5, 10);

  leftPupil.style.transform = `translate(${move}px, 0px)`;
  rightPupil.style.transform = `translate(${move}px, 0px)`;

  // إعادة فتح العيون لو كانت مغلقة
  leftPupil.parentElement.style.background = 'white';
  rightPupil.parentElement.style.background = 'white';
});

// 😴 غلق العيون عند التركيز على الباسورد
passwordInput.addEventListener('focus', () => {
  leftPupil.parentElement.style.background = '#5c4b36';
  rightPupil.parentElement.style.background = '#5c4b36';
});
passwordInput.addEventListener('blur', () => {
  leftPupil.parentElement.style.background = 'white';
  rightPupil.parentElement.style.background = 'white';
});

// 👁 زر إظهار كلمة السر (فتح عين واحدة)
togglePasswordBtn.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type');
  if (type === 'password') {
    passwordInput.setAttribute('type', 'text');
    leftPupil.parentElement.style.background = 'white';
    rightPupil.parentElement.style.background = '#5c4b36';
  } else {
    passwordInput.setAttribute('type', 'password');
    leftPupil.parentElement.style.background = '#5c4b36';
    rightPupil.parentElement.style.background = '#5c4b36';
  }
});

// 🔁 تحويل لصفحة تسجيل الدخول
goLogin.addEventListener('click', () => {
  window.location.href = 'index.html';
});

// 📝 حفظ البيانات (تجريبي باستخدام localStorage)
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if (password !== confirmPassword) {
    alert('كلمة السر وتأكيدها غير متطابقين!');
    return;
  }

  // ⚡ مثال تخزين البيانات محليًا
  let users = [];
  if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
  }

  users.push({ username, email, password });
  localStorage.setItem('users', JSON.stringify(users));

  alert('تم إنشاء الحساب بنجاح!');
  registerForm.reset();
  window.location.href = 'index.html';
});
