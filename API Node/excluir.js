if (req.params.idproduto == 0 && qtdRequerido >=3){
            preco = 40.00;
            valorFinal = qtdRequerido * preco;
            qtdEstoque = qtdEstoque - qtdRequerido; 
            res.send('Preço:'+ valorFinal + 'Quantidade final no estoque:' + qtdEstoque);
            if (valorFinal > saldo){
                res.send('Saldo insuficiente.');
            }
            else{
                saldo = saldo - valorFinal;
                contas[req.params.idcomprador].credits = saldo;
                qtdEstoque = qtdEstoque - qtdRequerido;
                //console.log(qtdEstoque)
                //contas[req.params.idproduto].qtde = qtdEstoque;
                //console.log(contas[req.params.idproduto].qtde+" e "+qtdEstoque+" e "+qtdRequerido)
                res.send('Preço:'+ valorFinal + ' Quantidade final no estoque:' + qtdEstoque);
            }