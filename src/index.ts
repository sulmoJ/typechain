

interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "sulmo",
  age: 24,
  gender: "male"
};

const sayHi = (person: Human): string => {
  const { name, age, gender } = person;
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi(person));

export {};
