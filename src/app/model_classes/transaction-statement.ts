

export class TransactionStatement {
    private date: string;
    private transactionId: number;
    private message: string;
    private transactionType: string;
    private transactionAmount: number;
    private updatedBalance: number;

    constructor(date: string,
        transactionId: number,
        message: string,
        transactionType: string,
        transactionAmount: number,
        updatedBalance: number) {

        this.transactionAmount = transactionAmount;
        this.transactionType = transactionType;
        this.date = date;
        this.message = message;
        this.transactionId = transactionId
        this.updatedBalance = updatedBalance;

    }
}
