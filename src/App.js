import "./App.css";
import { Home, Food, Hardware, HardwareSpecs, Footer } from "./components";

function App() {
  return (
    <>
      <main>
        <Home />
        <Food />
        <Hardware />
        <HardwareSpecs />
      </main>
      <Footer />
    </>
  );
}

export default App;
