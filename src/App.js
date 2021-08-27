import './App.css';
import data from "./dataSet.json";
import Transaction from './components/Transaction';

const App = () => {
  const { customerProfiles } = data;
  return (
    <div>
      <table id="customers">
        <tr>
          <th>Customer ID</th>
          <th>All Transactions with Prices</th>
          <th>Last three months transactions</th>
          <th>Total Rewards</th>
          <th>lastThreeMonthsRewards</th>
        </tr>
        {customerProfiles.map(customer => (<Transaction customer={customer} customerId={customer.customerId} />))}
      </table>   
    </div>
  );
}

export default App;
