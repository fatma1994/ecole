
let form=document.getElementById("form");
let nom=document.getElementById("nom");
let email=document.getElementById("email");
let subj=document.getElementById("subj");
let mess=document.getElementById("mess");

let error=document.getElementById("error");

let envoyer=document.getElementById("envoyer");

   
   
   nom.addEventListener("focusout",function(){
    if(this.value==""){
        error.innerHTML='<div class="alert alert-danger">veillez renseigner sur le champ nom</div>'
    
    }});

    email.addEventListener("focusout",function(){
        if(this.value==""){
            error.innerHTML='<div class="alert alert-danger">veillez renseigner sur le champ email</div>'
        
        }});
        subj.addEventListener("focusout",function(){
            if(this.value==""){
                error.innerHTML='<div class="alert alert-danger">veillez renseigner sur le champ subject</div>'
            
            }});
            mess.addEventListener("focusout",function(){
                if(this.value==""){
                    error.innerHTML='<div class="alert alert-danger">veillez renseigner sur le champ message</div>'
                
                }});
               
                

                    form.addEventListener("submit",function(e){
                        e.preventDefault();
                        envoyer.addEventListener("click",function(){

                    if(nom.value=="" && email.value=="" && subj.value=="" && mess.value=="" )
                    {
                        alert("veillez saisir les champs");
                       
                    
                    }else{
                        alert("les donners sont envoyer");
                    }form.submit();
                }) });