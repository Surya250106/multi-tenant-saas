const userService = require('../services/user.service');

exports.createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(
      req.params.tenantId,
      req.body,
      req.user
    );

    return res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: user
    });
  } catch (err) {
    next(err);
  }
};

exports.listUsers = async (req, res, next) => {
  try {
    const users = await userService.listUsers(
      req.params.tenantId,
      req.query,
      req.user
    );

    return res.status(200).json({
      success: true,
      data: users
    });
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(
      req.params.userId,
      req.body,
      req.user
    );

    return res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: user
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.userId, req.user);

    return res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (err) {
    next(err);
  }
};
