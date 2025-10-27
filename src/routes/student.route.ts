import express from 'express';
import  StudentController from '../controllers/student.controller.ts';

const controller = new StudentController()

export const Srouter =  express.Router();
Srouter.use(express.json())
Srouter.use(express.urlencoded({extended:true}))


Srouter.post("/create", controller.insertOneStudent);
Srouter.get("/find",controller.getAllStudents);
Srouter.get("/find/:id", controller.getSpecificStudent);
Srouter.put("/update/:id", controller.updateAnStudent);