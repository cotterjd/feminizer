function feminize (oldtext, newtext) {
	const nil = null 
	, regex1 = new RegExp(' '+oldtext+' ', 'gi')
	, regex2 = new RegExp(' '+oldtext+'. ', 'gi')
	;

	console.log("text replaced: ", regex1, regex2);
	console.log("replaced with: ", newtext);
	document.querySelectorAll('.bodyText')[0].innerHTML = document.querySelectorAll('.bodyText')[0].innerHTML.replace(regex1, ' '+newtext+' ')
	document.querySelectorAll('.bodyText')[0].innerHTML = document.querySelectorAll('.bodyText')[0].innerHTML.replace(regex2, ' '+newtext+'. ')
}

feminize('his', 'hers')
feminize('him', 'her')
feminize('he', 'she')
feminize("he'll", "she'll")
feminize("he's", "she's")

console.log("this page has been feminized")
