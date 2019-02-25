window.onload = function() {

    var url_string = window.location.href;
    var url = new URL(url_string);
    var pathname = url.pathname.split('/')[2]
    var id = pathname.split('.')[0]
    // var id = url.searchParams.get("speaker");

    loadJSON('../data.json',
        function(response) { 
            var data = response[id];
            document.getElementById("j_detail_name").textContent = data.name;
            document.getElementById("j_detail_title").textContent = 'The talk: ' + data.title;
            document.getElementById("j_detail_description").innerHTML = data.description;
            document.getElementById("j_detail_about").innerHTML = data.about;

            document.title = document.title + " - Speakers: " + data.name;

            var image = document.createElement("img");
            var imageParent = document.getElementById("j_detail_photo");
            image.id = "id";
            image.className = "class";
            image.src = '../assets/images/people/' + data.photo;
            imageParent.appendChild(image);
        },
        function(xhr) { console.error(xhr); }
    );

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