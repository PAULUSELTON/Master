 $(document).ready(function(){

	$('#btn_createList').click,dblck(function(){
			var addedItem = '<li class="items">' + '<a href="#" class="strike">' + $('#input_listName').val()+ '</a>'+ '</li>' ; 
			 $('.ul_current').append(addedItem); 
	});

	$(document).on('click,''.strike')function(){
	  		$(this).addClass("strikeit");
	  	$(this).dblck(hide);	  
	});
		 

});