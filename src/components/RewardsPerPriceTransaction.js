import React from 'react';

export const RewardsPerPriceTransaction = ({ transactionid, price, rewards, date }) => (
    <li>
        <div> Transactionid: {transactionid}</div>
        <div> price: {price}</div>
        <div> rewards: {rewards}</div>
        <div> date: {date}</div>
    </li>
)