import './CSS/App.css';
import Header from "./COMPS/Header";
import NavTop from "./COMPS/NavTop";
import Container from "./COMPS/Container";
import Nav from "./COMPS/Nav";
import Content from "./COMPS/Content";

function App() {
  return (
    <div>
      <Header />
      <NavTop />
      <Container />
      <Nav />
      <Content />
    </div>
  );
}

export default App;