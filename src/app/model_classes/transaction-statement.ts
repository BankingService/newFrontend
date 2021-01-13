

export class TransactionStatement {
    private  transactionID:number;
	private  fromAccountNumber:number;
	private  toAccountNumber:number;
	private  transactionAmount:number;
    private  transactionType:string;
    private  transactionModeId:number;
    private  transactionDateTime:string;
	private  updatedBalance:number;
    private  remark:string;
    
    constructor(transactionID:number,fromAccountNumber:number,toAccountNumber:number,transactionAmount:number,
        transactionType:string,transactionDateTime:string,updatedBalance:number, remark:string,transactionModeId:number){
            this.transactionID=transactionID;
            this.fromAccountNumber=fromAccountNumber;
            this.toAccountNumber=toAccountNumber;
            this.transactionAmount=transactionAmount;
            this.transactionType=transactionType;
            this.transactionDateTime=transactionDateTime;
            this.updatedBalance=updatedBalance;
            this.remark=remark;
            this.transactionModeId=transactionModeId;
    }
}
