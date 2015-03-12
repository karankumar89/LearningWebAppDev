$(document).ready(function(){
    var searchKey ;
    $('#submit').click(function(){
        //console.log("click");
        $('#results').empty();
        searchKey = $('#key').val();
        var myApi = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=' + searchKey + '&callback=searchTerm';
        $(function () {
            $.ajax({
                url: myApi,
                type: "GET",
                dataType: 'jsonp',
                jsonp: 'searchTerm',
                async: 'true',
                success: function (data) {
                    alert("success");
                }
            });
        });
    });
});

function searchTerm(data) {
    //console.log(data.responseData.results);
    $("#results").append("<ul class='list-group'>");
    $.each(data.responseData.results, function(i, rows) {
        //console.log(rows.title);
        $('#results').append("<li class='list-group-item'>"+rows.title + "<br>" +"<a href='"+rows.url+"' >"+rows.url+"</a>"+"</br></li>");
    });
    $("#results").append('</ul>');
}