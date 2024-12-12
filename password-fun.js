const bcrypt = require("bcryptjs");



async function encryptPassword(password) {

  // create a "salt" to enhance the encryption
  // it's a random number that gives extra protection
  // const salt = await bcrypt.genSalt(10);
  const salt = "$2a$10$9HcgIykiI8MOH8eBm693Hu";
  const hashedPassword = await bcrypt.hash(password, salt);

  // you can save hashedPassword safely in a database
  // you cannot save password safely in a database 

  console.log(password);
  // console.log(salt);
  console.log(hashedPassword);
  return hashedPassword;
}
// encryptPassword("h3ll0");


async function checkPassword(password, hashedPassword) {
  const p = await encryptPassword(password);
  // console.log(password);
  // console.log(p);
  // console.log(hashedPassword);
  if(p === hashedPassword) {
    console.log("welcome, your password is: " + password);
    return true;
  } else {
    console.log("incorrect password")
    return false;
  }
}

// checkPassword("h3llo", "$2a$10$9HcgIykiI8MOH8eBm693HuSyKwyrBYCffUobVqJ1W/ATVLaATOHwi");
// check password for h3ll0
// checkPassword("h3ll0", "$2a$10$9HcgIykiI8MOH8eBm693HuSyKwyrBYCffUobVqJ1W/ATVLaATOHwi");
// check password for h3ll0
// checkPassword("p4ssw0rd", "$2a$10$9HcgIykiI8MOH8eBm693HuSyKwyrBYCffUobVqJ1W/ATVLaATOHwi");

// check password for h0td0g
// encrypted password "$2a$10$9HcgIykiI8MOH8eBm693Hukke53a5KZGJHko9NQdAKCfO.BwO5NjS"
// checkPassword("h0td0g", "$2a$10$9HcgIykiI8MOH8eBm693Hukke53a5KZGJHko9NQdAKCfO.BwO5NjS");


// encryptPassword("h0td0g");
// result: $2a$10$9HcgIykiI8MOH8eBm693Hukke53a5KZGJHko9NQdAKCfO.BwO5NjS

// encryptPassword("UpGr@d3")
// result: $2a$10$9HcgIykiI8MOH8eBm693HuoQaA.Hb.kpMNDRUhKJVd5PP3hrJHvrO
//Correct Password
// checkPassword("UpGr@d3", "$2a$10$9HcgIykiI8MOH8eBm693HuoQaA.Hb.kpMNDRUhKJVd5PP3hrJHvrO")
//Incorrect Password
// checkPassword("UpGrAd3", "$2a$10$9HcgIykiI8MOH8eBm693HuoQaA.Hb.kpMNDRUhKJVd5PP3hrJHvrO")


// encryptPassword("F0rgetful")
// result: $2a$10$9HcgIykiI8MOH8eBm693HuysgyAomyHCKgbBr.d1pNA1LWF5rEleC
//incorrect password
// checkPassword("Forgetful", "$2a$10$9HcgIykiI8MOH8eBm693HuysgyAomyHCKgbBr.d1pNA1LWF5rEleC")
//correct password
// checkPassword("F0rgetful", "$2a$10$9HcgIykiI8MOH8eBm693HuysgyAomyHCKgbBr.d1pNA1LWF5rEleC")

encryptPassword("c4tzzzz!");
checkPassword("c4tzzzz!", "$2a$10$9HcgIykiI8MOH8eBm693HuCh4dzYgumX4pbAQaz0J4id/XsQc4EY2")
checkPassword("c4tzzzz!!", "$2a$10$9HcgIykiI8MOH8eBm693HuCh4dzYgumX4pbAQaz0J4id/XsQc4EY2")