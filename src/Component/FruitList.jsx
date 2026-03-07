function FruitList() {
  const fruits = ["蘋果", "香蕉", "橘子"];
  console.log(fruits.length);
  return (
    <>
      {fruits.length > 0 ? (
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      ) : (
        <p>目前沒有水果</p>
      )}
    </>
  );
}

export default FruitList;
