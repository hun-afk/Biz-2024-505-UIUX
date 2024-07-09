document.addEventListener("DOMContentLoaded", () => {
    const login_body = document.querySelector("section.login.body");
    const btn_login = login_body.querySelector("input.log");
    const form = login_body.querySelector("form");
    const btn_join = login_body.querySelector("section.login.body");
    const input_username = login_body.querySelector("input[name='usesrname']");
    const input_password = login_body.querySelector("input[name='password']");

    /*
        로그인을 실행할 때 user id와 password가 입력되었는지 확인하고
        입력하지않았다면 정확히 입력하도록 유도하는 JS코드
    */
    const onValidation = () => {
        const value_username = input_username.value;
        const value_password = input_password.value;
    //    alert(`${value_username}`, `${value_password}`);

    // 사용자 id가 입력이 안됐으면
        if(value_username === "") {
            // 안내 메세지 출력
            alert("사용자 아이디는 반드시 입력해야 합니다");
            
            //username input box에 focus를 주어 사용자가 또 마우스를
            //사용하는걸 줄여준다
            input_username.select();
            // event handler를 중단
            return false;
        }
        if(value_password === "") {
            alert("비밀번호를 입력해주세요");
            input_password.select();
            return false;
        }
        // 유효성 검사가 끝났으니 서버로 데이터 전송
        form.submit();
    };
    btn_login.addEventListener("click", onValidation);
});