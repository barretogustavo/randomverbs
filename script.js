console.log('%c Desenvolvido por: Gustavo Barreto ', 'color: white; background-color: green;');
console.log('%c Visite o meu Github: https://github.com/barretogustavo ', 'color: white; background-color: blue;');
console.log('%c Visite o meu Instagram: https://www.instagram.com/gustavobarreto.dev/ ', 'color: white; background-color: blue;');
console.log('%c Contribua para o projeto: https://github.com/barretogustavo/api--random-verbs ', 'color: white; background-color: blue;');


//Variáveis globais
const url =  "https://api-random-verbs.vercel.app/api/randomVerbs";
let VerboAtual;

//Gerando número aleatório
function getVerboAleatorio(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return VerboAtual = Math.floor(Math.random() * (max - min)) + min;
}

//Fazendo requisição à API
const fecthVerbos = async ()=>{
	
	getVerboAleatorio(1, 10);
	
		await fetch(url) 
		.then(response => response.json())
		.then(verbos => {

			console.log('%c Você está aprendendo o verbo: ', 'color: white; background-color: purple;', verbos[VerboAtual].name);			
						
			mostrarInfo({
				id: verbos[VerboAtual].id,
				name: verbos[VerboAtual].name,
				traducao: verbos[VerboAtual].traducao,
				exemplo: verbos[VerboAtual].exemplo,
				tradExemplo: verbos[VerboAtual].tradExemplo,
				simplePast: verbos[VerboAtual].simplePast,
				simplePastModel: verbos[VerboAtual].simplePastModel,
				simplePastTrad: verbos[VerboAtual].simplePastTrad,
				simplePastExample: verbos[VerboAtual].simplePastExample,
				simplePastExampleTrad: verbos[VerboAtual].simplePastExampleTrad
			});
			
		})
		.catch(error => console.log("Ops, algo deu errado! ", error))
}
fecthVerbos();

function mostrarInfo(verbos){
	//Valores para a tela principal
	document.querySelector('.verbo-principal').innerHTML = `${verbos.name}`;
	document.querySelector('.aprender-sobre').innerHTML = `${verbos.name}`;
	document.querySelector('.verbo-principal-traducao').innerHTML = `${verbos.traducao}`;

	//Valores para o modal
	document.querySelector('.m-exemplo-ingles').innerHTML = `${verbos.exemplo}`;
	document.querySelector('.m-exemplo-portugues').innerHTML = `${verbos.tradExemplo}`;
	document.querySelector('.m-simplepast').innerHTML = `${verbos.simplePast}`;
	document.querySelector('.m-modelo-simplepast').innerHTML = `${verbos.simplePastModel}`;
	document.querySelector('.m-traducao-simplepast').innerHTML = `${verbos.simplePastTrad}`;
	document.querySelector('.m-exemplo-simplepast').innerHTML = `${verbos.simplePastExample}`;
	document.querySelector('m-exemplo-simplepast-traducao').innerHTML = `${verbos.simplePastExampleTrad}`;
}

function abrirModal(){
	console.log("Abriu os detalhes sobre o verbo.");
	document.querySelector('.container-modal').style.display = 'flex';
}
function fecharModal(){
	console.log("Fechou os detalhes sobre o verbo");
	document.querySelector('.container-modal').style.display = 'none';
}