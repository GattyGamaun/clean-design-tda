const NotEligibleForMortgageException = require("../exceptions/NotEligibleForMortgageException");

module.exports = class Customer {
    constructor(id, firstName, lastName, balance, badCreditHistoryCount) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
        this.badCreditHistoryCount = badCreditHistoryCount;
    }

    updateBalance(amount) {
        this.balance += amount;
    }

    processMortgage(amountRequested) {
        if (this.isEligibleForMortgage(amountRequested))
            this.updateBalance(amountRequested);
        else
            throw new NotEligibleForMortgageException();
    }

    isEligibleForMortgage(amountRequested) {
        let isEligibleForMortgage = false;

        if (this.badCreditHistoryCount === 0 && this.balance > 0)
            isEligibleForMortgage = this.balance * 2 >= amountRequested;

        return isEligibleForMortgage;
    }
}
