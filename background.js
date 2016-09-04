chrome.runtime.onMessage.addListener( function( request, sender, sendResponse ){
	if( request.greeting == "get" ){
		chrome.storage.sync.get( 'showdown_teams_sync', function( items ){
			sendResponse( items );
		} )
		return true;
	} else if( request.greeting == "set" ){
		console.log( 'message received, uploading' );
		console.log( request.showdown_teams_local );
		chrome.storage.sync.set( {"showdown_teams_sync": request.showdown_teams_local || ''} );
	}
});