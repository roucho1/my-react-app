function Greeting({ name: test = "小狗" }) {
  console.log({ test });
  return (
    <div>
      <h1>你好，{test}！</h1>
    </div>
  );
}

export default Greeting;
