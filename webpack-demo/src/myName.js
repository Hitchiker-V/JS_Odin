// Using arrow functions so that the context can be picked from the surrounding lexical environment and
// passed to different contexts
const myname = (name) => 'Hi! My name is '+name;

export{myname};