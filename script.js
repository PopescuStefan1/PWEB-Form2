function validateForm() {
    let pNume = $("form[name='myForm'] input[name='pnume']").val();
    if (pNume.length < 2) {
        alert("Prenumele trebuie sa contina cel putin 2 litere");
        return false;
    }

    let nume = $("form[name='myForm'] input[name='nume']").val();
    if (nume.length < 2) {
        alert("Numele trebuie sa contina cel putin 2 litere");
        return false;
    }

    let email = $("form[name='myForm'] input[name='email']").val();
    if (!(email.includes("@")) || !(email.includes("."))) {
        alert("Email-ul trebuie sa contina @ si sa se termine in .ceva");
        return false;
    }

    let nrTelefon = $("form[name='myForm'] input[name='telefon']").val();
    if (nrTelefon.length > 10) {
        alert("Numarul de telefon introdus este prea lung");
        return false;
    }

    let motivation = $("form[name='myForm'] textarea[name='motivatie']").val();
    if (motivation.length < 100) {
        alert("Motivatia este prea scurta");
        return false;
    } else if (motivation.length > 500) {
        alert("Motivatia este prea lunga");
        return false;
    }
}

function ButtonEnable() {
    if ($(".checkbox").is(":checked")) {
        $("#button").prop('disabled', false);
    } else {
        $("#button").prop('disabled', true);
    }
}