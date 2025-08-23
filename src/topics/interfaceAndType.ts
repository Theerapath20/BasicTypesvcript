export const interfaceAndType = () => {
  //interface
  interface User {
    name: string;
    age: number;
  }

  // merge
  interface User {
    gender: string;
  }

  const user: User = {
    name: "T",
    age: 30,
    gender: "male",
  };

  //   console.log(user.name);
  //   console.log(user.age);
  //   console.log(user.gender);

  // การสืบทอด

  interface Admin extends User {
    isAdmin: Boolean;
  }

  const admin: Admin = {
    name: "A",
    age: 20,
    isAdmin: true,
    gender: "female",
  };

  //console.log(admin);

  // type
  type Person = {
    name: string;
    age: number;
  };

  // union เหมือน extends ใน interface
  type Role = Person & { isAdmin: boolean };

  const person: Role = {
    name: "b",
    age: 10,
    isAdmin: false,
  };
  //console.log(person);

  // usecase
  type Color = "red" | "black" | "white";

  interface Car {
    band: string;
    price: number;
    color: Color;
  }

  const car: Car = {
    band: "TOYOTA",
    price: 100000,
    color: "black",
  };
  console.log(car.color);
};
