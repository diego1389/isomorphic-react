let __value = 42;
const isomorphicFetch = jest.fn(()=> __value); //creates a spy function
isomorphicFetch.__setValue = v=> __value = v;

export default isomorphicFetch;
