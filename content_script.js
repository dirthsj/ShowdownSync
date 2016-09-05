function joinTeambuilder(){
	/* join the teambuild room */
	var elements = document.getElementsByName( "joinRoom" );
	for(i=0; i <elements.length; i++ ){
		if( elements[ i ].value == "teambuilder" ){
			elements[ i ].click();
			console.log( "clicked" );
		}
	}
}

function openbackup(){
	/* open the backup / restore all teams */
	var elements = document.getElementsByName( "backup" );
	elements[ 0 ].click();
	console.log( "clicked backup" );
}

chrome.runtime.onMessage.addListener( function( request, sender, sendReponse ){
	if( request == "load" ){
		joinTeambuilder();
		setTimeout( openbackup, 100 );

		setTimeout( function(){
			/* paste the synced team data */
			var elements = document.getElementsByTagName( "textarea" );
			chrome.storage.sync.get( 'showdown_teams_sync', function( response ){
				elements[0].innerHTML = response.showdown_teams_sync;
				console.log( 'got response' );
			} );
		}, 200 );

		setTimeout( function(){
			/* save it */
			document.getElementsByName( "saveBackup" )[0].click();
			console.log( 'saved team' );
		}, 300 );

		setTimeout( function(){
			document.getElementsByName( "closeRoom" )[0].click();
		}, 400 );
	}else if( request == "save" ){
		/* join the teambuild room */
		joinTeambuilder();

		setTimeout( openbackup, 100 );

		setTimeout( function(){
			/* paste the synced team data */
			var elements = document.getElementsByTagName( "textarea" );
			chrome.storage.sync.set( {'showdown_teams_sync': elements[0].innerHTML} );
		}, 200 );

		setTimeout( function(){
			/* close it */
			document.getElementsByName( "back" )[0].click();
			console.log( 'clicked back' );
		}, 300 );
		setTimeout( function(){
			document.getElementsByName( "closeRoom" )[0].click();
		}, 400 );
	}
} );