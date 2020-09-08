class Game{
    constructor(){

    }


    getState(){
        var gameStateref=database.ref("GameState")
        gameStateref.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref("/").update({GameState:state})
    }

    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref("PlayerCount").once("value")
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
            
            form=new Form()
            form.display()
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("Welcome To The Game",120,100);
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            var displayPosition=100;
            //for(var i=0; i<4; i++){
             //   text("Devansh",100,200);
           // }
           
        }
    }   
}