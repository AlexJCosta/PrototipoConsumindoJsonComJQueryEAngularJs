var App = App || {};
App.Home = {
	setUp: function() {
		//validação do form de login no header da página
		var propriedades_login = {
			focusInvalid: false,
			rules: {
				email: {
					required: true,
					email: true
				},					
				senha: {
					required: true
				}
			},
			messages: {
				email: "esse campo precisa ser preenchido*",
				senha: "esse campo precisa ser preenchido*"
			},
			submitHandler: function(form) {
				form.submit();
			},
		};
		$('#form-login').validate(propriedades_login);

		//validação do form de esqueceu no header da página
		var propriedades_login_false = {
			focusInvalid: false,
			rules: {
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				email: "esse campo precisa ser preenchido*",
				senha: "esse campo precisa ser preenchido*"
			},
			submitHandler: function(form) {
				form.submit();
			},
		};
		$('#form-login-forgot').validate(propriedades_login_false);

		//interação do form de login no header da pagina
		$(".item-contact-header").on("click",".lock-button",function(){
			var validacao = $(this).hasClass("open");
			if(validacao){
				$(this).removeClass("open");
				$("#restricted-area").fadeOut("slow");
			} else {
				$(this).addClass("open");
				$("#restricted-area").fadeIn("slow");
			}
		});

		//interação de esqueceu senha no header da página
		$("#form-login").on("click",".forgot-password",function(){
			$("#form-login").fadeOut('slow',function(){
				$("#form-login-forgot").fadeIn("slow");
			});
		});

		//Escondendo o form quando o memso estiver aberto e acontecer um clique fora
		$("body").on('mousedown',function(event) {
			var alvo = $(event.target), 
				clickFora = alvo.parents().is('#restricted-area');
			if(clickFora === false){
				$(".lock-button").removeClass("open");
				$('#restricted-area,#form-login-forgot').hide();
				$('#form-login').show();
			}
		});

		//Efeito de hover nos detalhes da impressora
		$(".print-details .details").hover(
			function (event) {
				var elemento =  $(event.currentTarget).attr("data-image");
				$(".printer-image img").hide().filter("#"+elemento).show();
			}, 
			function (event) {
				$(".printer-image img").hide().eq(0).show();
			}
			);
		//animação na seção de depoimentos na tela inicial
		$("#home .transition-testimony").cycle('scrollRight');

		//carousel na seção de parceiros
		$('.images-differentials').cycle({
			fx:   'scrollHorz',
			prev: '#prev',
			next: '#next',
		});

		//interaçåo das abas de FAQ

		$(".list-questions").on("click",".item-questions",function(e){
			var alvo = $(e.currentTarget),
				indice = alvo.index(),
				altura = parseInt(alvo.height(),10),
				alvoTopo = parseInt(alvo.offset().top,10),
				boxTopo = parseInt(alvo.parent().offset().top,10),
				margin = alvoTopo - boxTopo;
				console.log(boxTopo,alvoTopo,altura);
			$(".item-questions").removeClass("active").eq(indice).addClass("active");
			$(".item-answer").removeClass("active").eq(indice).addClass("active").css("margin-top", margin + "px" );
		});

	},
	Panel: {
		_atual: 0,
		_limit: 0,
		setUp: function(){
			var that = this;
			that._limit = $(".slideshow img").length - 1;
			$(".slideshow-controls").on("click","span",function(e){
				var alvo = $(e.currentTarget).hasClass("next");
				if(alvo){
					that.next();
				} else {
					that.prev();
				}
			});
		},
		prev: function(){
			var indice = this._atual  - 1;

			//validando se a pagina solicitada não existe, caso não exista mostrar a ultima.
			indice = indice < 0 ? this._limit : indice;

			//atualizando o indice atual
			this._atual = indice;

			$(".slideshow img").removeClass("active").eq(indice).addClass("active");
			$(".description-info").removeClass("active").eq(indice).addClass("active");

		},
		next: function(){
			var indice = this._atual + 1;

			//validando se a pagina solicitada não existe, caso não exista mostrar a ultima.
			indice = indice > this._limit ? 0 : indice;

			//atualizando o indice atual
			this._atual = indice;

			$(".slideshow img").removeClass("active").eq(indice).addClass("active");
			$(".description-info").removeClass("active").eq(indice).addClass("active");
		}
	}


};