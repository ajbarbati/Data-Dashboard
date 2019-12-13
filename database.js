const mysql = require("mysql2")
const dbConnection = mysql.createPool(process.env.JAWSDB_URL).promise()

//   dbConnection = mysql.createPool({
//       host: "localhost", // MYSQL HOST NAME
//       user: "root", // MYSQL USERNAME
//       password: "root", // MYSQL PASSWORD
//       database: "nodejs_login" // MYSQL DB NAME
//     })
//     


// dbConnection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     dbConnection.query("create schema if not exists nodejs_login;USE nodejs_login;CREATE TABLE `users` (`id` int(10) unsigned NOT NULL AUTO_INCREMENT,`name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,`email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,`password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,PRIMARY KEY (`id`),UNIQUE KEY `email` (`email`)) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;",
//     function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });

module.exports = dbConnection
