import { Customerinfo } from './customerinfo';
import { ImageDocs } from './image-docs';

export class CreateAccount {
    private customerInfo:Customerinfo;
    private images:ImageDocs;

    constructor(customerInfo,images){
        this.customerInfo=customerInfo
        this.images=images
    }

}
