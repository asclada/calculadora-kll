function calcular() { //função para calcular os valores depois que o salario for digitado
  
  const salario = document.querySelector("#salario").value; //busca o salario digitado
  let fator = 0.02127; //fator para valor aproximado. atualizado 02/06/21

  const margem = salario * 5 / 100; //margem: 5% do salário
  const emprestimo = margem / fator; //valor liberado: margem / fator 
  const comissao = emprestimo * 4.75 / 100; //comissão: 4,75% do valor do emprestimo
  const brinde = comissao * 20 / 100; //brinde: 20% do valor da comissão

  const formatNumber = number => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"}).format(number);

  const formatMargem = formatNumber(margem);
  const formatEmprestimo = formatNumber(emprestimo);
  const formatComissao = formatNumber(comissao);
  const formatBrinde = formatNumber(brinde);


  document.querySelector("#margem").innerHTML = `Margem: <span>${formatMargem}</span>`;

  document.querySelector("#emprestimo").innerHTML = `Empréstimo: <span>${formatEmprestimo}</span>`;

  document.querySelector("#comissao").innerHTML = `Comissão: <span>${formatComissao}</span>`;

  document.querySelector("#brinde").innerHTML = `Brinde: <span>${formatBrinde}</span>`;

}