/*
http://www.colour-journal.org/2010/5/10/10510article.htm
http://www.colour-journal.org/2010/5/10/figures/13.jpg
*/

var lookupMap = { '!': '<br clear="all" />' },
    alphabetColors = {
		'a' : '#ea8cff',
		'b' : '#0b5dd3',
		'c' : '#852e05',
		'd' : '#3a0049',
		'e' : '#242424',
		'f' : '#0a4c25',
		'g' : '#2ac839',
		'h' : '#12897c',
		'i' : '#8f8f8f',
		'j' : '#86ffa6',
		'k' : '#7c6905',
		'l' : '#8dc507',
		'm' : '#b20074',
		'n' : '#05236d',
		'o' : '#fc930b',
		'p' : '#fd94ad',
		'q' : '#345600',
		'r' : '#fb0010',
		's' : '#52f0ed',
		't' : '#12897c',
		'u' : '#daff54',
		'v' : '#5f00ff',
		'w' : '#850004',
		'x' : '#feff6c',
		'y' : '#f8dd0a',
		'z' : '#fc380a'	
	};

var chromaconate = function(input) {	
	var output = "";

	// Make input string into lowercase, use '!' to denote linebreaks, and remove
	// all other non-color-coded characters.
	input = input.toLowerCase().replace(/\n\s*/gi, '!').replace(/[^a-z! ]/gi, '');
		
	// Chew through the input, memoizing the characters into the lookup map as we go
	for (var i = 0; i < input.length; i++) {
		var currentChar = input[i];		
		if (!(currentChar in lookupMap)) {
			lookupMap[currentChar] =
				"<div style=\"background-color: " +
				(alphabetColors[currentChar] || "transparent") +
				"\"></div>\n" ;
		}
		output += lookupMap[currentChar];
	}
	
	return output;
};

