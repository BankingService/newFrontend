export class Beneficiary {
    private customerId:number;
	private beneficiaryAccountNumber:number;
	private beneficiaryName:string;
    private beneficiaryNickName:string;
    private beneficiaryIfsc:string;

    constructor(customerId:number,beneficiaryAccountNumber:number,beneficiaryName:string,
        beneficiaryNickName:string,beneficiaryIfsc:string){
            this.customerId=customerId;
            this.beneficiaryAccountNumber=beneficiaryAccountNumber;
            this.beneficiaryName=beneficiaryName;
            this.beneficiaryNickName=beneficiaryNickName;
            this.beneficiaryIfsc=beneficiaryIfsc;

    }

}
