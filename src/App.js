import Daisy from "./Daisy";
import Rating from "./Rating";

function App() {
  return (
    <div className="App">
      <button className="btn btn-primary mx-auto my-3 block">
        Please Rate Us
      </button>
      {/* <Daisy /> */}
      <Rating />
    </div>
  );
}

export default App;
