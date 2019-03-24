const textInput= document.getElementById("input");
const removeButton= document.getElementById("remove");
const output= document.getElementById("output");
const vowels=["a","e","ı","i","o","ö","u","ü"];

removeButton.addEventListener("click",function(){
   
    let text=textInput.value;
    if(text===""){
        alert("Input can not be blank!");
    }
    else{
        let j=i=0;
        for(i=0;i<vowels.length;i++){
            for(j=0;j<text.length;j++){
                if(text[i]===vowels[j]){
                    text=text.replace(vowels[j],"");
                }
            }
        }
        text.trim();
        output.textContent=text;
    }
});


