function entryJsonInHtml(jsonData) {
    output_en = entryJsonInHtmlEn(jsonData);
    document.getElementById("trainees-en").innerHTML = output_en;

    output_km = entryJsonInHtmlKm(jsonData);
    document.getElementById("trainees-km").innerHTML = output_km;
}

// Entry data from JSON to Page:Data literacy > Section: Trainees in English langauge 
function entryJsonInHtmlEn(jsonData) {
    var output = "";
    var trainees = jsonData;

    output +=
        '<div class="trainees">' +
        '<!-- Trainees Anchor -->' +
        '<span id="trainees" style="display: block; position: relative; top: -50px; visibility: hidden;"></span>' +
        '<h2>Trainees</h2>';

    output += '<div class="row">';

    for (var i = 0; i < trainees.length; i++) {
        var trainee = trainees[i];

        if (trainee.is_ready == "yes") {

            output +=
                '<div class="four columns">' +
                '<a href="#' + trainee.modalId + '">' +
                '<div id="round" style="width: 100%;">' +
                '<img class="aligncenter wp-image-131021 size-large" src="' + trainee.wpImgUrl + '" alt="' + trainee.imgAlt + '" width="760" height="783">' +
                '</div>' +
                '<div class="profile-label">' +
                '<h4>' + trainee.name_en + '</h4>' +
                '<h5>' + trainee.position_en + '</h5>' +
                '<p>' + trainee.organization_en + '</p>' +
                '</div>' +
                '</a>' +
                '</div>';

            output +=
                '<div id="' + trainee.modalId + '" class="modal-background">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<a href="#modal-close" title="Close" class="modal-close"> &times; </a>' +
                '<h3>' + trainee.name_en + '</h3>' +
                '<p>' + '<strong>' + trainee.position_en + '</strong>' + '<br>' + trainee.organization_en + '</p>' +
                '</div>' +
                '<div class="modal-body">' +
                '<p>' + trainee.bio_en + '</p>' +
                '</div>' +
                '<div class="modal-footer">' +
                '<a target="_blank" href="' + trainee.projectUrl + '">' +
                'View the project' +
                '</a>' +
                '</div>' +
                '</div>' +
                '</div>';

            if ((i + 1) % 4 == 0 && i > 2) {
                output +=
                    '</div>' +
                    '<div class="row">';
            }
        }
    }

    output +=
        '</div>' +
        '</div>';

    return output;
}

// Entry data from JSON to Page:Data literacy > Section: Trainees in Khmer langauge
function entryJsonInHtmlKm(jsonData) {
    var output = "";
    var trainees = jsonData;

    output +=
        '<div class="trainees">' +
        '<!-- Trainees Anchor -->' +
        '<span id="trainees" style="display: block; position: relative; top: -50px; visibility: hidden;"></span>' +
        '<h2>សិក្ខាកាម</h2>';

    output += '<div class="row">';

    for (var i = 0; i < trainees.length; i++) {

        var trainee = trainees[i];

        if (trainee.is_ready == "yes") {

            output +=
                '<div class="four columns">' +
                '<a href="#' + trainee.modalId + '">' +
                '<div id="round" style="width: 100%;">' +
                '<img class="aligncenter wp-image-131021 size-large" src="' + trainee.wpImgUrl + '" alt="' + trainee.imgAlt + '" width="760" height="783">' +
                '</div>' +
                '<div class="profile-label">' +
                '<h4>' + trainee.name_km + '</h4>' +
                '<h5>' + trainee.position_km + '</h5>' +
                '<p>' + trainee.organization_km + '</p>' +
                '</div>' +
                '</a>' +
                '</div>';

            output +=
                '<div id="' + trainee.modalId + '" class="modal-background">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<a href="#modal-close" title="Close" class="modal-close"> &times; </a>' +
                '<h3>' + trainee.name_km + '</h3>' +
                '<p>' + '<strong>' + trainee.position_km + '</strong>' + '<br>' + trainee.organization_km + '</p>' +
                '</div>' +
                '<div class="modal-body">' +
                '<p>' + trainee.bio_km + '</p>' +
                '</div>' +
                '<div class="modal-footer">' +
                '<a target="_blank" href="' + trainee.projectUrl + '">' +
                'View the project' +
                '</a>' +
                '</div>' +
                '</div>' +
                '</div>';

            if ((i + 1) % 4 == 0 && i > 2) {
                output +=
                    '</div>' +
                    '<div class="row">';
            }
        }
    }

    output +=
        '</div>' +
        '</div>';

    return output;
}