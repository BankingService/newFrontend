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
        grossAnnualIncome:number,panNumber:string,address:Customeraddress,customerDoc:Customerdocs){
            this.title=title;
            this.firstName=firstName;
            this.middleName=middleName;
            this.lastName=lastName;
            this.fatherName=fatherName;
            this.mobileNumber=mobileNumber;
            this.emailId=emailId;
            this.aadharCardNo=aadharCardNo;
            this.dateOfBirth=dateOfBirth;
            this.occupationType=occupationType;
            this.sourceOfIncome=sourceOfIncome;
            this.grossAnnualIncome=grossAnnualIncome;
            this.panNumber=panNumber;
            this.address=address;
            this.customerDoc=customerDoc;

    }
}
