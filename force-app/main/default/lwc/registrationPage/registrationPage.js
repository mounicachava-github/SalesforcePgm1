import { LightningElement,track, wire } from 'lwc';
import { createRecord,getRecord } from "lightning/uiRecordApi";
import AccountSource from '@salesforce/schema/Account.AccountSource';

const fieldarray=['registrationpage__c.firstname__c','registrationpage__c.lastname__c','registrationpage__c.Phone__c','registrationpage__c.address__c']

export default class registrationPage extends LightningElement {
   @track accountName;
   @track studentlastname;
   @track studentcontactnumber;
   @track studentaddress;
   
    @track recordId;

    @wire(getRecord, {recordId: '$recordId', fields:fieldarray})
    accountRecord;

   firstname(event){
    this.accountName=event.target.value;
    }
    lastname(event){
        this.studentlastname=event.target.value;
    }
    phonenumber(event){
        this.studentcontactnumber=event.target.value;
    }
    address(event){
        this.studentaddress=event.target.value;
    }
   
   
    createAccount(){
        const fields = {'firstname__c' : this.accountName,'lastname__c':this.studentlastname,'Phone__c':this.studentcontactnumber,'address__c':this.studentaddress};
        const recordInput = {apiName : 'registrationpage__c', fields};

        createRecord(recordInput).then(response => {
            console.log('Account has been created : ', response.id);
            this.recordId=response.id;
        }).catch(error =>{
            console.error('Error in creating account : ', error.body.message);
        });
    }
    get retrivestdfirstname(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.firstname__c.value;
        }
        return undefined;
        }
    get retrivstdlastname(){
        if(this.accountRecord.data){
           return this.accountRecord.data.fields.lastname__c.value;
        }
        return undefined;
     }
    get retrivstdphone(){
        if(this.accountRecord.data){
          return this.accountRecord.data.fields.Phone__c.value;
        }
        return undefined;
}
    get retrivstdaddress(){
         if(this.accountRecord.data){
            return this.accountRecord.data.fields.address__c.value;
            }
        return undefined;
                    }
                        
    }


