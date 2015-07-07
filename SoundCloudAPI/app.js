SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {
 SC.get('/tracks', { genres: 'foo' }, function(tracks) {
   $(tracks).each(function(index, track) {
     $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
   });
 });
});