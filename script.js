let string ="";

let buttons=document.querySelectorAll('.btn');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e);
        if(e.target.innerHTML=='=')
        {
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C')
        {
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='X')
        {
            string=string.toString().slice(0,-1);
            document.querySelector('input').value=string;
        }
        else{
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})