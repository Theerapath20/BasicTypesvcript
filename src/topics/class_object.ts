export const  class_object = () => {
   class Person {
    
      
     //private name : string  // ไม่สามารถเรียกตัวแปรนี้ ตรงๆได้ 
      name: string  // สามารถเรียกตัวแปรนี้ ตรงๆได้

    constructor(name:string) {
        this.name = name //  นำตัวแปรที่อยูาภายนอก มาใช้ภายในนี้
    }
   
    // ไม่มี funtion  เรียกว่า method 
    greet(): string {
         return `Hello my name ${this.name}`
    }

   }

//    const person1 = new Person("Thee")
//    console.log(person1.greet());
//    console.log(person1.name);
   
//-----------------------------------------------
 class Animal {
    protected name: string

    constructor(name:string) {
        this.name = name 
    }

    makeSound(): void {
        console.log("Some sound");
        
    }
 }


class Dog extends Animal {
     private age: number

  // constructor คือ ตัวที่บอกว่า อนุญาจให้ class ลูกนำตัวแรปไปใช้ได้
     constructor(name:string , age: number) {
        super(name)
        this.age = age
     }

     makeSound(): void {
         console.log('Voofff!');
         
     }

     getInfo(): string {
         return `${this.name} is ${this.age} years old`
     }
}
   const dog = new Dog("Buddy" , 3)
   dog.makeSound()
   console.log(dog.getInfo());
   
   
}


// สรูป --- >  สร้าง class แล้วนำ class ไปเรียกใช้ โดย parameter จะอยู่ใน constructor และ สามารถเรีกยใช้ method[   testMethod(){}   ] ได้  