let getLogin = (req, res) => {
  return res.render("auth/login.ejs", {
    error: req.flash("error"),
  });
};

let checkLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
};

let getLogout = (req, res) => {
  req.session.destroy(function (err) {
    console.log(err);
    return res.redirect("/login");
  });
};


let checkLoggedOut = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/users");
  }
  next();
};


module.exports = {
  getLogin: getLogin,
  checkLoggedIn: checkLoggedIn,
  getLogout:getLogout,
  checkLoggedOut: checkLoggedOut,
};
