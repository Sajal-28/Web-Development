var numberOfBeer = 100
var oneLessBeer
function beer(){
    while(numberOfBeer >= 0){
        if (numberOfBeer > 1){
        oneLessBeer = numberOfBeer - 1;
        console.log(numberOfBeer + " bottles of beer on the wall, " + numberOfBeer + " bottles of beer.\n Take one down and pass it around, "+ oneLessBeer +" bottles of beer on the wall.")
        } 
        else if (numberOfBeer === 1) {
            console.log("1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.")
        }
        else {
            console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.")
        }
        numberOfBeer--;
    }
}
beer(); 