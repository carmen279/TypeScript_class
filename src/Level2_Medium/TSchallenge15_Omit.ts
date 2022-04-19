/*
  3 - Omit
  -------
  by Anthony Fu (@antfu) #medium #union #built-in

  ### Question

  Implement the built-in `Omit<T, K>` generic without using it.

  Constructs a type by picking all properties from `T` and then removing `K`

  For example

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyOmit<Todo, 'description' | 'title'>

  const todo: TodoPreview = {
    completed: false,
  }
  ```

  > View on GitHub: https://tsch.js.org/3
*/


/* _____________ Your Code Here _____________ */

//type Remove<T, K> = T extends K ? never : T
//type MyOmit<T, K> = {[U in Remove<keyof T,K>] : Remove<T,K>[U]}

type MyOmit<T, K> = {[U in keyof T as U extends K ? never : U]: T[U]; }


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

let example : MyOmit<Todo, 'description'>
type cases = [
    Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
    Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]
/* TODO - SHOULD GIVE ERROR???
// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>
*/

interface Todo {
    title: string
    description: string
    completed: boolean
}

interface Expected1 {
    title: string
    completed: boolean
}

interface Expected2 {
    title: string
}



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3/answer
  > View solutions: https://tsch.js.org/3/solutions
  > More Challenges: https://tsch.js.org
*/




