function Sum(){

    function cemHesabla(numbers: number[]): number {
        return numbers.reduce((cem, num) => cem + num, 0);
      }
      
      const numArray = [1, 2, 3, 4, 5];
      const cem = cemHesabla(numArray);
      
      console.log(cem); 
      

  return (
    <>
        <h1>Calculator</h1>
        <p>{cem}</p>
        </>
    )
};
export default Sum;