# Typescript Crash Course

## What is Typescript?

Typescript is a superset of Javascript owned and maintained by Microsoft. It enhances the purely dynamic typing system of js by adding support for statically typed variables. This also extends to objects, through the use of interfaces. The Typescript compiler transpiles the source code to Javascript so it can be used in the browser.

## What does Typescript add?

- Static type annotations and compile-time type checking
- Type inference
- Interfaces
- Enumerated types
- Generics

## Why use Typescript?

- Code documents itself in the IDE.
- The ts compiler error checks your code before building: this helps to catch errors that may not have been detected using plain js.
- Due to typing, code is generally more readable and easier to understand.

## How to Typescript

#### See examples.ts

- As Typescript is an extention to Javascript, the general sematics are the exact same; for instance,variables are still defined with `let` and `const`.
- Variables can now be given type annotations using a colon.
- Function parameters and return values can be typed in a similar manner.
- Interfaces are used to assign a type to objects. While it is a multi-paradigm language, Typescript heavily emphasises an object-oriented programming style, and supports the use of inheritance as well as polymorphism.
- Types are similar to interfaces, however their use case extends beyond simply defining objects. They can be used to create any custom variable type.

## Typescript and React

#### See Example Component

- While React is powerful by itself, using Typescript adds a whole new level of depth. The example component demonstrates how Typescript principles can be applied to a simple React component, as well as how it substantially improves the codebase.
- Alongside React, there is also a module installed called "@types/react". This includes the type definitions for all the features added by React, such as components and css-in-js style objects.
- The only major difference between JS and TS for React is that component props can now be assigned an interface, which is enforced wherever the component is used.

## Our Conventions

- No use of `any` unless absolutely necessary.
- Primitive types should be used where possible.
- All objects should be given an interface.
- All components should have a single interface called `ComponentNameProps`.
- All interface names _apart from_ components should have an I appended i.e. `IUser`.
- All types and interfaces should be named in pascal-case i.e. `UsernameType`.
- All components should be typed function components that take a single `props` object. (see example component)
