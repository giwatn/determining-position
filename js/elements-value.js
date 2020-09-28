// SELECTING ELEMENTS USING ID ATTRIBUTES
//Select the element and store it in a variable
var elHt = document.getElementById('one');
// Change the value of the class attribute
//elHt.className = 'cool';
//Select the element and store it in a variable
var elHt = document.getElementById('two');
// Change the value of the class attribute
// elHt.className = 'cool';

// SELECTING AN ELEMENT FROM A NODE-LIST
var elements = document.getElementsByClassName('hot');
if (elements.length >= 1) {
    var firstItem = elements.item(0);
    firstItem.className = 'lighter';
}

// MORE EXAMPLE
var elements = document.getElementsByClassName('hot');
if (elements.length >= 1) {
    var firstItem = elements[2];
    firstItem.className = 'lighter';
}

// MORE EXAMPLE
var elements = document.getElementsByClassName('fair');
if (elements.length > 1) {
    var el = elements[3];
    el.className = 'cool';
}

// SELECTING ELEMENTS BY TAB NAME
var elements = document.getElementsByTagName('li');
if (elements.length > 0) {
    var el = elements[8];
    el.className = 'cool';
}

// SELECTING ELEMENTS USING CSS SELECTORS
// querySelector() only returns the first match
var elements = document.querySelector('li.hot');
elements.className = 'fair';

// querySelectorAll returns a nodeList
var el = document.querySelectorAll('li.bright');
el[1].className = 'hot';

// REPEATING(LOOP) ACTIONS FOR ENTIRE NODE-LIST
var lightDarkItems = document.querySelectorAll('li.light-dark');
for (var i = 1; i < lightDarkItems.length; i++) {
    lightDarkItems[i].className = 'cool';
}

// MORE LOOPING EXAMPLE WITH DECISION(IF) THROUGH A NODE-LIST
var whiteItems = document.querySelectorAll('li.white');
if (whiteItems.length > 0) {
    for (var i = 2; i < whiteItems.length; i++) {
        whiteItems[i].className = 'fair';
    }
}

// PREVIOUS & NEXT SIBLING
// Starting point of the siblings and find its siblings
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// Change the values of the siblings' class attributes
prevItem.className = 'hot';
nextItem.className = 'cool';

// FIRST & LAST CHILD
// Starting point of the siblings and find its children
var startItem1 = document.getElementsByTagName('ul')[0];
var firstItem = startItem1.firstChild;
var lastItem = startItem1.lastChild;

// Change the values of the children class attributes
firstItem.setAttribute('class', 'white');
lastItem.setAttribute('class', 'cool');

//ACCESS & UPDATE A TEXT NODE WITH NODE-VALUE
var nodEv = document.getElementById('one').firstChild.nextSibling.nodeValue;
var firstItem = nodEv.firstChild;
var nextSib = nodEv.nextSibling;