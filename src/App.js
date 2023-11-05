import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import Entries from "./components/Entries";
import DisplayBalances from "./components/DisplayBalances";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance size="small" title="YOUR BALANCE" value="2,550.83" />

      <DisplayBalances />

      <Entries description="Something" value="104.00" isExpenses="true" />
      <MainHeader title="History" type="h3" />

      <MainHeader title="Add New Transactions" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
