// Create a constructor called Song() with at least 5 properties and 2 behaviours and instantiate it 3 times.
function Song(name,releaseDay,duration,artist,originCountry){
    this.name = name ;
    this.releaseDay = releaseDay ;
    this.duration = duration ;
    this.artist = artist ;
    this.country = originCountry ;
    this.records = function(){
        console.log(this.name + ' holds various natioanl records')
    };
    this.playing = function(){
        console.log(this.name +' song is playing for  ' + this.duration + ' minutes')
    };
    this.firstViewed = function(){
        console.log(this.name + ' first released on ' + this.releaseDay)
    }
    

    
}

var song1 = new Song("Jeena jeena" , ' monday ' , 5 , "Atif aslam", "India") ;
var song2 = new Song("Sukoon mila", ' tuesday ' , 6 , "Arijit Singh" , "India") ;
var song3 = new Song("Kala suit" , ' wednesday ' , 4 , "King" , "India") ;

console.log(song1 , song2 , song3);
song1.playing();
song1.records();
song2.playing();
song2.records();
song3.playing();