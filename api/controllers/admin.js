const { validationResult } = require("express-validator");
const { giveToken } = require("../services/giveToken");
const { errorHandler } = require("../services/errorHandler");
const argon2 = require("argon2");
const Admin = require("../models/admin");
const Employee = require("../models/employee");

// @route   POST api/v1/admin/login
// @dsc     Login a admin
// @access  Public
exports.loginAdmin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorHandler(res, "Incorrect email", 400);
  }
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return errorHandler(res, "admin not found", 404);
    }
    if (admin.password != password) {
      return errorHandler(res, "incorrect password", 401);
    }
    giveToken(admin, res);
  } catch (err) {
    return errorHandler(res, "Server Error", 500);
  }
};

// @route   POST api/v1/admin/addEmployee
// @dsc     Add an Employee
// @access  Private
exports.addEmployee = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorHandler(res, "Incorrect email", 400);
  }
  try {
    const { name, email, password, role, team, salary } = req.body;
    const hashedPassword = await argon2.hash(password);
    const employee = new Employee({
      name,
      email,
      password: hashedPassword,
      role,
      team,
      salary,
    });
    await employee.save();
    return res.status(200).json({
      success: true,
      message: "Successfully created Employee!",
      data: employee,
    });
  } catch (err) {
    console.log(err.message);
    return errorHandler(res, "Server Error", 500);
  }
};

// @route   GET api/v1/admin/getAllEmployees
// @dsc     Get all Employees
// @access  Private
exports.getAllEmployees = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorHandler(res, "Incorrect email", 400);
  }
  try {
    const employees = await Employee.find({});
    return res.status(200).json({
      success: true,
      count: employees.length,
      message: "Employees loaded succesfully!",
      employees: employees,
    });
  } catch (err) {
    console.log(err.message);
    return errorHandler(res, "Server Error", 500);
  }
};

// @route   GET api/v1/admin/employee/:id
// @dsc     Get Employee by id
// @access  Private
exports.getEmployeeById = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorHandler(res, "Incorrect email", 400);
  }
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return errorHandler(res, "employee not found", 404);
    }
    return res.status(200).json({
      success: true,
      message: "Employee loaded succesfully!",
      employee: employee,
    });
  } catch (err) {
    console.log(err.message);
    return errorHandler(res, "Server Error", 500);
  }
};

// @route   PUT api/v1/admin/employee/:id
// @dsc     Edit Employee by id
// @access  Private
exports.updateEmployeeById = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorHandler(res, "Incorrect email", 400);
  }
  try {
    let employee = await Employee.findById(req.params.id);
    if (!employee) {
      return errorHandler(res, "employee not found", 404);
    }
    const { name, email, password, role, team, salary } = req.body;
    employee.name = name;
    employee.email = email;
    employee.password = await argon2.hash(password);
    employee.role = role;
    employee.team = team;
    employee.salary = salary;

    await employee.save();

    return res.status(200).json({
      success: true,
      message: "Employee updated succesfully!",
      employee: employee,
    });
  } catch (err) {
    console.log(err.message);
    return errorHandler(res, "Server Error", 500);
  }
};

// @route   DELETE api/v1/admin/employee/:id
// @dsc     Delete Employee by id
// @access  Private
exports.deleteEmployeeById = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorHandler(res, "Incorrect email", 400);
  }
  try {
    let employee = await Employee.findById(req.params.id);
    if (!employee) {
      return errorHandler(res, "employee not found", 404);
    }
    await employee.delete();
    return res.status(200).json({
      success: true,
      message: "Employee deleted succesfully!",
    });
  } catch (err) {
    console.log(err.message);
    return errorHandler(res, "Server Error", 500);
  }
};
