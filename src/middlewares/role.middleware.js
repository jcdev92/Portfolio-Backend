const adminValidate = (req, res, next) => {
  if (req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
}

module.exports = adminValidate;
