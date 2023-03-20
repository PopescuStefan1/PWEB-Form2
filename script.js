function validateForm() {
    let pNume = document.forms["myForm"]["pnume"].value;
    if (pNume.length < 2) {
        alert("Prenumele trebuie sa contina cel putin 2 litere");
        return false;
    }

    let nume = document.forms["myForm"]["nume"].value;
    if (nume.length < 2) {
        alert("Numele trebuie sa contina cel putin 2 litere");
        return false;
    }

    let email = document.forms["myForm"]["email"].value;
    if (!(email.includes("@")) || !(email.includes("."))) {
        alert("Email-ul trebuie sa contina @ si sa se termine in .ceva");
        return false;
    }
}