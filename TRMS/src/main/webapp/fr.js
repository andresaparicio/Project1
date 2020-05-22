window.onload= function(){
    console.log("in onload");
    document.getElementById("frSubmitGet").addEventListener("click",getFr,false);
    document.getElementById("frFormSubmit").addEventListener("click",postFr,false);
}

function getFr(){
    console.log("in getFr");
    let frid=document.getElementById("frIDInput").value;
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange= function(){
        console.log( "in ORSC "+xhr.readyState);
        if(xhr.readyState==4 && xhr.status==200){
            console.log(xhr.responseText);
            var vg= JSON.parse(xhr.responseText);
            loadFr(fr);
        }
    }
    xhr.open("GET","http://localhost:8080/TRMS/fr?frid="+frid,true);
    xhr.send();
}

function loadFr(fr){
    document.getElementById("Form_Id").innerHTML=fr.Form_id;
    document.getElementById("Emp_Name").innerHTML=fr.Emp_name;
    document.getElementById("Emp_Last_Name").innerHTML=fr.Emp_last_name;
    document.getElementById("Cost_Ammount").innerHTML=fr.Cost_ammount;
}

function jsonBuilder(){
    var elements= document.getElementById("Form").elements;
    var obj={};
    for(var i=0; i<elements.length-1;i++){
        var item=elements.item(i);
        obj[item.name]=item.value;
        console.log(obj);
    }
    var json=JSON.stringify(obj);
    console.log(json);
    return json;
}

function postFr(){
    console.log("in postFr");
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange= function(){
        console.log( "in ORSC "+xhr.readyState);
        if(xhr.readyState==4 && xhr.status==200){
            console.log(xhr.responseText);
        }
    }
    xhr.open("POST","http://localhost:8080/JSONDemo/fr",true);
    var payload=jsonBuilder();
    xhr.send(payload);
}