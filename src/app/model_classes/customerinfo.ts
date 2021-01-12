import { Customeraddress } from "./customeraddress";
import { Customerdocs } from "./customerdocs";

export class Customerinfo {
    private title:string;
    private firstName:string;
    private middleName:string;
    private lastName:string;
    private fatherName:string;
    private mobileNumber:number;
	private emailId:string;
	private aadharCardNo:number;
	private dateOfBirth:Date;
	private occupationType:string;
	private sourceOfIncome:string;
	private grossAnnualIncome:number;
    private panNumber:string;
    private address:Customeraddress;
    private customerDoc:Customerdocs;

    constructor(title:string,firstName:string,middleName:string,lastName:string,fatherName:string, mobileNumber:number,
        emailId:string, aadharCardNo:number,dateOfBirth:Date,occupationType:string,sourceOfIncome:string,
        grossAnnualIncome:number,panNumber:string){

    }
}
