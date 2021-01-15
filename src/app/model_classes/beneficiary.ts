export class Beneficiary {
    private customerID:number;
	private beneficiaryAccountNumber:number;
	private beneficiaryName:string;
    private beneficiaryNickName:string;
    private beneficiaryIfsc:string;

    constructor(customerID:number,beneficiaryAccountNumber:number,beneficiaryName:string,
        beneficiaryNickName:string,beneficiaryIfsc:string){
            this.customerID=customerID;
            this.beneficiaryAccountNumber=beneficiaryAccountNumber;
            this.beneficiaryName=beneficiaryName;
            this.beneficiaryNickName=beneficiaryNickName;
            this.beneficiaryIfsc=beneficiaryIfsc;
            

    }

}
