var currentUser=localStorage.getItem('currentUser');//kiểm tra coi đã có map in localstorage
if(!currentUser){
    window.location.assign('login.html');
}
