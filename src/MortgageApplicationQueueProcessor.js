const WrongDataException = require('./exceptions/WrongDataException');

class MortgageApplicationQueueProcessor {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }

    processRequest(customerId, amountRequested) {
        const customer = this.customerRepository.get(customerId);

        if (customer === null)
            throw new WrongDataException(MortgageApplicationQueueProcessor.MESSAGE_INVALID_CUSTOMER);

        customer.processMortgage(amountRequested);
    }
}

MortgageApplicationQueueProcessor.MESSAGE_INVALID_CUSTOMER = 'Customer not found!';

module.exports = MortgageApplicationQueueProcessor;
