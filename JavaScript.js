function Validar() {
    let idade = Number(document.getElementById("idade").value);
    let horas = Number(document.getElementById("horas").value);
    let nota = Number(document.getElementById("nota").value);

    let erros = [];

    // Validação da idade
    if (idade < 25 || idade > 45) {
        erros.push("Idade permitida (25 a 45 anos).");
    }

    // Validação das horas de voo
    if (horas < 1000) {
        erros.push("Horas de voo insuficientes (mínimo 1000).");
    }

    // Validação da nota
    if (nota < 8) {
        erros.push("Nota psicológica abaixo do mínimo (8).");
    }

    let resultado = "";

    if (erros.length === 0) {
        resultado = "✅ Aprovado!";
    } else {
        resultado = "❌ Inapto pelos seguintes motivos:<br>" + erros.join("<br>");
    }

    document.getElementById("Resultado").innerHTML = resultado;
}