window.onload = function() {

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        offset: 100,
    });


    document.getElementById("j_tickets").onclick = function() {
        var modal = document.getElementById("j_modal");
        modal.style.display = 'block';
    };


    document.getElementById("j_modal_close").onclick = function() {
        var modal = document.getElementById("j_modal");
        modal.style.display = 'none';
    };



};