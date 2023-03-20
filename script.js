function validateForm() {
    let pNume = document.forms["myForm"]["pnume"].value;
    if(pNume.length<2){
        alert("Prenumele trebuie sa contina cel putin 2 litere");
        return false;
    }

    let nume = document.forms["myForm"]["nume"].value;
    if(nume.length<2){
        alert("Numele trebuie sa contina cel putin 2 litere");
        return false;
    }
}