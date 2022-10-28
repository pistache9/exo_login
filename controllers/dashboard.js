import UserModel from "../Models/User.js";

export default async function home(req, res) {

  const { email, password } = req.body;

  const user = await UserModel.findOne({email});

  if (!user) {
    res.render("login", {user})
    return
  }

  if (password === user.password) {
    res.render("dashboard", {user});
  } else {
    res.render("login", {user})
  }

}
