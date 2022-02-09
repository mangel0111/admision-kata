import { Schema, model } from "mongoose";

interface Student {
  name: string;
}

const studentSchema = new Schema<Student>({
  name: { type: String, required: true, maxlength: 100 },
});

const UserService = model("students", studentSchema);

export default UserService;
