$(document).ready(function(){
    function fetchCatImage() {
        $.ajax({
            url: 'https://api.thecatapi.com/v1/images/search',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'DEMO-API-KEY'
            },
            method: 'GET',
            data: {
                size: 'med',
                mime_types: 'jpg',
                format: 'json',
                has_breeds: true,
                order: 'RANDOM',
                page: 0,
                limit: 1
            },
            success: function(response) {
                $("#result").empty(); // Limpiar cualquier contenido previo
                if(response.length > 0) {
                    var imageUrl = response[0].url;
                    $("#result").append("<div class='cat-image'><img src='" + imageUrl + "' alt='Random Cat Image'></div>");
                    $("#changeCatImage").show(); // Mostrar el botón para cambiar imagen
                } else {
                    $("#result").html("<p class='error-message'>No cat image found.</p>");
                    $("#changeCatImage").hide(); // Ocultar el botón si no hay imagen
                }
            },
            error: function() {
                $("#result").html("<p class='error-message'>Could not load cat image.</p>");
                $("#changeCatImage").hide(); // Ocultar el botón si hay un error
            }
        });
    }

    // Inicializar el botón principal
    $("#getCatImage").click(function(){
        fetchCatImage();
    });

    // Inicializar el botón para cambiar la imagen
    $("#changeCatImage").click(function(){
        fetchCatImage();
    });
});
