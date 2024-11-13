/**
 * Simples aplicativo de jogo de dados
 */

function lancar() {
    // Gerar números aleatórios para os dados de ambos os jogadores (entre 1 e 6)
    let cubo1Value = Math.floor(Math.random() * 6 + 1)
    let cubo2Value = Math.floor(Math.random() * 6 + 1)

    // Atualizar as imagens dos dados com base nos valores aleatórios
    document.getElementById("dado1").innerHTML = `<img src="img/${cubo1Value}.png" alt="Dado 1">`
    document.getElementById("dado2").innerHTML = `<img src="img/${cubo2Value}.png" alt="Dado 2">`

    // Calcular a soma dos dados
    let sum1 = cubo1Value
    let sum2 = cubo2Value

    // Exibir o resultado na tela
    let resultText = `Jogador 1 tirou ${cubo1Value} e Jogador 2 tirou ${cubo2Value}.`

    // Determinar o vencedor
    if (sum1 > sum2) {
        `${resultText} Jogador 1 venceu!`
    } else if (sum1 < sum2) {
        `${resultText} Jogador 2 venceu!`
    } else {
        `${resultText} Empate!`
    }

    // Exibir o texto de resultado
    document.getElementById("resultado").textContent = resultText
}