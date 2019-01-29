window.onload = function() {

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        offset: 100,
    });


    // document.getElementById("j_tickets").onclick = function() {
    //     var modal = document.getElementById("j_modal");
    //     modal.style.display = 'block';
    // };


    document.getElementById("j_modal_close").onclick = function() {
        var modal = document.getElementById("j_modal");
        modal.style.display = 'none';
        document.getElementById("j_modal_title").textContent = '';
    };


    document.querySelector('.j_speaker').addEventListener('click', function(event) {
        var data = event.target.dataset;
        var modal = document.getElementById("j_modal");
        modal.style.display = 'block';
        document.getElementById("j_modal_title").textContent = data.title;
    });




};