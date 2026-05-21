const adminauth = (req, res, next) => {
  const tokenId = "xyz";
  if (tokenId != "xyz") {
    res.status(401).send("you are not authorised");
  } else {
    next();
  }
};

module.exports = {adminauth}
