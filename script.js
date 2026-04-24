// Funçãõ qie sera chamada clicar no botao
// Função: um bloco de codigo reutilizavel que executa uma tareefa especifica
function calcular(){
    //========================================
    //1. PEGAR OS ELEMENTOS DA TELA
    //========================================

    //Aqui pegamos cada checkbox pelo Id
    let hamburguer = document.getElementById("Hamburguer")
    let batata = document.getElementById("Batata Frita")
    let nugets = document.getElementById("Nugets")
    let coca = document.getElementById("Cola-Cola")
    let sorvete = document.getElementById("Sorvete")
    let pizza  = document.getElementById("Pizza")

    //==================================
    //2. VARIAVEIS INCIAIS
    //===================================
    // total comeca com 0
    let total = 0
    // String para guardar os itens
    let itens = ""
    //===================================
    //3. VERIFICAR CADA PRODUTO
    //===================================
    // Se o checkbox estiver marcado (true)
    if(hamburguer.checked){
        total = total +38 //soma o valor do hamburguer
        itens = itens +"Hamburguer <br>" // adiciona texto ao produtos
    }

    if(batata.checked){
        total = total +22
        itens = itens +"Batatafrita <br>"
    }

    if(nugets.checked){
        total = total +28
        itens = itens +"Nugets <br>"
}

    if(coca.checked){
     total = total +10
      itens = itens +"Coca-Cola <br>"
    }

    if(sorvete.checked){
        total = total +24
        itens = itens +"Sorvete <br>"
    }

    if(pizza.checked){
        total = total +65
        itens = itens +"Pizza <br>"
    }
    //==================================================
    //4. PEGAR DIV DO RESULTADO
    //==================================================
    let resultado = document.getElementById("resultado")
    
    //==================================================
    //5. VALIDAÇÃO
    // =================================================
    // SE NAO ESCOLHEU NADA
    if(total === 0){
        resultado.innerHTML = "Escolha pelo menos um item!"
        return // para função aqui
    }
    //====================================================
    // 6. DESCONTO
   //====================================================
   let subtotal = total
   let desconto = 0
   // se o valor for maior ou igual a 30, aplicamos desconto de 10%
   if(subtotal >= 30){
    desconto = subtotal * 0.10 // 10%
   }
   //======================================================
   // 7. ENTREGA
   //======================================================
   let entrega = 5
   // se passar 50 -> entrega gratis
   if(subtotal - desconto >= 50){
    entrega = 0
   }

   //======================================================
   // 9. TOTAL FINAL
   //===============================================
   let totalFinal = subtotal - desconto + entrega


   //=================================================
   // 9. MOSTRAR O RESULTADO
   //===============================================

   resultado.innerHTML =
   "<strong>Itens:</strong><br>"+
   itens +
   "<br> Subtotal: R$ " + subtotal.toFixed(2)+
   "<br> Desconto: R$ " + desconto.toFixed(2)+
   "<br> Entrega: R$ " + entrega.toFixed(2)+
   "<br><strong> Total: R$ " + totalFinal.toFixed
   (2) + "</strong>"
}