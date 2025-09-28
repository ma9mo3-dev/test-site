/* Reset أساسي */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Cairo', sans-serif;
  background: linear-gradient(135deg, #1e1e2f, #3a3a5a);
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* الحاوية */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

/* شكل الدب */
.bear {
  position: relative;
  width: 160px;
  height: 160px;
  background: #5c4b36;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ears {
  position: absolute;
  top: -25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.ear {
  width: 40px;
  height: 40px;
  background: #5c4b36;
  border-radius: 50%;
}

.face {
  position: relative;
  width: 100%;
  height: 100%;
}

/* العيون */
.eyes {
  position: absolute;
  top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0 30px;
}

.eye {
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}

.pupil {
  width: 12px;
  height: 12px;
  background: black;
  border-radius: 50%;
  position: absolute;
  top: 9px;
  left: 9px;
  transition: 0.1s linear;
}

/* الأنف */
.nose {
  position: absolute;
  top: 85px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 20px;
  background: #2b1d0e;
  border-radius: 50% / 40%;
}

/* الفم */
.mouth {
  position: absolute;
  top: 110px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 25px;
  border-bottom: 3px solid black;
  border-radius: 0 0 50px 50px;
}

/* الفورم */
.form-box {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  width: 300px;
}

.form-box h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-box input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 8px;
  outline: none;
}

.password-box {
  position: relative;
}

.password-box button {
  position: absolute;
  top: 9px;
  left: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
}

.form-box button[type="submit"] {
  width: 100%;
  padding: 10px;
  background: #ffaa00;
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.link {
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
}

.link span {
  color: #ffaa00;
  cursor: pointer;
  text-decoration: underline;
    }
