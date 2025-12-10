(function hello(){  //name iife
    console.log("Hello World");
})();

//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It's commonly used to create a private scope and avoid polluting the global namespace.
// It is defined using a function expression that is immediately invoked after its creation.

((name)=>{    // This arrow function won't execute if we didn't stop the execution of the first function, and we can stop it by putting the semi colon....
    console.log(`Hello form ${name}`);
})('Vishal')  //unamed iife