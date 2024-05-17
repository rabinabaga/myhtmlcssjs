window.onload = function(){
  getTextContent();
  getInnerText();
}
function getInnerText() {
  const ref = document.getElementsByClassName("unit-conversion");
  console.log("innertext", ref[0].innerText);
 const ref1 =  document.getElementsByClassName("units-title");
 console.log("is result text visible",ref1[1].checkVisibility());
}

function getTextContent() {
  const ref = document.getElementsByClassName("unit-conversion");
  console.log("text content", ref[0].textContent);
}


function convertNow(){
  const result = document.getElementsByClassName("result");

  const input_value = document.getElementsByClassName("input-units")[0].value;

  const in_feet = input_value * 3.2808;
  result[0].textContent = in_feet + " ft";
}
function convertNowInstantly(){
    const result = document.getElementsByClassName("result");
    
    const input_value = document.getElementsByClassName("input-units")[0].value;

    const in_feet = input_value * 3.2808;
    result[0].textContent = in_feet + " ft";
}