const adminValidate = (req, res, next) => {
  if (req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Unauthorized, you dont have admin permissions' });
  }
  next();
}

module.exports = adminValidate;
