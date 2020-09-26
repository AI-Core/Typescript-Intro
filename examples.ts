// Type-annotated variable
let n: number = 5;
// As it is assigned a value at initialisation, the type is redundant.
// We can also simply write:
let x = 5;

// Type-annotated function, implicit return
const func = (a: number, b: string) => {
  return a.toString() + b;
};

// Type-annotated function, explicit return
const func1 = (a: number, b: string): string => {
  return a.toString() + b;
};

// We can also create our own types, using the "type" keyword.
// These can be defined using other types, as well as set operations such as union
type confirmation = "yes" | "no";

// Interfaces are used to create types of objects.
interface User {
  name: string;
  password: string;
}

// Interfaces also support inheritance
interface Admin extends User {
  permissions: Array<string>;
}

// Typescript has support for generics.
interface List<T> {
  content: Array<T>;
}

// These generics can be replaced with any valid type when the interface is used
let list: List<string> = { content: ["a", "b"] };

// Sometimes it may be desireable to cast from one type to another.
// For instance when recieving data from an API.
let thing: unknown = {
  name: "bob",
  password: "password",
};
// We can cast compatible types by using the "as" keyword.
let thingUser = thing as User;
