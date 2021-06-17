var btn = document.querySelector('#btn');
btn.onclick = function(){
    var userid = document.querySelector('#userid');
    var userpw = document.querySelector('#userpw');
    var userpw2 = document.querySelector('#userpw2');
    var name = document.querySelector('#name');
    var age = document.querySelector('#age');
    var mail = document.querySelector('#mail');
  
    if (userid.value ==""){
        alert('아이디를 입력하세요');
        userid.focus();
        return false;
    }
    if (userpw.value ==""){
        alert('암호를 입력하세요');
        userpw.focus();
        return false;
    }
    if (userpw2.value ==""){
        alert('암호확인을 입력하세요');
        userpw2.focus();
        return false;
    }
    if (name.value ==""){
        alert('이름을 입력하세요');
        name.focus();
        return false;
    }
    if (age.value ==""){
        alert('나이를 입력하세요');
        age.focus();
        return false;
    }
    if (mail.value ==""){
        alert('메일을 입력하세요');
        mail.focus();
        return false;
    }
    if(userpw.value != userpw2.value){  // 암호 1 , 암호 2 일치 검사
        alert('암호가 일치하지 않습니다.')
        return false;
    }
    
};