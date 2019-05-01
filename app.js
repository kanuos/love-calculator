class LoveCalculator{

_getNames(){
    const firstName= document.getElementById('first').value;
    const secondName= document.getElementById('second').value;

    const regExp= /[a-z]{3,12}/gi; 
    
    // if(regExp.test(firstName) && regExp.test(secondName)){
        this.firstName=firstName;
        this.secondName=secondName;
        this._calculateResult();
        // this._showOutput();
    // }
}

_calculateResult(){
    
    const flames = ["F","L","A","M","E","S"];

    // REMOVE COMMON LETTERS FROM THE NAMES
    const resultantString=this.firstName.concat(this.secondName).split('');

    for(let i=0 ; i < resultantString.length; i++){
        for(let j=i+1 ;j<resultantString.length; j++){

            if(resultantString[i]===resultantString[j]){
                resultantString.splice(j,1);
                resultantString.splice(i,1);
            }
        }
    }

    const number= resultantString.length;
    
    // CREATE THE D-QUEUE TO MINIMIZE FLAMES ARRAY TO SINGLE LETTER 
    
    let cur=0;    // global variable to locate the current position of the pointer of the flames array
    
    while(flames.length>1){
        for(let i=0; i<number; i++){
            if(cur>flames.length){
                cur=0;
            }
            cur++;
        }
        flames.splice(cur,1);

    }

    console.log(flames);

    this._showOutput(number);
    this._onReset();
}

_showOutput(str1){

    console.log(str1);
    
}

_onSubmit(){

    const sumbit= document.getElementById('form');
    
    sumbit.addEventListener('submit', (e)=>{
        e.preventDefault();
        this._getNames();
    });
}

_onReset(){

    document.getElementById('first').value='';
    document.getElementById('second').value='';
    
    document.getElementById('first').focus();
}

init(){
    this._onSubmit();
    document.getElementById('reset').addEventListener('click', this._onReset);
}

}


const Obj = new LoveCalculator();

Obj.init();