(function(){
	$("#groupName").focusout(function(){
		var nickname = $(this).val();
		$.post( "js.php", { nickname: nickname } )
			.done(function( data ){
				if (data != "") {
					data = $.parseJSON(data);
					var arrays = $("#group").children();
					for (var i = 0; i < arrays.length; i++) {
						arrays[i].text = data[i];
					}
				}
			})
	});
}())

function checkprice() {
	var msg = $('#groups').serialize();
	$.ajax({
		type: 'POST',
		url: '/donate/buy.php',
		data: msg+'&checkprice=1',
		success: function(data) {
			$('#buyclick').html(data);
		}
	});
};