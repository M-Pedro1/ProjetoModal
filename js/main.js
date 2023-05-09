function abreModal(){
    var modal = document.getElementById("cadastrar");
    var btn = document.getElementById("btnmodal");
    var btnfechar = document.getElementById("btnmodal2");

    btn.onclick = function(){
        modal.style.display = "block";
    }

    btnfechar.onclick = function(){
        modal.style.display = "none";
    }

    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none";
        }
    }
}