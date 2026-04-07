import "./App.css";
import { calcChange, sanitizeInput } from "./utils";

const [amountDue, setAmountDue] = useState(0);
const [amountReceived, setAmountReceived] = useState(0);

const change = useCalcChange(amountDue, amountReceived);

function App() {
  // Add your code here

  return (
    <>
      {/* Add your code here */}
      <UserInputBox
        amountDue={amountDue}
        amountReceived={amountReceived}
        onDueChange={setAmountDue}
        onReceivedChange={setAmountReceived}
        onCalculate={handleCalculate}
      />

      <ChangeOutputBox {...change} />
    </>
  );
}

export default App;
