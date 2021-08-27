import React from 'react';
import { TransactionList } from './CalculateRewards';
import { RewardsPerPriceTransaction } from './RewardsPerPriceTransaction';

const Transaction = ({customerId, customer}) => {
    let transactionList = new TransactionList();
    customer.transactions.forEach(transaction => transactionList.addTransaction(transaction));
    const listOfAllTransactions = transactionList.getAllTransactions();
    const getLastThreeTransaction = transactionList.getLast3MonthsList();
    const getTotalRewards = transactionList.getTotalRewards();
    const lastThreeMonthsRewards = transactionList.rewardPerMonth();
    return (
        <>
          <tr>
              <td>{customerId}</td>
              <td>{listOfAllTransactions.map(item => <ul><RewardsPerPriceTransaction transactionid={item.transactionid} price={item.price} rewards={item.rewards} date={item.date} /></ul>)}</td>
              <td>{getLastThreeTransaction.map(item => <ul><RewardsPerPriceTransaction transactionid={item.transactionid} price={item.price} rewards={item.rewards} date={item.date} /></ul>)}</td>
              <td>{getTotalRewards}</td>
              <td>{lastThreeMonthsRewards.map(reward => <p>{reward}</p>)}</td>
          </tr>
        </>
    )
}

export default Transaction;