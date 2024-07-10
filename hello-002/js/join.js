document.addEventListener("DOMContentLoaded", () => {
    const join_body = document.querySelector("section.join.body")
    const join_form = join_body.querySelector("form")
    const input_username = join_body.querySelector("input[name='username']");
    const input_password = join_body.querySelector("input[name='password']");
    const input_re_password = join_body.querySelector("input[name='re_password']");
    const input_name = join_body.querySelector("input[name='name']");
    const input_gel = join_body.querySelector("input[name='tel']");
    const btn_join = join_body.querySelector("input[name='join']");

    // 회원가입 버튼(btn_join)이 클릭되었을 때 실행 할 함수
    // 이 함수 내에서 각 데이터의 유효성 검사를 실행한다
    const onValidation = () => {
        const value_username = input_username.value;
        const value_password = input_password.value;
        const value_re_password = input_re_password.value;
    };
    /*
        join(회원가입) 버튼을 클릭 하였을 때
            1. username, password, re_password가 입력되었는지 검사하기
            2. password와 re_password가 서로 일치하는지 검사하기
    */
   if(!value_username) {
        alert("아이디와 비밀번호를 입력해주세요");
        return false;
   } 
   const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
   if(!emailRule.test(value_username)) {

   }
   if (!value_password) {
        alert("입력하신 비밀번호가 일치하지 않습니다");
        input_re_password.select();
        return false;
   }
   const passwordRexp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
   if(!passwordRexp.test(value_password)) {
     alert("비밀번호는 영문, 숫자, 특수문자 포함 8~15자리 규칙으로 입력하세요");
     input_password.select();
     return false;
   }
   if(!value_re_password) {
     alert("입력하신 비밀번호가 일치하지 않습니다");
     return false;
   }
});
