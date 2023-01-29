document.querySelector('.cross').style.display='none'
document.body.style.backgroundColor="#d4d5e1";
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebar-go');
    if(document.querySelector('.sidebar').classList.contains('sidebar-go')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'
        // document.body.style.backgroundColor="#d4d5e1";
    }
    else{
        document.querySelector('.ham').style.display='none'
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline'
        },200);
        document.querySelector('.cross').style.display='inline'
    }
})
