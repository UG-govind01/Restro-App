// import mongoose, {Schema} from "mongoose";

// const UserSchema = new Schema({
//     name:string,
//       email:string,
//       password  :string,
//       confirmPassword:string,
//       mobileNumber:number,
// });
// const User = mongoose.models.User || mongoose.model("User", UserSchema);
// export default User;


import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  confirmPassword: { type: String },
  mobileNumber: { type: Number },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
