var name_array =[];

function sub () {
    var n1 = document.getElementById("name1").value;
    var n2 = document.getElementById("name2").value;
    var n3 = document.getElementById("name3").value;
    var n4 = document.getElementById("name4").value;
    var n5 = document.getElementById("name5").value;
    name_array.push(n1);
    name_array.push(n2);
    name_array.push(n3);
    name_array.push(n4);
    name_array.push(n5);
    document.getElementById("output").innerHTML=name_array;
    document.getElementById("sort").style.display="inline-block";
}

function sorted() {
    name_array.sort();
    document.getElementById("output").innerHTML=name_array;
    
}