 $(document).ready(function(){
	 $("#linkOrcamentoConnectiPharma").click(function(){
		$("#divDinamic").load("orcamento/orcamentoConnectiPharma.html");
	});
	 $("#linkOrcamentoEllosSngpc").click(function(){
		$("#divDinamic").load("orcamento/orcamentoEllosSngpc.html");
		});
	 $("#linkOrcamentoEllosCloud").click(function(){
		$("#divDinamic").load("orcamento/orcamentoEllosCloud.html");
		});
	 $("#linkOrcamentoImpressoaFiscal").click(function(){
		$("#divDinamic").load("orcamento/orcamentoImpressoraDaruma.html");
		});
	 $("#perguntasFrequentesConnectiPharma").click(function(){
     	$("#divDinamic").load("atendimento/perguntasFrequentes/perguntasConnectiPharma.html");
     });
	 $("#perguntasFrequentesEllosSngpc").click(function(){
     	$("#divDinamic").load("atendimento/perguntasFrequentes/perguntasEllosSngpc.html");
     });
	 $("#perguntasFrequentesImpressoraDaruma").click(function(){
     	$("#divDinamic").load("atendimento/perguntasFrequentes/perguntasImpressora.html");
     });
	 //Produtos
	 $("#linkProdutosEllosCloud").click(function(){
			$("#divDinamic").load("produtos/ellosCloud.html");
		});
	 
 });