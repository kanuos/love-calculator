class LoveCalculator{

_getNames(){
    const firstName= document.getElementById('first').value;
    const secondName= document.getElementById('second').value;

    const regExp= /[a-z]{3,12}/gi; 
    
    // if(regExp.test(firstName) && regExp.test(secondName)){
        this.firstName=firstName;
        this.secondName=secondName;

        this._showOutput();
    // }
}

_showOutput(){

    console.log(this.firstName);
    console.log(this.secondName);
    
}

_onSubmit(){

    const sumbit= document.getElementById('form');

    sumbit.addEventListener('submit', (e)=>{
        e.preventDefault();
        this._getNames();
    });
}

init(){
    this._onSubmit();
}

}


const Obj = new LoveCalculator();

Obj.init();