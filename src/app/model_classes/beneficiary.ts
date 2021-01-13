export class Beneficiary {
    private beneficiaryID:number;
	private beneficiaryAccountNumber:number;
	private beneficiaryName:string;
    private beneficiaryNickName:string;
    private beneficiaryIfsc:string;

    constructor(beneficiaryID:number,beneficiaryAccountNumber:number,beneficiaryName:string,
        beneficiaryNickName:string,beneficiaryIfsc:string){
            this.beneficiaryID=beneficiaryID;
            this.beneficiaryAccountNumber=beneficiaryAccountNumber;
            this.beneficiaryName=beneficiaryName;
            this.beneficiaryNickName=beneficiaryNickName;
            this.beneficiaryIfsc=beneficiaryIfsc;

    }

}
