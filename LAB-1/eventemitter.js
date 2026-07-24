const login = (name) => {
    console.log(`Welcome ${name} you logged in successfully`);
};
const start = () => {
    console.log("Application started");
};
const working = (name) => {
    console.log(`${name} add item to cart`);
};
const checkout = (name) => {
    console.log(`${name} logged out successfully`);
}

start();
login("Aditya");
working("Aditya");
checkout("Aditya");