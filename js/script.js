/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */

const playBtn = document.getElementById('play-btn');

function play(){
    console.log("Start");
    const playfield = document.querySelector('.playfield');
    
    let num;
    function createSquare(num){
        const square = document.createElement('div');
        square.className = 'square';
        square.innerHTML = `
        <span>${num}</span>
        `;
        
        square.addEventListener('click', function(){
            this.classList.add('clicked');
            console.log("Hai cliccato la cella nr." + num);
        })
    
        return square; 
    }
    createSquare(num);

    

    function createGrid(){
        const grid = document.createElement('div');
        grid.className = 'grid';
        for(let i = 1; i <= 100; i++){
            const square = createSquare(i);
            grid.appendChild(square);
        }
        playfield.appendChild(grid);
    }   
    createGrid();
}


playBtn.addEventListener('click', play);