export const getThreeMonthsOldData = transactions => {
    const today = new Date();
    const threeOldDate = today.setMonth(today.getMonth() - 3);
    return transactions.filter(transaction => new Date(transaction.date) > threeOldDate);
}

export const calculateRewardForTransaction = price => {
    if (price >=50 && price <= 100) {
        return price-50;
    } else if (price >100){
        return (2*(price-100) + 50);
    }
    return 0;
}