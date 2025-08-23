export const funcType = () => {
  const greet = (name: string, title?: string): string => {
    return `Hello, ${title || ""} ${name}`;
  };

    console.log(greet("T", "Mr."));
    console.log(greet("john"));

  // function แบบ REST
  const sum = (...number: number[]): number => {
    return number.reduce((prev, current) => prev + current, 0);
  };
  console.log(sum(1, 2, 3));
};
