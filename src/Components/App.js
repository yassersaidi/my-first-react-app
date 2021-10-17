import NavMenu from "./App/NavMenu";
import Menu from "./App/Menu";
import ImagesList from "./App/ImagesList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavMenu />
      </header>
      <Menu /> 
      <ImagesList />
      </div>
  );
}

export default App;
