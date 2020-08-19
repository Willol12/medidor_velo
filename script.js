//1-Velocidade maxima de ate 70
//2= a cada 5km acima do limite você ganha 1 ponto
//3-Math.floor() retorna o minimo da divisão pelo o numero 
//no caso do dividido por 5 vai retornar sempre o minimo
//4- caso pontos maior que 12 -> "Carteira Suspendida"
verificarVelocidade(70);

function verificarVelocidade(velocidade) {
  const velocidadeMaxima = 70;
  const kmPorPonto = 5;
  if (velocidade <= velocidadeMaxima)//1
  console.log('Ok');
  else {
    const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto ))//3
    if(pontos >=12)//2
    console.log('Carteira Suspensa');//4
    else
    console.log('Pontos', pontos)
  }
}

