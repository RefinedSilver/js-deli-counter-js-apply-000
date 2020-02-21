function takeANumber(currentLine, custName) {
  let nextInLine = [];

  nextInLine.push(`Welcome, ${custName}. You are number ${currentLine.length} in line.`);
    return nextInLine;
}

function nowServing (currentLine) {
	let pastServ = [];
	var i = 0;
	let currServ = () => ('Currently serving ' + currentLine[i]+'.');

	if (currentLine.length === 0) {
		return "There is nobody waiting to be served!"
	} else {
		return currServ();
	}

	if (currentLine[i] === currentLine[0]) {
		do {
			currServ();

			i++;
		} while (i > 0 && i < 25);

		return pastServ.push(currServ[0].unshift());
	}
}
function currentLine(currentLine) {
	let currPos = 0;

	do {
		currPos;
		if (currPos === 0 && currentLine == 0) {
			return "The line is currently empty.";
		} else {
			return "The line is currently: " + [currPos+1] + ". " + currentLine[currPos] + ", " + [currPos+2] + ". " + currentLine[currPos+1] + ", " + [currPos+3] + ". " + currentLine[currPos+2] + "";
		}
	} while (currPos > 0 && currPos < 100);
	currPos++
}
