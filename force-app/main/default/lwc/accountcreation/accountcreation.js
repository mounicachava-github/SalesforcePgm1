import { LightningElement,track} from 'lwc';
import { createRecord } from "lightning/uiRecordApi";


export default class RegistrationPage extends LightningElement {
    @track accountName;
    @track accountPhone;
   

    stdName(event){
        this.accountName = event.target.value;
    }

    phone(event){
        this.accountPhone = event.target.value;
    }

     createAccount(){
        const fields = {'Name' : this.accountName, 'Phone' : this.accountPhone};
        const recordInput = {apiName : 'Account', fields};

        createRecord(recordInput).then(response => {
            console.log('Account has been created : ', response.id);
        }).catch(error =>{
            console.error('Error in creating account : ', error.body.message);
        });
    }

}