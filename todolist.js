function convertNow(){
  const result = document.getElementsByClassName("result");

  const input_value = document.getElementsByClassName("input-units")[0].value;

  const in_feet = input_value * 3.2808;
  result[0].textContent = in_feet + " ft";
}