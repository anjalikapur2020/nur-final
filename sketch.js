var bgimg, bg;
var carrotseedimg, potatoseedimg
var gameState = "wait"

var storybutton, mutebutton, musicbutton, nextbutton, playbutton
var ground, groundimg, rand
var infobutton, ingredients, ingredientsGroup,burgersGroup
var tomatoimg, eggimg, basilimg, roccaleavesimg, pizzasliceimg, cheeseimg, peproniimg, capsicumimg, mushroomimg, jalapenoimg, olivesimg, cornimg, onionimg
var chef, chefidleright, chefidleleft, chefgetright, chefgetleft,item,itemsGroup
var score = 0
var timer=25
var score2 = 0
var timer2=30
var score3 = 0
var timer3=10
var tableimg,table,kitchenscene,kitchensceneimg,cabinetimg,cabinet,kitchenchimneyimg,kitchenchimney
var burgertop,burgerbottom,cheese,lettuce1,patty,cucumber
var dieSound,bgmusic,winsound


function preload() {
    bgimg = loadImage("assets/splash.gif");
    level2img = loadImage("assets/floor4.jpg")
    level3img = loadImage("assets/floor3.jpg")

    groundimg = loadImage("assets/level1bg.PNG")
  tableimg=loadImage("assets/table.png")
  kitchensceneimg=loadImage("assets/kitchentable.png")
    tomatoimg = loadImage("assets/ingredients/tomato.png")
    eggimg = loadImage("assets/ingredients/eggs.png")
    basilimg = loadImage("assets/ingredients/basil.png")
    roccaleavesimg = loadImage("assets/ingredients/roccaleaves.png")
    pizzasliceimg = loadImage("assets/ingredients/pizzaslice.png")
    cheeseimg = loadImage("assets/ingredients/cheese.png")
    peproniimg = loadImage("assets/ingredients/peproni.png")
    capsicumimg = loadImage("assets/ingredients/capsicum.png")
    mushroomimg = loadImage("assets/ingredients/mushroom.png")
    jalapenoimg = loadImage("assets/ingredients/jalapeno.png")
    olivesimg = loadImage("assets/ingredients/olives.png")
    cornimg = loadImage("assets/ingredients/corn.png")
    onionimg = loadImage("assets/ingredients/onion.png")

    chefidleright = loadImage("assets/ingredients/chefidleright.gif")
    chefidleleft = loadImage("assets/ingredients/chefidleleft.gif")
    chefgetright = loadImage("assets/ingredients/chefgetright.gif")
    chefgetleft = loadImage("assets/ingredients/chefgetleft.gif")

    cabinetimg=loadImage("assets/cabinet1.jpg")
    kitchenchimneyimg=loadImage("assets/kitchenchimney.png")

    dieSound=loadSound("mixkit-retro-arcade-lose-2027.wav")


// Level2
burgerimg=loadImage("assets/ingredients/burger.gif")

burgertop=loadImage("burgertop-removebg-preview.png")
burgerbottom=loadImage("burgerbase-removebg-preview.png")
cheese=loadImage("cheese2-removebg-preview.png")
lettuce1=loadImage("lettuce-removebg-preview.png")
patty=loadImage("patty-removebg-preview.png")
cucumber=loadImage("assets/cucumber-removebg-preview.png")
tomato=loadImage("tomato-removebg-preview (1).png")


// level 3

harvest1 = loadImage("assets/level3/boywalk.gif")
harvest2 = loadImage("assets/level3/girlwalk.gif")
harvest3 = loadImage("assets/level3/ladywalk.gif")
harvest4 = loadImage("assets/level3/manrun.gif")
harvest5 = loadImage("assets/level3/manwalk.gif")
// harvest6 = loadImage("assets/harvest6.png")


// build hotel images
hotel1img = loadImage("assets/making hotel-restaurant/frame_0_delay-0.3s.gif")
hotel2img = loadImage("assets/making hotel-restaurant/frame_1_delay-0.3s.gif")
hotel3img = loadImage("assets/making hotel-restaurant/frame_2_delay-0.3s.gif")
hotel4img = loadImage("assets/making hotel-restaurant/frame_3_delay-0.3s.gif")
img = loadImage("assets/making hotel-restaurant/frame_4_delay-0.7s.gif")



bgmusic=loadSound("gamemusic.mp3")
winsound=loadSound("winclap2.wav")


}


function setup() {
    createCanvas(windowWidth, windowHeight)
    playbutton = createImg("assets/play.png")
    playbutton.position(width - 160, height / 2)

    musicbutton = createImg("assets/music.png")
    musicbutton.position(width - 160, height / 2 + 130)

    mutebutton = createImg("assets/mute.png")
    mutebutton.position(width - 170, height / 2 + 145)
    mutebutton.hide()

    nextbutton = createImg("assets/rightarrow.gif")
    nextbutton.position(width - 100, height - 150)
    nextbutton.size(100, 100)
    nextbutton.hide()

    infobutton = createImg("assets/ingredients2.gif")
    infobutton.position(0, 0)
    infobutton.size(width, height)
    infobutton.hide()

    ground = createSprite(width / 2, height / 2)
    ground.addImage(groundimg)
    ground.visible = false
    ground.scale = 1.75
    // groundimg.resize(width*1.5,height)
    ground.velocityX = -3
    ground.x = ground.width / 2

    // character
    chef = createSprite(150, height - 180)
    chef.addImage("idleleft", chefidleleft)
    chef.addImage("idleright", chefidleright)
    chef.addImage("chefgetleft", chefgetleft)
    chef.addImage("chefgetright", chefgetright)
    chef.visible = false
    chef.scale = 1.75


// level 2 sprites
kitchenscene=createSprite(width/3.2,height-height/4)
kitchenscene.addImage(kitchensceneimg)
kitchenscene.scale=1.2
kitchenscene.visible=false

table=createSprite(width-width/6,height-150)
table.addImage(tableimg)
table.scale=0.5
table.visible=false



cabinet=createSprite(width/2,190)
cabinet.addImage(cabinetimg)
cabinet.scale=1
cabinet.visible=false


kitchenchimney=createSprite(width/8,150)
kitchenchimney.addImage(kitchenchimneyimg)
kitchenchimney.scale=0.75
kitchenchimney.visible=false



    ingredientsGroup = new Group
itemsGroup=new Group
burgersGroup=new Group


burger=createSprite(70,height/2.15)
burger.addImage(burgerimg)
burger.visible=false


// hotel

    // hotel
    hotel = createSprite(width / 2, height / 2)
    hotel.scale = 2
    hotel.addImage("hotel1", hotel1img)
    hotel.addImage("hotel2", hotel2img)
    hotel.addImage("hotel3", hotel3img)
    hotel.addImage("hotel4", hotel4img)
    hotel.addImage("hotel5", hotel4img)
    hotel.visible = false

}

function draw() {

    if(!bgmusic.isPlaying){
        bgmusic.play()
    }


    if(chef.x>width-50){
        chef.x=0
    }
    if(chef.x<0){
        chef.x=width-50
    }

    if (gameState === "wait") {
        background(bgimg)
        nextbutton.hide()
    }

    playbutton.mousePressed(() => {
        playbutton.hide()
        infobutton.show()

    })



    infobutton.mousePressed(() => {
        gameState = "Level1"
        playbutton.hide()
        infobutton.hide()

    })



    musicbutton.mousePressed(() => {
        musicbutton.hide()
        mutebutton.show()
        bgmusic.play()

    })

    mutebutton.mousePressed(() => {
        musicbutton.show()
        mutebutton.hide()
        bgmusic.stop()

    })


    if (gameState === "Level1") {
        ground.visible = true
        mutebutton.hide()
        musicbutton.hide()
        if (ground.x < 0) {
            ground.x = ground.width / 2
        }
        spawnIngredients()
        chef.visible = true

        ingredientsGroup.overlap(chef, collectingredients);



// timer codes
if (frameCount % 60 == 0 && timer > 0) { 
    timer --;
  }
  if (timer == 0) {
    gameState="over"
  }

if(score==5 && timer >=0){
    ingredientsGroup.destroyEach()
    level1Won()
}


    }



    if(gameState==="Level2"){
        winsound.stop()
        background(level2img)
        chef.visible=true
        ground.visible=false
        kitchenscene.visible=true
        table.visible=true
        cabinet.visible=true
        kitchenchimney.visible=true
        setInterval(displayVeggies,5000)
        spawnItems()


        itemsGroup.overlap(chef, collectItems);



        burger.visible=false
        chef.x=mouseX
        chef.y=mouseY
        table.depth=chef.depth
        chef.depth +=1

// timer codes
if (frameCount % 60 == 0 && timer2 > 0) { 
    timer2 --;
  }
  if (timer2 == 0) {
    gameState="over"
  }

if(score2==5 && timer2 >=0){
    ingredientsGroup.destroyEach()
    itemsGroup.destroyEach()
    level2Won()
}


    }


// LEVEL 3
if(gameState==="Level3"){
    winsound.stop()
    background(level3img)
    sellBurger()
    chef.visible=true
    ground.visible=false
    kitchenscene.visible=false
    table.visible=false
    cabinet.visible=false
    kitchenchimney.visible=false
    // setInterval(displayVeggies,5000)
    // spawnItems()


    // itemsGroup.overlap(chef, collectItems);

    burgersGroup.overlap(chef, buildHotel);


    burger.visible=false
    chef.x=mouseX
    chef.y=mouseY
    table.depth=chef.depth
    chef.depth +=1

// timer codes
if (frameCount % 60 == 0 && timer3 > 0) { 
timer3 --;
}
if (timer3 == 0) {
gameState="over"
}

if(score3==5 && timer3 >=0){
// ingredientsGroup.destroyEach()
level3Won()
}


}
    

    drawSprites()


    if(gameState==="over"){
        // textSize(80)
        // text("GAME OVER",100,height/2)
        timeOver()
        ground.velocityX=0
        chef.changeImage("idleright", chefidleright)
    }



    if (gameState === "Level1") {
        fill("blue")
        stroke("red")
        strokeWeight(2)
        textSize(20)
        text("Items Collected : " + score, width - 250, 50)

        textSize(40)
        stroke(0)

        fill("red")
        strokeWeight(6)

        text(gameState, width / 2 - 100, 50)

        fill("blue")
        stroke("red")
        strokeWeight(2)
        textSize(20)
        text("Time Left : "+timer,100,50)
    }



    

    if (gameState === "Level2") {
        fill("Yellow")
        stroke("red")
        strokeWeight(2)
        textSize(20)
        text("Items Collected : " + score2, width - 250, 20)

        textSize(40)
        stroke(0)

        fill("black")
        strokeWeight(6)
        rect(width/2.35,10,150,50)
        fill("white")
        text(gameState, width / 2 - 100, 50)

        fill("Yellow")
        stroke("red")
        strokeWeight(2)
        textSize(20)
        text("Time Left : "+timer2,100,20)
    }



    
    if (gameState === "Level3") {
        fill("blue")
        stroke("red")
        strokeWeight(2)
        textSize(20)
        text("Items Collected : " + score3, width - 250, 50)

        textSize(40)
        stroke(0)

        fill("red")
        strokeWeight(6)

        text(gameState, width / 2 - 100, 50)

        fill("blue")
        stroke("red")
        strokeWeight(2)
        textSize(20)
        text("Time Left : "+timer3,100,50)
    }

}


function spawnIngredients() {



    if (frameCount % 120 == 0) {
        var randX = Math.round(random(100, width - 100))
        ingredients = createSprite(randX, 0)
        ingredients.velocityY = 4
        ingredients.scale = 0.5


        rand = Math.round(random(1, 13))
        switch (rand) {
            case 1: ingredients.addImage(onionimg)
                break;

            case 2: ingredients.addImage(olivesimg)
                break;

            case 3: ingredients.addImage(mushroomimg)
                break;

            case 4: ingredients.addImage(roccaleavesimg)
                break;

            case 5: ingredients.addImage(cheeseimg)
                break;

            case 6: ingredients.addImage(cornimg)
                break;

            case 7: ingredients.addImage(capsicumimg)
                break;

            case 8: ingredients.addImage(pizzasliceimg)
                break;

            case 9: ingredients.addImage(peproniimg)
                break;

            case 10: ingredients.addImage(basilimg)
                break;

            case 11: ingredients.addImage(jalapenoimg)
                break;

            case 12: ingredients.addImage(eggimg)
                break;

            case 13: ingredients.addImage(tomatoimg)
                break;

            default: break;


        }

        
        ingredientsGroup.add(ingredients)


    }
}


//collect ingredients
function collectingredients() {
    ingredientsGroup.destroyEach()
    score++;
    chef.changeImage("chefgetright", chefgetright)
}


//   movement function
function keyPressed() {

    if (keyCode === RIGHT_ARROW) {
        chef.velocityX = 5
        chef.velocityY = 0
        // chef.changeImage("chefgetright", chefgetright)
        chef.changeImage("idleright",chefidleright)


    }
    if (keyCode === LEFT_ARROW) {
        chef.velocityX = -5
        chef.velocityY = 0
        chef.changeImage("idleleft",chefidleleft)

        // chef.changeImage("chefgetleft",chefgetleft)
    }


    if (keyCode === UP_ARROW) {
        chef.velocityY= -10
        chef.velocityX = 0
        // chef.changeImage("chefgetright", chefgetright)
        chef.changeImage("idleright",chefidleright)

    }

    if (keyCode === DOWN_ARROW) {
        chef.velocityY=10
        chef.velocityX = 0
        // chef.changeImage("chefgetright", chefgetright)
        chef.changeImage("idleright",chefidleright)

    }

    if (keyCode === 32 && gameState == "Level2") {
        girl.velocityY = 0
        girl.velocityX = 0
        // girl.changeImage("girlgetright", girlgetright)
        // girl.changeAnimation("walkright", playerwalkrightimg)

    }

}

function keyReleased() {


    if (keyCode === LEFT_ARROW) {
        chef.velocityX = 0
        chef.velocityY = 0
        chef.changeImage("idleleft",chefidleleft)
    }
    if (keyCode === RIGHT_ARROW) {
        chef.velocityX = 0
        chef.velocityY = 0
        chef.changeImage("idleright",chefidleright)

    }

    if (keyCode === UP_ARROW) {
        chef.velocityY= 0
        chef.velocityX = 0
        // chef.changeImage("chefgetright", chefgetright)
        chef.changeImage("idleright",chefidleright)

    }

    if (keyCode === DOWN_ARROW) {
        chef.velocityY= 0
        chef.velocityX = 0
        // chef.changeImage("chefgetright", chefgetright)
        chef.changeImage("idleright",chefidleright)

    }
    if (keyCode === 32 && gameState == "Level2") {
        chef.velocityY = 0
        chef.velocityX = 0
        // girl.changeImage("girlgetright", girlgetright)
        // girl.changeAnimation("walkright", playerwalkrightimg)
// burger.visible=true
    }





}


// //gameover function
function timeOver() {
    dieSound.play()
    swal(
        {

            title: `Game Over!!!`,
            text: "Time Over!! Better Luck Next Time!!!",
            imageUrl: "assets/ingredients/timeup.png",
            imageSize: "250x250",
            confirmButtonText: "Restart",
            confirmButtonColor: "cyan"
        },
        function (isConfirm) {
            if (isConfirm) {
                location.reload();
            }
        }
    )
}


// //level 1 won function
function level1Won() {
    winsound.play()
    swal(
        {

            title: `KUDOS You WON!!!`,
            text: "Now you are a Chef.. Show Your Skills. Find Ingredients and make a Dish!!!",
            imageUrl: "assets/burger.png",
            imageSize: "250x250",
            confirmButtonText: "LEVEL 2",
            confirmButtonColor: "cyan"
        },
        function (isConfirm) {
            if (isConfirm) {
gameState="Level2"            }
        }
    )
}



function level2Won() {
winsound.play()
    swal(
        {

            title: `KUDOS You WON!!You are Skilled enough NOW to OPEN  HOTEL!!!!`,
            text: " Sell Enough burgers to collect money ",
            imageUrl: "assets/burger.png",
            imageSize: "250x250",
            confirmButtonText: "LEVEL 3",
            confirmButtonColor: "cyan"
        },
        function (isConfirm) {
            if (isConfirm) {
gameState="Level3"            }
        }
    )
}


// //level 3 won function
function level3Won() {
winsound.play()
    swal(
        {

            title: `CONGRATULATIONS`,
            text: "Your Hotel is been Buit!!",
            imageUrl: "assets/restaurant.gif",
            imageSize: "200x200",
            confirmButtonText: "Restart",
            confirmButtonColor: "cyan"
        },
        function () {
            window.location.reload();
        }

    )
}



// LEVEL 2 items
function spawnItems(){
    if(frameCount%100==0){
        item=createSprite(Math.round(random(50,width-50)),Math.round(random(50,height-50)))
         var rand2=Math.round(random(1,7))

         switch (rand2) {
            case 1: item.addImage(cucumber)
                break;

            case 2: item.addImage(burgerbottom)
                break;

            case 3: item.addImage(burgertop)
                break;

            case 4: item.addImage(lettuce1)
                break;

            case 5: item.addImage(cheese)
                break;

            case 6: item.addImage(tomato)
                break;

            case 7: item.addImage(patty)
                break;

           

            default: break;


        }



        itemsGroup.add(item)
    }
}


// level 2 display veggies
function displayVeggies(){
    // item=createSprite(Math.round(random(50,width-50)),Math.round(random(50,height-50)))

    // itemsGroup.add(item)
itemsGroup.destroyEach()
}


// //level 1 won function
function level2Won() {

    swal(
        {

            title: `KUDOS You WON!!!`,
            text: "You have prepared enough . NOW SELL THEM !!!",
            imageUrl: "assets/burger.png",
            imageSize: "250x250",
            confirmButtonText: "LEVEL 3",
            confirmButtonColor: "cyan"
        },
        function (isConfirm) {
            if (isConfirm) {
gameState="Level3"            }
        }
    )
    }


    
//collect ingredients
function collectItems() {
    itemsGroup.destroyEach()
  score2++
    chef.changeImage("chefgetright", chefgetright)
}


// build hotel
function buildHotel() {
    burgersGroup.destroyEach()
    score3++;
    hotel.visible = true
    burger.visible=true
    // girl.addAnimation("walkleft", playerwalkimg)
    if (score3 == 1) {

        hotel.changeImage("hotel2")

    }

    else if (score3 == 3) {

        hotel.changeImage("hotel3")

    }


    else if (score3 == 5) {

        hotel.changeImage("hotel4")

    }

    else if (score3 == 7) {

        hotel.changeImage("hotel5")

    }

}



function sellBurger() {

    if (frameCount % 120 == 0) {
        var randY = Math.round(random(100, height - 100))
        burgers = createSprite(0, randY)
        burgers.velocityX = 4
        burgers.scale = 1.5


        rand = Math.round(random(1, 5))
        switch (rand) {
            case 1: burgers.addImage(harvest1)
                break;

            case 2: burgers.addImage(harvest2)
                               break;

            case 3: burgers.addImage(harvest3)
                break;

            case 4: burgers.addImage(harvest4)
                break;

            case 5: burgers.addImage(harvest5)
            burgers.x=width
            burgers.velocityX=-4
                break;


            default: break;


        }

        burgersGroup.add(burgers)

    }
}
