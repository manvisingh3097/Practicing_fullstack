class MovieCast {
    constructor() {
      this.castStack = [];
    }
  
    // Add a new cast member to the stack
    addCastMember(name) {
      this.castStack.push(name);
    }
  
    // Display all names stored in the stack
    showCast() {
      console.log("Movie Cast:");
      for (let i = this.castStack.length - 1; i >= 0; i--) {
        console.log(this.castStack[i]);
      }
    }
  }
  
  // Example usage
  const cast = new MovieCast();
  cast.addCastMember("Tom Hanks");
  cast.addCastMember("Emma Watson");
  cast.addCastMember("Dwayne Johnson");
  cast.showCast();
  