import { Students } from "../models/student.model.ts";
// import { Request } from "express";

class StudentController {

   async insertOneStudent(req: Request, res: Response) {
    try {
      const student = await Students.create(req.body);
      res.json({ message: "student is created", cretedStudent: student });
    } catch (error) {
      console.error(error);
    }
  }

  async getAllStudents(req: Request, res: Response) {
    try {
      const data = await Students.find();
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async getSpecificStudent(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = await Students.findById(id);
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async updateAnStudent(req:Request, res: Response) {
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