
// colorchange end
var b = 0;
var i = 0;
var o = 0;
// apple
let amount = document.getElementById("userAmount");
function applebuttonClick() {
    let fruitmoney=document.getElementById("userAmount").value;

        i++;
        fruittotal= i*10+o*15+b*7;
        if(fruittotal >fruitmoney){
            alert('insufficient balance for this activity');
        }
        else{
            document.getElementById('apple').value = i;    
            document.getElementById('total').value = fruittotal;

        }

}
function applebuttonminus() {
    let fruitmoney=document.getElementById("userAmount").value;    
    i--;
        fruittotal= i*10+o*15+b*7;
    if( fruittotal<= 0 ){
    alert('OOooOps Try a valid number');

    }
    else{
        document.getElementById('apple').value = i;    
        document.getElementById('total').value = fruittotal;

    }

}
// apple end
// orange

function orangebuttonClick() {
    let fruitmoney=document.getElementById("userAmount").value;    
        o++;
        fruittotal= i*10+o*15+b*7;
        if(fruittotal >fruitmoney){
            alert('insufficient balance for this activity');
        }
        else{
            document.getElementById('orangeMinus').value = o;    
            document.getElementById('total').value = fruittotal;

        }
        

}
function orangebuttonminus() {
    
    o--;
    document.getElementById('orangeMinus').value = o;    
    fruittotal= i*10+o*15+b*7;
    document.getElementById('total').value = fruittotal;
    if( fruittotal<= 0 ){
        alert('OOooOps Try a valid number');
    
        }
        else{
            document.getElementById('orangeMinus').value = o;    
            document.getElementById('total').value = fruittotal;
    
        }

}
// orange end
// banana start

function bananabuttonClick() {
    let fruitmoney=document.getElementById("userAmount").value;
    
        b++;
        fruittotal= i*10+o*10+b*7;
        if(fruittotal >fruitmoney){
            alert('insufficient balance for this activity');
        }
        else{
            document.getElementById('banana').value = b;    
            document.getElementById('total').value = fruittotal;

        }
        

}
function bananabuttonminus() {
    
    b--;
    fruittotal= i*10+o*15+b*7;
    if( fruittotal<= 0 ){
        alert('OOooOps Try a valid number');
    
        }
        else{
            document.getElementById('banana').value = b;    
            document.getElementById('total').value = fruittotal;
    
        }

}
  

    




