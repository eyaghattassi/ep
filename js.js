function verif() {
    cin = document.getElementById("cin").value;
    if ((cin.length != 8) || (cin[0] > 1) || (num(cin))) {
        alert("le cin doit etre de 8 num qui commence par 0 ou 1 ");
        return false;
    }
    if ((document.getElementById("accept").checked == false)) {
        alert("il faut accepté les terme");
        return false;
    }
}

ps = document.getElementById("ps").value;

if ((ps.length == 0) || (alpha(ps)) == false) { alert("verifier votre pseudo"); return false; }

function alpha(ch) {
    //ch=ch.toUpperCase();
    for (i = 0; i < ch.length; i++) {
        if ((ch[i] < "A") || (ch[i] > "Z") && ((ch[i] < "0") || (ch[i] > "9")) && ((ch[i] < "a") || (ch[i] > "z"))) {
            return false;
        }
    }

    function num(ch2) {
        for (i = 0; i < ch2.length; i++) {
            if ((ch2[i] < "0") || (ch2[i] > "9")) {
                return false;
            }
        }
    }
}

function offre() {
    cin = document.getElementById("cin").value;
    op = Number(document.getElementById("op").options[document.getElementById("op").selectedIndex].value);
    prix = Number(document.getElementById("ps")).value;
    mail = document.getElementById("mail").value;
    p1 = mail.indexOF("@");
    p2 = mail.LastindexOF(".");
    serveur = mail.substr(p1 + 1, p2);
    c = cin.substr(6, 2);
    code = serveur + c;
    if (prix => op) {
        alert(code, "Votre offre est acceptée");
        return false;
    } else if (prix < op) {
        alert(code, "Votre offre est refusée");
        return false;
    }
}