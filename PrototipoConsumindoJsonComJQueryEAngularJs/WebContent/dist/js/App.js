var App = App || {};

App = {
	
	executarSetUps: function() {
		App.__setUp(App);
	},
	
	setUp: function() {
		
	},
	
	//Procura e executa todos os m�todos setUp que encontrar
	__setUp: function(Objeto) {
		var Filho;
		
		if(typeof Objeto != "object") return false;
		
		if(Objeto.hasOwnProperty('setUp') && typeof Objeto.setUp == "function") {
			Objeto.setUp();
		}
		
		for(Filho in Objeto) {
			
			if(Objeto.hasOwnProperty(Filho) !== true) continue;
			
			if(Objeto[Filho] !== null && typeof Objeto[Filho] == "object") {
				
				Objeto[Filho]['_pai'] = function() {
					return Objeto;
				};
				
				App.__setUp(Objeto[Filho]);
			}
		}
		
		return false;
	},

	
	/**
	 * Fun��es utilit�rias
	 */
	Util: {
		setUp: function(){
			
		},
		converterMoeda: function (num) {
			   x = 0;
			   if(num<0) {
			      num = Math.abs(num);
			      x = 1;
			   }
			   if(isNaN(num)) num = "0";
			      cents = Math.floor((num*100+0.5)%100);

			   num = Math.floor((num*100+0.5)/100).toString();

			   if(cents < 10) cents = "0" + cents;
			      for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
			         num = num.substring(0,num.length-(4*i+3))+'.'
			               +num.substring(num.length-(4*i+3));
			   ret = num + ',' + cents;
			   if (x == 1) ret = ' - ' + ret;return ret;
			},
		
		String: {
			_dias:"Domingo Segunda Ter�a Quarta Quinta Sexta S�bado".split(" "),
			_meses: "Janeiro Fevereiro Mar�o Abril Maio Junho Julho Agosto Setembro Outubro Novembro Dezembro".split(" "),
			
			setUp:function (){
				String.prototype.dataLeitura = this.dataLeitura;
				String.prototype.capitalize = this.capitalize;
				String.prototype.dataPorExtenso = this.dataPorExtenso;
				String.prototype.dataAnoDoisCaracteres = this.dataAnoDoisCaracteres;
				String.prototype.objetoDate = this.objetoDate;
				String.prototype.diaDaSemana = this.diaDaSemana;
				String.prototype.mesDoAno = this.mesDoAno;
			},
			
			capitalize: function() {
				var texto = this.toLowerCase();
				texto = texto.replace(/\b(.+)\b/ig,function(palavra){
					return palavra.charAt(0).toUpperCase()+palavra.substring(1);
				});
				return texto;
			},
			
			objetoDate: function() {
				var dc = this.split(/[^\d]/);

				if(dc[2].length == "4") {
					dc = dc.reverse();
				}
				return new Date([dc[1],dc[2],dc[0]].join('/'));
			},
			
			diaDaSemana: function() {
				var objetoDate = (new String(this)).objetoDate();
				return App.Util.String._dias[objetoDate.getDay()];
			},
			
			mesDoAno: function() {
				var objetoDate = (new String(this)).objetoDate();
				return App.Util.String._meses[objetoDate.getMonth()];
			},
			
			dataPorExtenso: function() {
				var data = new String(this),
				 	diaDaSemana = data.diaDaSemana(),
					mesDoAno = data.mesDoAno(),
					numeroDoDia = data.objetoDate().getDate(),
					numeroDoAno = data.objetoDate().getFullYear();
				
				var dataPorExtenso = "diaDaSemana, numeroDoDia de mesDoAno de numeroDoAno"
										.replace("diaDaSemana", diaDaSemana)
										.replace("numeroDoDia", numeroDoDia)
										.replace("mesDoAno", mesDoAno)
										.replace("numeroDoAno", numeroDoAno);
			
				return dataPorExtenso;
			},
			
			dataLeitura:function (){
				var	dataConvertida = this.split(/[^\d]/);
				
				if(dataConvertida[0].length == 4){
					dataConvertida = dataConvertida.reverse();
				}
				
				dataConvertida = dataConvertida.join("/");
				
				
				return dataConvertida;
			},
			
			dataAnoDoisCaracteres: function() {
				var novaData = this.split("/");
				return [novaData[0],novaData[1],novaData[2].substr(2)].join("/");
				
			}
		},
		
		
		
		rand: function() {
			var d = new Date();
			return Math.round(Math.random()*10000*d.getTime());
		},
		
		//Retorna um objeto { largura: int, altura: int }
		telaCheiaProporcional: function(largura, altura) {
			
			var videoLargura	= largura;
			var videoAltura		= altura;

			var browserLargura 	= $(window).width();
			var browserAltura	= $(window).height();

			var proporcaoLargura = browserLargura / videoLargura;
			var proporcaoAltura  = browserAltura  / videoAltura;

			var diferencaLargura = proporcaoAltura * videoLargura;
			var diferencaAltura  = proporcaoLargura * videoAltura;

			var finalLargura = 0;
			var finalAltura	 = 0;

			if(diferencaAltura > browserAltura) {
				finalLargura = browserLargura;
				finalAltura  = diferencaAltura;
			} else {
				finalLargura = diferencaLargura;
				finalAltura  = browserAltura;	
			}
			
			return {
				largura: finalLargura,
				altura: finalAltura
			};
		}
	}
};