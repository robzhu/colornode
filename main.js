const color = require("randomColor")();
const name = require("./randomName");

const app = require("express")();
app.get("/", (_, res) => {
  res.send(`
    <html>
      <body bgcolor=${color}>
      <h1>${name}</h1>
    </html>
  `);
});

app.get("/health", (_, res) => {
  res.status(200).send("I'm OK");
});
app.listen(80, () => console.log(`${name} started on port 80`));
