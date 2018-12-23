const message = "Hello from My Module";
const name = "Frank";
const location = "Texas";
const greeting = name => {
  console.log(`Welcome to the course ${name}`);
};

export { message, name, greeting, location as default };
