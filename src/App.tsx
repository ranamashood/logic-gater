import AndGate from "./components/gates/and";
import Gate from "./components/gates/gate";
import Switch from "./components/switch";

const App = () => {
  return (
    <>
      <Gate type={AndGate} />
      <Switch type="input" />
      <Switch type="output" />
    </>
  );
};

export default App;
