function comprar() {
    // 1. Obter os valores e converter para NÚMEROS
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    // Validações de quantidade (agora com o limite de 10)
    if (isNaN(qtd) || qtd <= 0 || qtd > 10) {
        alert("A quantidade de ingressos deve ser entre 1 e 10.");
        return;
    }

    if (tipo == '') {
        alert("Por favor, selecione um tipo de ingresso.");
        return;
    }

    // 2. Obter o elemento e a quantidade disponível do tipo selecionado
    let qtdDisponivelElement = document.getElementById(`qtd-${tipo}`);
    let qtdDisponivel = parseInt(qtdDisponivelElement.textContent);

    // 3. Verificar se há estoque suficiente
    if (qtd > qtdDisponivel) {
        alert(`Quantidade indisponível para o tipo ${tipo}.`);
        return;
    }

    // 4. Calcular o novo estoque e atualizar a página
    let novoEstoque = qtdDisponivel - qtd;
    qtdDisponivelElement.textContent = novoEstoque;

    // 5. VERIFICAR SE O ESTOQUE ESGOTOU!
    if (novoEstoque === 0) {
        // Adiciona a classe CSS para o estilo de esgotado (vermelho e riscado)
        qtdDisponivelElement.parentElement.classList.add('esgotado');
        alert('Compra realizada com sucesso! Você comprou os últimos ingressos.');
    } else {
        alert('Compra realizada com sucesso!');
    }
    
    // Limpar o campo de quantidade após a compra
    document.getElementById('qtd').value = '';
}