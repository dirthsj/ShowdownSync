function sendMessage( msg ){
  chrome.tabs.query( {url:"http://play.pokemonshowdown.com/*"}, function( result ){
    chrome.tabs.sendMessage( result[ 0 ].id, msg )
  } );
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById( "load" ).onclick = function(){
    sendMessage( "load" );
  }

  document.getElementById( "save" ).onclick = function(){
    sendMessage( "save" );
  }
});
