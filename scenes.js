/*
    Link format:
    [sceneName](link text)
*/

var start ={

	text:"Hi, Welcome to Welick, The Aim of this Game to leave\
	 [first](start)"

}
loadScene(start)


var first={
	text: "You wake up in a room with 3 doors, [kitchen](kitchen)\ 
	,[wardrobe](wardrobe), [toilet](Toilet)"

}
var room= {
	text: "You are back in the room, bored with nothing to \
	do. You need to find something to [kitchen](eat), new clothes to \
	[wardrobe](wear) and to take a [toilet](piss)"
}

var toilet ={
	text: "You go into the toilet, you see a [cup](cup), some \
	[towels](towels) and a foggy [mirror](mirror)  "
}

var mirror={
	text: "The mirror 'ANDIE' written on it with [toothpaste](toothpaste), \
	you should consider going back to the [room](room). "
}
var kitchen={
	text: "The kitchen is a mess, there is a [note](note) on the floor and \
	there is also a heap of plates on the sink. there is a lot of bugs too,\
	you consider going back to the [room](room)"
}
var note= {
	text: "The note says 'you are running out of time', in some Weird \
	[ink](ink), the entire place just got more creepy "
}
var ink={
	text:" The ink is possibly blood, also the door just got jammed,\ 
	your are better off looking around the [kitchen](kitchen)"
}