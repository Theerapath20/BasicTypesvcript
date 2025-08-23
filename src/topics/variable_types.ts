// ชนิดข้อมูล
// normal type
export function variable_type() {
  const age: number = 12;
  const pi: number = 3.14;
  const price: number = 100.5;
  const discount: number = -35;

  console.log(age);
  console.log(pi);
  console.log(price);
  console.log(discount);

  const name: string = "john";
  const message: string = `Hello ${name}`;

  console.log(message);

  const isDult: boolean = true;
  const isStudent = false;

  console.log(isDult);
  console.log(isStudent);

  // advance type

  // 1. array
  const number: number[] = [1, 2, 3, 4, 5];
  const people: string[] = ["john", "doe", " thee"];
  const generic: Array<String> = ["ball", "bas", "valle"]; // generic type
  const isRef: boolean[] = [true, false, true];

  console.log(number[0]);
  console.log(people[1]);
  console.log(generic[2]);
  console.log(isRef[2]);

  //2.tuple
  const person: [string, number] = ["T", 23];

  console.log(person[0]);
  console.log(person[1]);

  //3 enum คือ fig คำ ในชนิดข้อมูล  จะ return เป็นตำแหน่ง(ตัวเลข)
  enum Color {
    red,
    green,
    blue,
  }

  const color: Color = Color.blue;
  console.log(`enum คือ ` + color);

  //3.object
  const user: { name: string; age: number }[] = [
    {
      name: "Peter",
      age: 30,
    },
    {
      name: "jane",
      age: 23,
    },
  ];
  console.log(user[0]?.name);
  console.log(user[1]?.name, user[1]?.age);
}
