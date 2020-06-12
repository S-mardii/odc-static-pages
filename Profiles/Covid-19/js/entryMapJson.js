function entryMapJsonEn(jsonData) {
    output = '';
    var mapLayers = jsonData;
    var j = 0;

    output += '<div class="row">';

    for (var i = 0; i < mapLayers.length; i++) {
        var mapLayer = mapLayers[i];

        if (mapLayer.is_ready == "yes") {
            j++;

            output +=
                '<div class="four columns post-grid-item">' +
                '<div class="grid-content-wrapper">' +
                '<div class="meta">' +
                '<h5 class="item-title" style="padding: 5px 10px; color: #ffffff !important">' + mapLayer.title_en + '</h5>' +
                '</div>' +
                '<a title="' + mapLayer.title_en + '" href="' + mapLayer.url_en + '"' + 'target="_blank" rel="noopener noreferrer">' +
                '<img class="attachment-300xauto size-300xauto wp-post-image" src="' + mapLayer.image_src + '" sizes="(max-width: 300px) 100vw, 300px" srcset="' + mapLayer.image_src + ' 640w, ' + mapLayer.image_src + ' 300w" alt="' + mapLayer.title_en + '" width="300" height="200" />' +
                '</a>' +
                '</div>' +
                '</div>';

            if (j % 4 == 0) {
                output +=
                    '</div>' +
                    '<div class="row">';
            }
        }
    }

    output +=
        '</div>';

    document.getElementById("map-list-section").innerHTML = output;
}