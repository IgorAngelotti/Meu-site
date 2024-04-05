var res = window.document.getElementById('res')
var botao = document.getElementById('botaosoma')
var num1 = document.getElementById('txtnum1')
var num2 = document.getElementById('txtnum2')
botao.addEventListener('click', soma)

function verificação(n1, n2){ 
   if(n1.value.length == 0 || n2.value.length == 0){
      return false
   } else{
      return true
   }
}

function soma (){
   if(verificação(num1, num2)){ //VALIDAÇÃO COM CHAMADA PARA FUNCTION
      var somar = Number(num1.value) + Number(num2.value)
      res.innerHTML = `Resultado: ${somar}` 
   } else{
      res.innerHTML = 'Por favor, digite dois números nos campos acima.'
   }
   
   
}