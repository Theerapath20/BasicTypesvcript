export const asyncAwait = () => {
  const getData = async () => {
    try {
      const respons = await fetch(
        "https://jsonplaceholder.typicode.com/users/5"
      );
      const data = await respons.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //  getData()

  interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
  }

  const getUserType = async (): Promise<User> => {
    const respons = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await respons.json();
    return data;
  };

  getUserType().then((user) => {
    console.log("my name is ", user.phone);
  });

  // เป็นการระบุว่า ให้สามารถเรียกข้อมูลที่เรา fetch มาได้แค่ตามที่กำหนดเท่านั้น (ตามข้อมูลที่อยู่ใน interface ) ถึงแม้ api  จะมีมากมายแค่ไหนห็ตาม
};
