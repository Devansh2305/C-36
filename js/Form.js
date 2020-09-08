class Form{
    constructor(){
        this.title=createElement("h1");
        this.button=createButton("Play");
        this.input=createInput("name");
        this.greeting=createElement("h3")
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

display(){
  //  var title=createElement("h1")
    this.title.html("Car Racing Game");
    this.title.position(130,0);

  //  var input=createInput("name")
    this.input.position(130,160);
    
 //   var button=createButton("Play")
 this.button.position(250,200);

 this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
     //   var greeting=createElement("h3")
         player.name=this.input.value();
         playerCount=playerCount+1

        this.greeting.html("Welcome "+player.name);
        this.greeting.position(130,160);

        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);
    })
  
}

}