class myhashtable {
    constructor() {
      this.table = new Array(100);
      this.size = 0;
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }
    //inp = [harsha,27]
    //inp=[manvi,26]
    //index = 1
    //[,[[harsha,25],[manvi,26]],,,]  { : , : } [ k:v , k:v]

    capturescore(key, value) {
      const index = this._hash(key); // index =1

      if (this.table[index]) {
         
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) 
            {

                this.table[index][i][1] = this.table[index][i][1]+ value;
                return;

            }
            }
            this.table[index].push([key, value]);
      } else {
        this.table[index] = [];
        this.table[index].push([key, value]);
      }
      this.size++;
    }
    get(key) {
      const index = this._hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[index][i][0] === key) {
            return this.table[index][i][1];
          }
        }
      }
      return undefined;
    }
    remove(key) {
      const index = this._hash(key);
      if (this.table[index] && this.table[index].length) {
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[index][i][0] === key) {
            this.table[index].splice(i, 1);
            this.size--;
            return true;
          }
        }
      } else {
        return false;
      }
    }
    display() {
      this.table.forEach((values, index) => {
        const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
  
        );
        console.log(`${index}: ${chainedValues}`);
      });
    }
  }

var scoreboard = new myhashtable();

var scorebtn = document.getElementById("Capturescore")

scorebtn.addEventListener("click" , ()=>{

    var playername = document.getElementById("playername").value;
    var playerscore = parseInt(document.getElementById("Addnewscore").value);
    scoreboard.capturescore(playername , playerscore);
    scoreboard.display();


})

var GetScore = document.getElementById("GetScore")
var para = document.getElementById("aval_bal_p")

GetScore.addEventListener("click" , ()=>{
    var playername = document.getElementById("getplayername").value;
    var score = scoreboard.get(playername);
    console.log(score);
    para.innerText=`${playername} score is ${score}`;
})






