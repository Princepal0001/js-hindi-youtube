   //******** for of *********/

//    for (const element of object) {
    
//    }
  const arr=[1,2,3,4,5];
    for (const num of arr) {
        // console.log(num);
        
    }

    const string=["batman","superman","spiderman"];
      for (const i of string) {
        // console.log(i);
      }


      const greet="prince pal";
      for (const i of greet) {
        // console.log(`char of greet : ${i}`);
      }

      //*******    Maps     *********/
      const map = new Map()
      map.set('in',"india")
      map.set('US',"america")
      map.set('fr',"france")
      map.set('jp',"japan")
      map.set('US',"america")
    //   console.log(map);
      for (const [key,value] of map) {
        // console.log(key,':-',value);  
 
      }



      // object
    const games = {
      game1 : 'spider',
      game2 : 'batman'
    }
    for (const [key,value] of games) {
      console.log(key,':-',value);  

    }

      
