export class Register {

    private accountNumber : string
    private loginPassword : string
    private transactionPassword : string
    private profilePassword : string
    

    constructor(accountNumber, loginPassword, transactionPassword, profilePassword){
        this.accountNumber=accountNumber
        this.loginPassword=loginPassword
        this.transactionPassword=transactionPassword
        this.profilePassword=profilePassword
    }
}
