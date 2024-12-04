function Young() {
  function yetkinlik(age: number): string {
    if (age >= 14) {
      return "AGE 18+ ";
    } else {
        return "false";
    }
}

  const young = yetkinlik(15);
  console.log(young);

  return (
    <>
      <h1>Yetkinlik</h1>
      <p>{young}</p>
    </>
  );
}

export default Young;
