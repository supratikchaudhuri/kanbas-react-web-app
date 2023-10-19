import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringify from "./JsonStringify";
import FindFunction from "./FindFunction";
import FindIndexFunction from "./FindIndexFunction";
import FilterFunction from "./FilterFunction";

function WorkingWithArrays() {

  console.log("Working With Array");

  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ['string1', 'string2'];
  let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
  ];

  console.log(functionScoped);
  console.log(blockScoped);
  console.log(constant1);
  console.log(numberArray1);
  console.log(stringArray1);
  console.log(variableArray1);

  return (
    <div>
      <h2>Working With Arrays</h2>
      <div>numberArray1: {numberArray1}</div>
      <div>stringArray1: {stringArray1}</div>
      <div>variableArray1: {variableArray1}</div>

      <ArrayIndexAndLength/>
      <AddingAndRemovingDataToFromArrays/>
      <ForLoops/>
      <MapFunction/>
      <JsonStringify/>
      <FindFunction/>
      <FindIndexFunction/>
      <FilterFunction/>
    </div>
  )
}

export default WorkingWithArrays