const btn_darkmode = document.getElementById('darkmode');
btn_darkmode.addEventListener('click', function(){
    document.body.classList.toggle('dark');
});

_toggle.onclick = () =>{
    _menu.classList.toggle("open");
    _toggle.classList.toggle("close");
}