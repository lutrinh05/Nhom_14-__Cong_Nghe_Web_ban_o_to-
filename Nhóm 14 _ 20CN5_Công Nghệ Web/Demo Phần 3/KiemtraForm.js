function handleLogin() {
    let username = document.querySelector(".username");
    let password = document.querySelector(".password");
    if(!username.value){
        alert("Không được để trống tài khoản ");
        return;
    }
    if(!password.value){
        alert("Không được để trống mật khẩu ");
        return;
    }
    else{alert("oke");

    }
}