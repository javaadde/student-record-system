import mongoose,{Schema,Document} from "mongoose";
// import {IStudent} from "../interfaces/student.interface.ts";


const StudentSchema = new Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    course:{type:String, required:true},
    email:{type:String, required:true}
})

export const Students = mongoose.model("Students",StudentSchema);