const num=[1,2,3,4]

// const total = num.reduce(function (acc,currval){
//     console.log(`acc : ${acc} and the currVal ${currval}`);
//     return acc+currval
// },0)

const total =num.reduce((acc,curr)=>(acc+curr),0)
console.log(total);

const shoppingCart =[
    {itemName:"java",
      price : 3000
    },
    {itemName:"cpp",
      price : 2000
    },
    {itemName:"python",
      price : 1000
    },
]

const carttottal = shoppingCart.reduce((acc,course)=>(acc+course.price),0)
console.log(carttottal);

