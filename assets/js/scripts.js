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
        document.getElementById("j_modal_name").textContent = '';
        document.getElementById("j_modal_title").textContent = '';
        document.getElementById("j_modal_description").textContent = '';
        document.getElementById("j_modal_about").textContent = '';
        document.getElementById("j_modal_photo").textContent = '';
    };


    document.querySelector('.j_speaker').addEventListener('click', function(event) {
        var id = event.target.dataset.id;
        var modal = document.getElementById("j_modal");
        modal.style.display = 'block';
        loadJSON('data.json',
            function(response) { 
                console.log(response);
                var data = response[id];
                document.getElementById("j_modal_name").textContent = data.name;
                document.getElementById("j_modal_title").textContent = 'The talk: ' + data.title;
                document.getElementById("j_modal_description").textContent = data.description;
                document.getElementById("j_modal_about").textContent = data.about;

                var image = document.createElement("img");
                var imageParent = document.getElementById("j_modal_photo");
                image.id = "id";
                image.className = "class";
                image.src = 'assets/images/people/' + data.photo;
                imageParent.appendChild(image);
            },
            function(xhr) { console.error(xhr); }
        );
        
    });




};


function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}