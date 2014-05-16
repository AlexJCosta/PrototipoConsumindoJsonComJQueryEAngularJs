function MeuController( $scope ) { 
	$scope.alunos = [ 
				{id: 1, titulo : 'Suco de couve para hipertensão', conteudo :
 					'<div style="color: #000; margin-top: 50px; font-size: 20px;"><h2><b>Preparo</b></h2><hr noshade color="black"><p>Corte em pedaços as laranjas, tire as sementes e coloque-as no liquidiﬁcador. Acrescente a couve e a água. Depois de bater,coe e adoce a gosto.</p><p><b>Consumir:</b> 1 copo por dia.</p><p><b>Orientações gerais:</b> cortar o sódio, que vem principalmente do sal, e aumentar o aporte de potássio e cálcio. O primeiro facilita a excreção do excesso de sódio e o segundo é fundamental	na regulação dos processos de vasoconstrição e vasodilatação, que também inﬂuenciam na pressão sanguínea.</p><p><b>Alimentos-chave:</b> banana, laranja, kiwi, melão, maracujá,	bacalhau, couve, iogurte e folha de mostarda.</p></div>'
			},
		
			    {id: 2, titulo : 'Programa de Trainee Industrial Ambev 2014', conteudo : 'Vagas para Candidatos Formados em Farmácia no Programa de Trainee Industrial Ambev 2014. INSCRIÇÕES ATÉ: 4/...' },
        		{id: 3, titulo : 'NOTICIA XETA', conteudo : 'ASDASDASDASDASD' }
                    
			];
}
function chamarPagina(id,titulo,conteudo) {
	consumirJson(id, titulo, conteudo);
}
function consumirJson(id,titulo,conteudo) {
	$("#divID").html("");
	var idPost = id;
	var tituloPost = titulo;
	$("#divID").append(idPost);
	$("#divTitulo").append(tituloPost);
	
}
