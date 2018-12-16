function nguoiDungServices() {

    this.DangNhap=function(taikhoan,matkhau){
        return axios({
            method:"POST",
            url:`http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`,
            
        })
    }
}