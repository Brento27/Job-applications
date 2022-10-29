import mongoose, { Schema } from 'mongoose';

const departmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    managerId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    managerName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

const Department = mongoose.model('Department', departmentSchema);

export default Department;
