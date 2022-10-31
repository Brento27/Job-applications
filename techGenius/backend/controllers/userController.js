import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';
import { manager } from '../middleware/authMiddleware.js';
import { getDepartmentById } from './departmentController.js';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      telephoneNumber: user.telephoneNumber,
      email: user.email,
      isManager: user.isManager,
      department: user.department,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    telephoneNumber,
    email,
    status,
    password,
    department,
  } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    firstName,
    lastName,
    telephoneNumber,
    email,
    status,
    password,
    department,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      telephoneNumber: user.telephoneNumber,
      email: user.email,
      status: user.status,
      isManager: user.isManager,
      department: user.department,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.firstName,
      email: user.lastName,
      telephoneNumber: user.telephoneNumber,
      email: user.email,
      status: user.status,
      department: user.department,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.telephoneNumber = req.body.telephoneNumber || user.telephoneNumber;
    user.email = req.body.email || user.email;
    user.status = req.body.status || user.status;
    user.department = req.body.department || user.department;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      telephoneNumber: updatedUser.telephoneNumber,
      email: updatedUser.email,
      status: updatedUser.status,
      department: user.department,

      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc    Get all users
// @route   GET /api/users/query
// @access  Private/Admin
const getUsersFilter = asyncHandler(async (req, res) => {
  console.log(req.query.status);
  console.log(req.query.department);
  console.log(req.query.manager);
  let users = [];
  if (req.query.status || req.query.department || req.query.manager) {
    users = await User.find({
      status: req.query.status,
    });

    // let department = getDepartmentById(req.query.department);

    // if (department) {
    //   let departmentManager = await User.findById(department.managerId);
    //   users = users.filter(
    //     (user) => user.manager._id == departmentManager._id || user._id
    //   );
    // }

    let manager = await User.findById(req.query.manager);

    console.log(manager);
    if (manager) {
      users = users.filter((user) => user.isManager === false);
      users = users.filter((user) => user.manager._id == manager._id);
      console.log(users);
    }
  } else {
    users = await User.find({});
  }
  res.json(users);
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: 'User removed' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  console.log(req.body.department);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.telephoneNumber = req.body.telephoneNumber || user.telephoneNumber;
    user.email = req.body.email || user.email;
    user.status = req.body.status || user.status;
    user.department = req.body.department || user.department;
    user.isManager = req.body.isManager || user.isManager;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      telephoneNumber: updatedUser.telephoneNumber,
      email: updatedUser.email,
      status: updatedUser.status,
      department: user.department,
      isManager: user.isManager,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  getUsersFilter,
};
