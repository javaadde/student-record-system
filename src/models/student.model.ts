import mongoose,{Schema,Document} from "mongoose";
import {IStudent} from "../interfaces/student.interface.ts";


interface StudentDocument extends IStudent , Document {};

const StudentSchema = new Schema<StudentDocument>({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    course:{type:String, required:true},
    email:{type:String, required:true}
})

export const Students = mongoose.model<StudentDocument>("Students",StudentSchema);