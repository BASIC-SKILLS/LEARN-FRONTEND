function moveJoin() { location.href = 'join.html'; }

function moveBack() { history.back(); }

function validateCheckLogin() {
    var id = document.getElementById('loginId');
    var pwd = document.getElementById('loginPwd');

    if (id.value === '' ||  pwd.value === '') {
        alert('로그인을 할 수 없습니다.');
    } else {
        location.href = 'main.html';
    }
}

function validateCheckJoin() {
    var id = document.getElementById('joinId');
    var pwd = document.getElementById('joinPwd');
    var confirmPwd = document.getElementById('joinConfirmPwd');

    if (id.value === '' ||  pwd.value === '') {
        alert('회원가입을 할 수 없습니다.');
    } else if (pwd.value !== confirmPwd.value) {
        alert('비밀번호를 확인해 주세요.');
    } else {
        location.href = 'login.html';
    }
}