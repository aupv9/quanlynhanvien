
function getEle(para) {
    return document.getElementById(para);
}

var nguoidung=new nguoiDungServices();
function login() {
    var taikhoan=getEle('txtTK').value;
    var matkhau=getEle('txtMK').value;

    nguoidung.DangNhap(taikhoan,matkhau).then(function(res){
        if(res.data.MaLoaiNguoiDung ==="QuanTri"){
            localStorage.setItem('currentUser',JSON.stringify(res.data));//gán user vừa đăng nhập 
           // sessionStorage.setItem('currentUser',JSON.stringify(res.data));

            window.location.assign('index.html');
        }
    }).catch(function(ex){
        console.log(ex.message);
    })
}


getEle('btnDangNhap').addEventListener('click',login);