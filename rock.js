let comMove='';
        let score=JSON.parse(localStorage.getItem('score')) || {
            win:0,loses:0,tie:0};//parse converts the string back to javascript format
        function move(){
            const hel=Math.random();
        if(hel<1/3){
            return 'Rock';
        }
        else if(hel>=1/3 && hel<2/3){
            return 'Paper';
        }
        else{
            return 'Scissor';
        }
        }
        function computerMove(hi,bi){
            if(hi==bi){
                score.tie+=1;
                return 'TIE';
            }
            else if(hi=='Rock' && bi=='Scissor' || hi=='Paper' && bi=='Rock' || hi=='Scissor' && bi=='Paper'){
                score.win+=1;
                return 'WIN';
            }
            else{
                score.loses+=1;
                return 'LOSE';
            }
            localStorage.setItem('score',JSON.stringify(score));//storing the store object ,so that the data will not be lost even  if the page is refreshed
        }//setItem only takes string as input therefore we use stringify to convert it into string
            function displayScore(){
                document.querySelector('.js-para').innerHTML=`Win : ${score.win} , Loses : ${score.loses} , Tie : ${score.tie}`
            }
           function imgDisplay(userMove,Com){
                document.querySelector('.js-moves').innerHTML=`You <img class="btn" src="${userMove}.jpg"> <img class="btn" src="${Com}.jpg"> Computer`;
           }
           function displayResult(resu){
            document.querySelector('.result').innerHTML=`${resu}`;
           }