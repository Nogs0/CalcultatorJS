let resultado = '';

function test(n){
    if(n >= 0 && n<=9){
        return true;
    }
    return false;
}
function verifyArr(args){
    let last = args.slice(-1);
    if(last == '+' || last == '-' || last == '/' || last =='*'){
        return true;
    }
    return false;
}
function verify(last){
    if(last == '+' || last == '-' || last == '/' || last =='*')
        return true;
    else return false;
}
function insert(num){
    let number = document.getElementById('result').innerHTML; 

    if(verifyArr(number) && verify(num)){
        document.getElementById('result').innerHTML = number;
    }
    else if(resultado && number){
        if(verify(num)){
            document.getElementById('result').innerHTML = number + num;
            resultado = '';
        }
    }
    else if(resultado == ''){
        document.getElementById('result').innerHTML = number + num;
    }
}

function clean(){
    document.getElementById('result').innerHTML = '';
    resultado = '';
}

function del(){
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1)
}

function end(){
    let result = document.getElementById('result').innerHTML;
    if(result){
        resultado = eval(result);
        if(resultado == "Infinity"){
            document.getElementById('result').innerHTML = "Error";
        }
        else{
            document.getElementById('result').innerHTML = resultado;
        }
    }
    else{   
        document.getElementById('result').innerHTML = "Error";
    }

}