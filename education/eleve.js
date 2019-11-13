
let form=document.getElementById("form");
let nom=document.getElementById("nom");
let prenom=document.getElementById("prenom");
let date=document.getElementById("date");
let add=document.getElementById("add");

let error=document.getElementById("error");
let option=document.getElementById("option");
let valider=document.getElementById("valider");

   
   
   nom.addEventListener("focusout",function(){
    if(this.value==""){
        error.innerHTML='<div class="alert alert-danger">veillez renseigner sur le champ nom</div>'
    
    }});

    prenom.addEventListener("focusout",function(){
        if(this.value==""){
            error.innerHTML='<div class="alert alert-danger">veillez renseigner sur le champ prenom</div>'
        
        }});
        date.addEventListener("focusout",function(){
            if(this.value==""){
                error.innerHTML='<div class="alert alert-danger">veillez renseigner sur le champ date</div>'
            
            }});
            add.addEventListener("focusout",function(){
                if(this.value==""){
                    error.innerHTML='<div class="alert alert-danger">veillez renseigner sur le champ nom</div>'
                
                }});
                option.addEventListener("focusout",function(){
                    if(this.value==""){
                        error.innerHTML='<div class="alert alert-danger">veillez renseigner sur le champ option</div>'
                    
                    }});
                

                    form.addEventListener("submit",function(e){
                        e.preventDefault();
                        valider.addEventListener("click",function(){

                    if(nom.value=="" && prenom.value=="" && date.value=="" && add.value=="" 
                    && option.value!=""){
                        alert("veillez saisir les champs");
                       
                    
                    }else{
                        alert("les donners sont enregistrer");
                    }form.submit();
                }) });
