import { calculateRewardForTransaction } from './utils';

export class TransactionList {
    constructor() {
        this.list = [];
    }

    getLast3MonthsList() {
        var today = new Date();
        const threeOldDate = today.setMonth(today.getMonth() - 3);
        let filteredList = this.list.filter(trans => trans.transactionDate > threeOldDate);
        return filteredList.sort((a,b) => b.transactionDate - a.transactionDate);
    }

    getAllTransactions() {
        return this.list.sort((a,b) => b.transactionDate-a.transactionDate);
    }

    addTransaction(transaction) {
        this.list.push({
            transactionDate: new Date(transaction.date),
            date: transaction.date,
            rewards: calculateRewardForTransaction(transaction.price),
            price: transaction.price,
            transactionid: transaction.transactionid
        });
    }

    getTotalRewards() {
        return this.list.length ? this.list.reduce((acc,key)=>key.rewards+acc, 0) : 0;
    }

    rewardPerMonth() {
        let last3MonthRewardsInDesc = [];
        for(let i=0; i<3; i++) {
            let filteredList = this.list.filter(trans => trans.transactionDate.getMonth() == (new Date).getMonth() - i );
            last3MonthRewardsInDesc[i] = filteredList.reduce((acc,key)=>key.rewards+acc,0);
        }
        return last3MonthRewardsInDesc;
    }
}

