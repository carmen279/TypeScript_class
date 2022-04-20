/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #medium #template-literal
  
  ### Question
  
  `FooBarBaz` -> `foo-bar-baz`
  
  > View on GitHub: https://tsch.js.org/612
*/


/* _____________ Your Code Here _____________ */

type KebabCase1<S extends string> = S extends `${infer first}${infer rest}`?
        first extends Uppercase<first>?
            first extends Lowercase<first>?
                `${first}${KebabCase1<rest>}`
                : `-${Lowercase<first>}${KebabCase1<rest>}`
            :`${first}${KebabCase1<rest>}`
: S

type KebabCase<S extends string> = KebabCase1<S> extends `-${infer letter}${infer rest}`?
    `${letter}${rest}`
    : KebabCase1<S>


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

let example :  KebabCase<'😎'>
type cases = [
    Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
    Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
    Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
    Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
    Expect<Equal<KebabCase<'-'>, '-'>>,
    Expect<Equal<KebabCase<''>, ''>>,
    Expect<Equal<KebabCase<'😎'>, '😎'>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/612/answer
  > View solutions: https://tsch.js.org/612/solutions
  > More Challenges: https://tsch.js.org
*/


