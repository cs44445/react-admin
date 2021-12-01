function App() {
  const props = { name: 'jojo', age: 15, city: "shanghai" }
  return (
    <div className="App">
      app
      <Test>
        获取内推
        <Home {...props} />
      </Test>
    </div>
  );
}

function Test(props) {
  return (
    <div>
      test 组件
      <h2>hhsssxxxx</h2>
      <h2>{props.children}</h2>
    </div>
  )
}
function Home(props) {
  return (
    <div>
      home page
      <Header {...props} />
    </div>

  )
}

function Header(props) {
  const { name, age, city } = props
  return (
    <div>
      header
      <div>
        {name}
      </div>
      <div>
        {age}
      </div>
      <div>
        {city}
      </div>
    </div>
  )
}

export default App;
