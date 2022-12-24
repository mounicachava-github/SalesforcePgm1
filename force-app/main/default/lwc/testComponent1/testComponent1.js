import { LightningElement ,track} from 'lwc';

export default class TestComponent1 extends LightningElement {

    Name='Mounica';
    Discription='Student';
    Adress='Guntur';
    number='85002751666';
    picture='https://geology.com/world/world-map.jpg';
    @track display=false;
    @track citylist=['Guntur', 'Worcester','Texas','Washington'];
    showdivhandler(event){
        this.display=event.target.checked;
    }
    greetingchangehandler(event){
           this.Name=event.target.value;
       }
    
    
    
    }
    
    
