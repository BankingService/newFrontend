import { Timestamp } from "rxjs";

export class Transaction {
    private fromAccountNumber:string;
	private toAccountNumber:string;
	private transactionAmount:number;
	private transactionModeId:number;
	private transactionDateTime:string;
	private transactionPassword:string;
	private remark:string;
    private customerId:string;
    
    constructor( fromAccountNumber:string,
         toAccountNumber:string,
        transactionAmount:number,
         transactionModeId:number,
         
         transactionPassword:string,
         remark:string,
         customerId:string){
            this.fromAccountNumber=fromAccountNumber;
            this.toAccountNumber=toAccountNumber;
            this.transactionAmount=transactionAmount;
            this.transactionModeId=transactionModeId;
            this.transactionPassword=transactionPassword;
            this.remark=remark;
            this.customerId=customerId;

        }
}
