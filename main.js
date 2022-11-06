
function createGame(player1, hour, player2){
    return `
    <li>
         <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
         <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}"/>
    </li>
    
    `

}

let delay=-0.4;
function createCard(date, day, games){
    delay=delay + 0.4;
    return `
     <div class="card" style="animation-delay: ${delay}s">
                <h2 >${date}<spam>${day}</spam></h2>
            

                <ul>
                    ${games}

                </ul>
             </div>
    `
}

document.querySelector("#cards").innerHTML=
     
        createCard("24/11", "quinta", 
        createGame("switzerland", "07:00", "cameroon")+
        createGame("brazil", "16:00", "serbia")+
        createGame("uruguay", "10:00", "south_korea")+
        createGame("portugal", "13:00", "ghana")) +
        
        createCard("28/11", "segunda", 
        createGame("cameroon", "07:00", "serbia")+
        createGame("brazil", "13:00", "switzerland")+
        createGame("south_korea", "10:00", "ghana")+
        createGame("portugal", "16:00", "uruguay")) +
        
        createCard("02/12","sexta",
        createGame("cameroon", "16:00", "brazil")+
        createGame("serbia", "16:00", "switzerland")+
        createGame("south_korea", "10:00", "portugal")+
        createGame("ghana", "12:00", "uruguay"))