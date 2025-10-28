import { Students } from "../models/student.model.ts";
import { Request,Response } from "express";

class StudentController {
  
    static async insertOneStudent(req: Request, res: Response) {
    try {
      const student = await Students.create(req.body);
      res.status(200).json({ message: "student_is_created", createdStudent: student });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating student" });
    }
  }


   static async getAllStudents(req: Request, res: Response) {
    try {
      const data = await Students.find();
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

   static async getSpecificStudent(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = await Students.findById(id);
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateAnStudent(req:Request, res: Response) {
    try {
      
        const id = req.params.id;
        const data = await Students.findByIdAndUpdate(id, req.body, {new:true})
        
        res.json(data)

    } catch (error) {
      console.log(error);
    }
  }

}


export default StudentController