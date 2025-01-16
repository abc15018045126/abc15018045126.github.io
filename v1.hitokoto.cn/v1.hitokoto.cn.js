(function hitokoto() {
    var hitokoto = "明月出天山，苍茫云海间。";
    var dom = document.querySelector('#hitokoto');
    Array.isArray(dom) ? dom[0].innerText = hitokoto : dom.innerText = hitokoto;
}
)()