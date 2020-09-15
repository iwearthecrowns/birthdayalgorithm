let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mathMonth = 7
let month = game.askForNumber("What month is your birthday")
let day = game.askForNumber("What day is your birthday")
mathMonth = mathMonth * month
mathMonth = mathMonth - 1
mathMonth = mathMonth * 13
mathMonth = mathMonth + 5
mathMonth = mathMonth - 2
mathMonth = mathMonth + day
mathMonth = mathMonth * 11
mathMonth = mathMonth - day
mathMonth = mathMonth - month
mathMonth = mathMonth / 5
mathMonth = mathMonth + 22
mathMonth = mathMonth / 200
mySprite.say(mathMonth)
