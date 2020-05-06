// Entry data from JSON to Page:Data literacy > Section: Trainees in English langauge 
function entryJsonInHtmlEn(jsonData) {
    var output = "";
    var trainees = jsonData;
    var j = 0;

    output +=
        '<!-- Trainees Anchor -->' +
        '<span id="trainees" style="display: block; position: relative; top: -50px; visibility: hidden;"></span>' +
        '<h2>Trainees</h2>';

    output += '<div class="row">';

    for (var i = 0; i < trainees.length; i++) {
        var trainee = trainees[i];

        if (trainee.is_ready == "yes") {
            j++;

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
                '<p>' + '<strong>' + trainee.position_en + '</strong>' + '<br><em>' + trainee.organization_en + '</em></p>' +
                '</div>' +
                '<div class="modal-body">' +
                '<p>' + trainee.bio_en + '</p>' +
                '</div>';

            if (trainee.projectUrl = ! '-') {
                output +=
                    '<div class="modal-footer">' +
                    '<a target="_blank" href="' + trainee.projectUrl + '">' +
                    'View the project' +
                    '</a>' +
                    '</div>';
            }

            output +=
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

    document.getElementById("trainees-section").innerHTML = output;
}

// Entry data from JSON to Page:Data literacy > Section: Trainees in Khmer langauge
function entryJsonInHtmlKm(jsonData) {
    var output = "";
    var trainees = jsonData;
    var j = 0;

    output +=
        '<!-- Trainees Anchor -->' +
        '<span id="trainees" style="display: block; position: relative; top: -50px; visibility: hidden;"></span>' +
        '<h2>សិក្ខាកាម</h2>';

    output += '<div class="row">';

    for (var i = 0; i < trainees.length; i++) {

        var trainee = trainees[i];

        if (trainee.is_ready == "yes") {
            j++;

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
                '<p>' + '<strong>' + trainee.position_km + '</strong>' + '<br><em>' + trainee.organization_km + '</em></p>' +
                '</div>' +
                '<div class="modal-body">' +
                '<p>' + trainee.bio_km + '</p>' +
                '</div>';

            if (trainee.projectUrl != "-") {
                output +=
                    '<div class="modal-footer">' +
                    '<a target="_blank" href="' + trainee.projectUrl + '">' +
                    'View the project' +
                    '</a>' +
                    '</div>';
            }

            output +=
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

    document.getElementById("trainees-section").innerHTML = output;
}