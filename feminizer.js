function feminize (oldtext, newtext) {
	const nil = null 
	, regex1 = new RegExp(oldtext, 'gi')
	;

	console.log("text replaced: ", regex1, regex2);
	console.log("replaced with: ", newtext);
	document.querySelectorAll('.bodyText')[0].innerHTML = document.querySelectorAll('.bodyText')[0].innerHTML.replace(regex1, ' '+newtext+' ')
	document.querySelectorAll('.bodyText')[0].innerHTML = document.querySelectorAll('.bodyText')[0].innerHTML.replace(regex2, ' '+newtext+'. ')
}

feminize(' he ', ' she ')
feminize(' he. ', ' she. ')
feminize(' his ', ' her ')
feminize(' his. ', ' her. ')
feminize(' him ', ' her ')
feminize(' him. ', ' her. ')
feminize(" he'll ", " she'll")
feminize(" he'll. ", " she'll. ")
feminize(" he's ", " she's ")
feminize(" he's. ", " she's. ")
feminize(" himelf ", " herself ")
feminize(" himelf. ", " herself. ")

console.log("this page has been feminized")
