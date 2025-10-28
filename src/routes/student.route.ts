import express from 'express';
import StudentController from '../controllers/student.controller.ts';


export const Srouter =  express.Router();
Srouter.use(express.json())
Srouter.use(express.urlencoded({extended:true}))


Srouter.post("/create",StudentController.insertOneStudent);
Srouter.get("/find",StudentController.getAllStudents);
Srouter.get("/find/:id", StudentController.getSpecificStudent);
Srouter.put("/update/:id", StudentController.updateAnStudent);