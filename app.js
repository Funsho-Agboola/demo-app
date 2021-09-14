const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("Welcome to PutOns Homepage: Current admins are Funzee and Eazy");
});

app.listen(PORT, () => {
  console.log('App up at port ${PORT}');
});


