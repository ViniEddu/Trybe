// Declaramos nossa variável de despesas
const despesas = [
    {
      internetOi: 149.90,
    },
    {
      tim: 204.89,
    },
    {
      luz: 191.31,
    },
    {
      agua: 55.00,
    },
  ];
  
  // Declaramos nossa renda
  const renda = 766.23;
  
  const despesaMensal = (renda, despesas, callback) => {
    // Definimos que a despesa total é igual ao valor retornado pela função callback (que é o parâmetro da nossa função)
    // que vai receber nosso parâmetro/variável "despesas"
    const despesaTotal = callback(despesas);
    // Definimos nosso saldo final, que é nossa renda - nossa despesa total
    const saldoFinal = renda - despesaTotal;
  
    console.log(`Balanço do mês:
      Recebido: R$${renda}
      Gasto: R$${despesaTotal}
      Saldo: R$${saldoFinal}`);
  };
  
  // Definimos nossa função que será passada como parâmetro
  // essa função recebe o parâmetro despesas a partir da função principal despesaMensal
  const somaDespesas = (despesas) => {
    // Separamos cada item do nosso array de despesas
    // e fazemos um reduce para somar os valores
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
    return despesaTotal;
  };
  
  // Executamos a função principal com as variáveis renda, despesas
  // e a nossa função somaDespesas
  // callback = somaDespesas
  despesaMensal(renda, despesas, somaDespesas);
  
  // Balanço do mês:
  //     Recebido: R$1000,00
  //     Gasto: R$459,00
  //     Saldo: R$541,00