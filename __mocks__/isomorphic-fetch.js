let __value = 42;
const isomorphicFetch = jest.fn(()=> __value); //creates a spy function that returns __value
isomorphicFetch.__setValue = v=> __value = v; //equals to a method that changes this value property thats here on the global scope of this module
export default isomorphicFetch;
