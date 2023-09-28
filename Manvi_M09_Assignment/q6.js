const formcircle = prompt("enter 1 for circle and 2 for radius")

switch (formcircle) {
   case "1" :
      const radius  = prompt("enter a radius opf circle: ")

     const perimeterofcircle = 2*(Math.PI*(radius**radius));

      const areaofcircle = Math.PI*radius*radius;

   console.log(`the area of the circle is ${areaofcircle} and the perimeter of circle is ${perimeterofcircle}`)

   break;

   case "2":

   const side = prompt("enter the no. of sides")

   const perimeterofsquare = 4*side;

   const areaofsquare = side*side;

   console.log(`The area of square is ${areaofsquare} and the perimeter of square is ${perimeterofsquare} `)

   break;

   default:
   alert("enter valid option");
   }

   formcircle;