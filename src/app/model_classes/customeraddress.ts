import { pseudoRandomBytes } from "crypto";

export class Customeraddress {
    private  cAddressLine1:string;
	private  pAddressLine1:string;
	private  cAddressLine2:string;
	private  pAddressLine2:string;
	private  cLandMark:string;
	private  pLandMark:string;
	private  cCity:string;
	private  pCity:string;
	private  cState:string;
	private  pState:string;
	private  cPincode:number;
    private  pPincode:number;
    
    constructor(cAddressLine1:string,pAddressLine1:string,cAddressLine2:string,pAddressLine2:string,
        cLandMark:string,pLandMark:string,cCity:string,pCity:string,cState:string,pState:string,cPincode:number,
        pPincode:number){
            this.cAddressLine1=cAddressLine1;
            this.pAddressLine1=pAddressLine1;
            this.cAddressLine2=cAddressLine2;
            this.pAddressLine2=pAddressLine2;
            this.cLandMark=cLandMark;
            this.pLandMark=pLandMark;
            this.cCity=cCity;
            this.pCity=pCity;
            this.cState=cState;
            this.pState=pState;
            this.cPincode=cPincode;
            this.pPincode=pPincode;

    }
}
