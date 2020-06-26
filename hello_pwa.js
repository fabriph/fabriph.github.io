
console.log('hello_pwa.js LOADED');

function indexDBTest() {
	console.log("starting test");
	var request = window.indexedDB.open('EXAMPLE_DB', 1);
	var db;
	request.onsuccess = function(event) {
	    console.log('[onsuccess]', request.result);
	    db = event.target.result; // === request.result
	};
	request.onerror = function(event) {
	    console.log('[onerror]', request.error);
	};
}

if(window.indexedDB){
    console.log('IndexedDB is supported');
    indexDBTest();
} else {
    console.log('IndexedDB NOT supported');
}
