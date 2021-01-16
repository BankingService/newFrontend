export class Register {

    private customerId : string
    private loginPassword : string
    private transactionPassword : string
    private profilePassword : string
    

    constructor(customerId, loginPassword, transactionPassword, profilePassword){
        this.customerId=customerId
        this.loginPassword=loginPassword
        this.transactionPassword=transactionPassword
        this.profilePassword=profilePassword
    }
}
