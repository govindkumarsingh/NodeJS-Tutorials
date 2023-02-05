const buffer = new Buffer.from("Govind", "utf-8");
buffer.write("Node.js");

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
