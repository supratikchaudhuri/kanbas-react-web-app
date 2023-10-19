const ForLoops = () => {
  let stringArray1 = ['string1', 'string3'];
  let stringArray2 = [];
  for (let i = 0;i < stringArray1.length;i++) {
    const string1 = stringArray1[i];
    stringArray2.push(string1.toUpperCase());
  }

  return (
    <>
    <h3>ForLoops</h3>
    <div>stringArray2: {stringArray2}</div>
    </>
  )
}

export default ForLoops