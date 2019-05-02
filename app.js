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
    const lakme = ['L','A','K','M','E'];

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
    
    function calculateD_Queue(array){
        
        
        
        
        // CREATE THE D-QUEUE TO MINIMIZE FLAMES ARRAY TO SINGLE LETTER 
        
        let cur=0;    // global variable to locate the current position of the pointer of the flames array
        let pass=0;
        
        while(array.length>=2){
            
            if(cur<0){
                cur=0;
                }
            for(let i=0; i<number; i++){
                cur++;
                if(cur>array.length-1){
                    cur=0;
                }  
            }
           cur--;
            array.splice(cur,1);
        }
    
    }

    calculateD_Queue(flames);
    calculateD_Queue(lakme);

    let result,result1;
    
    switch(flames[0]){
        case "F": this.result= "FRIENDS";break;
        case "L": this.result= "LOVE";break;
        case "A": this.result= "ADMIRE";break;
        case "M": this.result= "MARRY";break;
        case "E": this.result= "ENEMY";break;
        case "S": this.result= "SIBLINGS";break;
    };
    switch(lakme[0]){
        case "F": this.result1= "FRIENDS";break;
        case "L": this.result1= "LOVE";break;
        case "A": this.result1= "ADMIRE";break;
        case "M": this.result1= "MARRY";break;
        case "E": this.result1= "ENEMY";break;
        case "S": this.result1= "SIBLINGS";break;
    };
    
    this._showOutput();
    this._onReset();
}

_showOutput(){

    const html=`<h3 class="score"><span> As per FLAMES : ${this.result} </span></br>
                <span> As per LAKME : ${this.result1} </span></h3>`;

    document.getElementById('result').insertAdjacentHTML("beforeend",html);
    
}

showInfo(){
    document.getElementById('about').classList.remove('invisible');
}
hideInfo(){
    document.getElementById('about').classList.add('invisible');
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



// ******************************* When the info button is clicked *************************************

document.getElementById('btn').addEventListener('click',Obj.showInfo);

document.getElementById('return').addEventListener('click',(e)=>{
    Obj.hideInfo();
    e.preventDefault();
});