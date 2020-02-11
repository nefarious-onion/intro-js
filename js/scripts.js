var flickrAPI = 'add-the-URL-here';

/**
 * Call the render function to render image content if there are result,
 * otherwise, discard and print out the notification that nothing is found
 * Call addFavouriteButtonEvent function once finished rendering images
 * 
 * @param   {Object}    resp contains the data that we retrieved from the AJAX call to to flickr
 * @return  {Boolean}   false if no image is found
 * @return  {Void}      if images get rendered
 */
function handleResponse(resp) {
    console.log('The request has been completed'); 
    console.log(resp);

    if (resp.items.length === 0) {
        $('#imageWrapper').text('There is no image matching your search term');
        return;
    }

    renderContent(resp);
}

function renderContent(resp) {
    // TODO add render logic here
    var _newImageEl = createImage(url);
    $('.imageWrapper').append(newImageEl);
}

function createImage(url) {
    // TODO generate image element here
}

function doAjaxCall(searchTerm) {
    var paramsForFlickr = {
        tags: searchTerm,
        tagmode: 'any',
        format: 'json'
    };

    $.getJSON( 
        flickrAPI, 
        paramsForFlickr,
        handleResponse
    );
}

// function clickAlert() {
//     alert("You searched: " + document.searchBar.searchQuery.value);
// } 

$(document).ready(function() {
    $('[name="searchButton"]').click(function() {
        console.log('User has entered ' + document.searchBar.searchQuery.value);

        $.ajax({ //ajax call
            url: '//api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
            dataType: 'json',
            data: { // search parameters defined in documentation
                tags: document.searchBar.searchQuery.value, //user input
                tagmode: 'any',
                format: 'json'
            }
        }).done(function(data) {
            console.log(data);
            $('#imageWrapper').empty(); //empties div with class imageWrapper

            data.items.forEach(function(item) {
                $('#imageWrapper').append('<img src=' + item.media.m + '></img>');
            });
           
        });
    });   
});

