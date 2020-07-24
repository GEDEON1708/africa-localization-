var tela=0;
var fundo1;
var largura=450;
var altura=68;
var xMenu=118;
var yMenu1=77;
var yMenu2=145;
var yMenu3=237;
var yMenu4=326;
var yMenu5=610;
var altura1=50;
var largura1=340;
var xMenu5=400
let img;

var entrada1;
var entrada2;
var entrada3;

var questao1 = false;
var questao2 = false;
var questao3 = false;



function preload (){
}

function setup() {
  createCanvas(700,700);
  
    fundo1 = loadImage('fundo 1.jpg');
    img1= loadImage('Africa_sat.jpg');
    img2= loadImage('africa_com_pais.jpg');
    img3= loadImage('africa_map_wooden.jpg');
    img4= loadImage('regioes_africa.jpg');
    img5= loadImage('North_Africa.png');
    img6= loadImage('africa_norte_nome_pais.jpg');
    img7= loadImage('bandeiras_africa_norte.jpg');
    img8= loadImage('tema_tela.jpg');
    img9= loadImage('tema_búsola.jpg');
    img10=loadImage('fundo_tisu.jpg');
    img11=loadImage('fundo_tableau.jpg');
    img12=loadImage('fundo_madeira.jpg');
    img13=loadImage('ma_photo.jpg');
    
  entrada1 = createInput();
  entrada1.position(-1000, 65);
  entrada1.input(validar1);
  
  entrada2 = createInput();
  entrada2.position(-1000, 65);
  entrada2.input(validar2)
   
  entrada3 = createInput();
  entrada3.position(-1000, 65);
  entrada3.input(validar3);
}

function draw() {
  textStyle(BOLD);
   // Tela principal
   if(tela==0){ 
  background(fundo1);
        // Compoe 4 opçoes.
     //*************************//
       //1° Informações sobre o jogo.
      //2° Começar a lição.
     //3° Começar a Jogar.
    //4° Créditos.
     //**************************************//
      textSize(29);
      textAlign(CENTER);
   if(mouseX>xMenu && mouseX<xMenu + largura && mouseY>yMenu1 && mouseY<yMenu1 + altura){
       stroke(0);
       fill(20);
       rect( xMenu, yMenu1, largura, altura, 0);
       if(mouseIsPressed)
          tela=1;
   }   
       fill(500);
       noStroke();
       text("Informaçoes sobre o jogo", 321, 120);
     
     
     // 2° começar a lição.
     
      if(mouseX>xMenu && mouseX<xMenu + largura && mouseY>yMenu2 && mouseY<yMenu2 + altura){
         stroke(0);
         fill(20);
         rect( xMenu, yMenu2, largura, altura, 0);
         if(mouseIsPressed)
          tela=2;
        }  
           fill(500);
           noStroke();
           text("Começar a lição", 321, 190);
    
      // 3° Começar a Jogar.
       if(mouseX>xMenu && mouseX<xMenu + largura && mouseY>yMenu3 && mouseY<yMenu3 + altura){
          stroke(0);
          fill(20);
          rect( xMenu, yMenu3, largura, altura, 0);
          if(mouseIsPressed){
              tela=3;
             entrada1.position(20, 65);
            questao1= true
          }
         
        
       }  
          fill(500);
          noStroke();
          text("Jogar",321,280);
 
     // 4° Créditos.
     
         if(mouseX>xMenu && mouseX<xMenu + largura && mouseY>yMenu4 && mouseY<yMenu4 + altura){
          stroke(0);
          fill(20);
          rect( xMenu, yMenu4, largura, altura, 0); 
           if(mouseIsPressed)
          tela=4;
         }   
          fill(500);
          noStroke();
          text("Créditos", 328, 369);
         }     
 
   //* Informções sobre o jogo
  // ***************************************

 if(tela==1){
    tela=1;
   
    background('#934b00');
      
     textSize(35);
     textStyle(ITALIC)
     text('ÁFRICA LOCALIZATION',120,50);
     textAlign(CENTER);
     fill(240);
     textSize(19);
     noStroke();
 
     textSize(41);
     textStyle(ITALIC);
     textAlign(LEFT);
     text("O nome deste jogo é ÁFRICA Lozalization como indica mesmo o nome Localization: esse jogo tem como objetivo,facilitar e auxiliar o aprendizado sobre o continente africano, afim de se proporcionar um conhecimento básico de maneira criativa, lúdica e divertida. Pois aprender não tem limites.  ",40,120,650,1000);
  }
    
   
   if(tela==2){
       tela= 2
     background('#934b00');  
     textSize(35);
     textStyle(ITALIC);
     textAlign(CENTER);
     text('Começar a lição',330,50);
     fill(240);
     noStroke(); 
     textSize(20);
     fill(240);
     textStyle(ITALIC);
     textAlign(LEFT);
     text('A África é o terceiro continente mais extenso (depois da Ásia e da América), com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005), representando cerca de um sétimo da população mundial, e 54 países independentes.',40,100,650,600);
   
  
       if(mouseX>xMenu5 && mouseX<xMenu5 + largura1 && mouseY>yMenu5 && mouseY<yMenu5 + altura1){
         stroke(0);
         fill(20);
         rect( xMenu5, yMenu5, largura1, altura1, 15);
         if(mouseIsPressed)
          tela=5; 
          fill(500);     
          noStroke();     
          text(" Proxima pagina >", 500, 650);
    }
          
            background('#934b00');
            fill(240)
            noStroke();
            fill(240);
            textSize(32)
            text('Norte de África',40, 50, 650, 50);
     
            fill(240);
            textSize(20);
            textStyle(ITALIC);
            textAlign(LEFT);
            text( ' O Norte da África, também referido como  África do Norte ou África Setentrional e, impropriamente, África Branca por oposição à designação África Negra, compreende os países localizados no norte do continente africano, próximos ao mar Mediterrâneo, mas não só. Pelo geoesquema da Organização das Nações Unidas, o Departamento de Estatísticas da ONU incluiu nessa sub-região os seguintes países: Marrocos, Tunísia, Argélia, Líbia e Egito, Saara Ocidental e o Sudão.',40,100,650, 600); 
     image(img6, 129,290,350,280);
         
   }      


   
if(tela==3){
    tela=3;
  
     background(fundo1); 
     textSize(21);
     textStyle(BOLDITALIC)
     fill(500)
            if(questao1==true)   
               text("Qual o segundo maior continente?",180,50); 
             if(questao2==true) 
                 text("Qual é a capital da Líbia ?", 180,50);
              if(questao3==true) 
                 text("Qual é o a capital da Tunísia?",180,50);
  
  
  textSize(35);
     textStyle(BOLDITALIC);
     textAlign(CENTER);
     text('QUIZ ÁFRICA LOCALIZATION',330,350);
     fill(10);
     noStroke(); 
  
} 
   

  
   
  if(tela==4){
     tela=4;
    
     background(img12); 
  
     textSize(35);
     textStyle(ITALIC);
     textAlign(CENTER);
     text('Créditos',330,50);
     fill(240);
     noStroke();
     
    
     fill(240);
     textSize(29);
     textStyle(ITALIC);
     textAlign(LEFT);
     text('- ÁFRICA LOCALIZATION : Idea e desenvolvimento do jogo feito por Gedeon Kalala Kashomona.', 20,185,550,300);
     image(img13, 129,300,280,250);
    }








}   



function validar1() {
  if(this.value()=="África") {
     entrada1.position(-1000, 65);//escondeu o input 1
     entrada2.position(20, 65);//mostrou o input 2
     questao1=false; //esconteu o texto 1
     questao2=true; // exibiu o texto 2
  }
}

function validar2() {
  if(this.value()=="Trípoli") {
     entrada2.position(-1000, 65);//escondeu o input 2
     entrada3.position(20, 65);//mostrou o input 3
     questao2=false; //esconteu o texto 2
     questao3=true; // exibiu o texto 3
  }
}  
  
  function validar3() {
  if(this.value()=="Tunes") {
     entrada2.position(-1000, 65);//escondeu o input 2
     entrada3.position(20, 65);//mostrou o input 3
     questao2=false; //esconteu o texto 2
     questao3=true; // exibiu o texto 3
     alert("Acertou, TUDO PARABENS!!!");
    
  }
  }




  //*************** O link para acessar ao video : https://drive.google.com/file/d/1KaC8nOLzHayc5eNgj3-WEw3HK8u2FMBv/view //****************************
