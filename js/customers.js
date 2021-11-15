$(document).ready(function(){

    scrool()
    selectAndhighlight()
    countremainCharacter()
    scrollTop()
    likeDislike()
});
$(function(){
    let menu =[
        {
            "url":"index.html",
            "title":"Home"
        },
        {
            "url":"customer.html",
            "title":"customers"
        },
        {
            "url":"read.html",
            "title":"Read"
        },
        {
            "url":"contact.html",
            "title":"Contact"
        },
    ]
    $.each(menu, function(key, value) {
        $("#navigation").append(`<li class="nav-item">
                    <a class="nav-link" href="${value.url}">${value.title}</a>
                </li>`);
    });
});

$(function() {
    $.ajax({
        url: 'https://randomuser.me/api/?results=50',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $.each(data.results, function(key, person) {
                $('#users').append(`<div class="col-md-3 text-center list-wrapper"><ul id="names"><li>
                        <h3 class="${person.gender}">${person.gender}</h3>
                        <img src="${person.picture.large}" alt="" class="img-fluid rounded-circle">
                        <h4>${person.name.first} ${person.name.last}</h4>
                        <p>${person.nat.toLowerCase()} <span class="flag-icon flag-icon-${person.nat.toLowerCase()}"></span></p>
                      
                   </li></ul> </div>`);
            })
        }
    });
});
//character counter
function scrool(){
    $('#some_text').scroll(function() {
        var scroll_pos = $('#some_text').scrollTop();
        $('#menu_feedback').html('You have scrolled, and are at position ' + scroll_pos);
    
        //can be useful in agreements where user has to scroll down and then click i agree
    });
}
function selectAndhighlight(){
    $('#search_name').keyup(function(){
		search_name = $(this).val();
		$('#names li h4').removeClass('highlight');

		if(jQuery.trim(search_name) != ''){
			$("#names li h4:contains('" + search_name + "')").addClass('highlight');
		}
	});
}
function countremainCharacter(){
    var text_max = 55;
	$('#textarea_feedback').html(text_max + ' characters remaining');

	$('#textarea').keyup(function() {
		var text_length = $('#textarea').val().length;
		var text_remaining = text_max - text_length;

		$('#textarea_feedback').html(text_remaining + ' characters remaining');

	});
}
function scrollTop(){
    $('.top').click(function(){
        $('html,body').animate({scrollTop:0},'fast');
    })
}
function likeDislike(){
   
        $(".like").click(function(){
            var input = $(this).siblings('.qty');
            input.val(parseFloat(input.val()) + 1);
            
        });
        $(".dislike").click(function(){
            var input = $(this).siblings('.qty');
            input.val(parseFloat(input.val()) - 1);
        });
    
    
}