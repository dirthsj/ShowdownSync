chrome.runtime.sendMessage({greeting: "get"}, function(response) {
	console.log( response );
	window.localStorage.setItem( 'showdown_teams_local', response.showdown_teams_sync );
	console.log( "got sync data" );
});
console.log( "waiting for sync data" );

window.onbeforeunload = function(){
	var team = window.localStorage.getItem( 'showdown_teams_local' );
	console.log( 'saving teams' );
	console.log( team );
	chrome.runtime.sendMessage( {greeting: "set", showdown_teams_local: team} );
	return '';
}