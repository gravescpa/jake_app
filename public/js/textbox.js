function get_names(student_number) {

//Create an input type dynamically.
var element = document.createElement("input");

//Create Labels
var label = document.createElement("Label");
label.innerHTML = "New Label";     

//Assign different attributes to the element.
element.setAttribute("type", "text");
element.setAttribute("value", "");
element.setAttribute("name", "Test Name");
element.setAttribute("style", "width:200px");

label.setAttribute("style", "font-weight:normal");

// 'foobar' is the div id, where new fields are to be added
var foo = document.getElementById("fooBar");

//Append the element in page (in span).
foo.appendChild(label);
foo.appendChild(element);
}