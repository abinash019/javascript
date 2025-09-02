console.log('hello world')
/*let a = 'abinash'
var b = 'karki'
var b = 'abinash'*/
//variable declaration
let a = 5
let b = 10
console.log(a, b)



//declaration fuction
function cal() {
  return console.log('hello')
}

// function addition
function calc(a, b) {
  return a + b
}

//arrow function calculator
const calculator = (a, b) => {

  return a * b

}

//odd even checking unction
const evenCheck = (a) => {
  // let a = this.a

  if (a % 2 == 0) {
    return `${a} is even number`

  }
  else {
    return `${a} is odd number`
  }



}


let list = [5, 6, 7, 8, 9, 55, 2]


const checklist = (list) => {
  var max = list[0];
  for (i = 1; i < list.length; i++) {

    if (max < list[i]) {
      max = list[i]
    }
  }
  return max

}

// using foreach 

const checkminimum = (list) => {
  var max = list[0];
  list.forEach((items) => {
    if (items < max) {
      max = items

    }

  })
  return max
  /*list.array.forEach(element => {


  });*/



}

//Reverse a string without using built-in methods.
let name = 'abinash'

const reverseStr = (name) => {
  let reversed = '';

  for (i = name.length - 1; i >= 0; i--) {
    reversed += name[i];  // Add each character to the reversed string
  }
  return reversed



  /*name.forEach((items)=>{
    return })*/


}


const reverseString = (name) => {
  let reversed = '';

  name.split('').forEach((items) => {
    reversed = items + reversed
  })
  return reversed
}

let str = 'Hello, I am Abinash! How are you?';

const countVowels = (str) => {
  let count = 0
  let vowels = 'aeiouAEIOU';

  for (let chr of str) {
    if (vowels.includes(chr)) {
      count++
    }
  }

  return count

}

let numbers = [64, 25, 12, 22, 11];

const sortnumnber = (number) => {
  let order = list[0]
  for (i = 0; i < number.length - 1; i++) {
    for (j = 0; j < number.length - 1 - i; i++) {
      if (order[j] > order[j + 1]) {
        let temp = order[j];
        order[j] = order[j + 1];
        order[j + 1] = temp
      }
    }
  }
  return order
}


//class
//Create an object with properties name, age, and a method greet().








console.log(calc(2, 3))
console.log('in here code of calc')
console.log(calculator(2, 3))
console.log(calculator(2, 3))
console.log('in here code of even odd check')

console.log(evenCheck(5))

console.log(evenCheck(8))
console.log('in here code of check list maximum number')

console.log(checklist(list))
console.log('in here code of check minimum')

console.log(checkminimum(list))

console.log(reverseStr(name))

console.log(countVowels(str))
//console.log(numbers.sort())
console.log(sortnumnber(numbers))



const person = {
  name: 'John',  // Property: name
  age: 30,
  greet: function () {
    console.log(`hello, my name is ${this.name} and I am ${this.age} years old. `)
  },

}
console.log(`object is printing`)
person.greet()



const removeDuplicate = (arr) => {
  return [...new Set(arr)]

}


const removeDuplicates = (arr) => {

  return arr.filter((value, index, self) => self.indexof(value) === index)


}

const delayexample = () => {
  console.log(`start`)
  setTimeout((
  ) => {
    console.log(`hello 1 second late`)
  }, 1000)

}
delayexample()
const sleep = () => {
  return new Promise(resolve => setTimeout(resolve, ms))

}
sleep(2000).then(() => {
  console.log(`this message is shown  after 2 second  `)
}
)













console.log('in here code finish')


