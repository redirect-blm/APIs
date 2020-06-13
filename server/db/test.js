var pgtools = require("pgtools");
const config = {
  user: "redire¢t",
  host: "localhost",
  password: "password",
  port: 5432,
};

pgtools.createdb(config, "test_BLM_db", function (err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
});