$('#btn_createList').click(function(){
    $('.ul_current').append($('<li>', {
         text: $('#input_listName').val()
    }));
});
