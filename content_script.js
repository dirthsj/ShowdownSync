chrome.storage.sync.get( 'showdown_teams_sync', function( response ){
	window.localStorage.setItem( 'showdown_teams_local', response.showdown_teams_sync );
	console.log( 'got sync data, set localStorage' );
	console.log( response.showdown_teams_sync );
})

window.onbeforeunload = function(){
	var team = window.localStorage.getItem( 'showdown_teams_local' );
	chrome.storage.sync.set( {showdown_teams_sync: team } );
}