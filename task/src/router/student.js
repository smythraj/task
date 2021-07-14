const express = require("express");
const router = express.Router();
const Student = require("../models/students");

router.post("/people", async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    let payload = {
      name: name,
      email: email,
      phone: phone,
      address: address,
    };
    console.log(payload);
    const user = new Student(payload);
    const createuser = await user.save();

    res.status(201).send(createuser);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/people", async (req, res) => {
  try {
    const StudentData = await Student.find();
    res.send(StudentData);
  } catch (e) {
    res.status(401).send(e);
  }
});

router.get("/people/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const studentsdata = await Student.findById(id);
    if (!studentsdata) {
      return res.status(401).send("not found");
    } else {
      res.send(studentsdata);
    }
  } catch (e) {
    res.status(401).send(e);
  }
});

router.delete("/remove/:id", async (req, res) => {
  try {
    const deleteStudent = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
      console.log(req.params.id);
    } else {
      res.send(deleteStudent);
      console.log(deleteStudent);
    }
  } catch (e) {
    res.status(501).send(e);
  }
});

router.put("/people/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatStudent = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(updatStudent);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
