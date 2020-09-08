class Player{
    constructor(){
        this.index =null;
        this.distance =null;
        this.name =null;
    }



    getCount(){
        var playerCountref=database.ref("PlayerCount")
        playerCountref.on("value",(data)=>{
            playerCount=data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({PlayerCount:count})
    }

    update(){
        var playerIndex="Players/player"+this.index 
        database.ref(playerIndex).set({
            Name:this.name,
            distance:this.distance})
    }
    static getPlayerInfo(){
        var playerInfoRef=database.ref("Players");
        playerInfoRef.on("value",(data)=>{
             allPlayers=data.val();
        })
    }   
}