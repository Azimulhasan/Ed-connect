const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Profile Schema
const UserProfileSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  jwtToken: { type: String, required: true },
  image: { type: String, required: true },
  role: { type: String, required: true },
  referralCode: { type: String, required: true, unique: true },
});

// School Schema
const SchoolSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  slogan: { type: String, required: true },
  icon: { type: String, required: true },
  platformFees: { type: String, required: true },
  bannerImage: {
    desktop: {
      dimension: { type: String, required: true },
      url: { type: String, required: true },
    },
    mobile: {
      dimension: { type: String, required: true },
      url: { type: String, required: true },
    },
  },
  users: {
    students: { type: Number, required: true },
    teachers: { type: Number, required: true },
    management: { type: Number, required: true },
  },
});

// Class Schema
const ClassSchema = new Schema({
  name: { type: String, required: true },
  subjects: [{ type: String, required: true }],
  numberOfStudents: { type: Number, required: true },
  schoolYear: {
    start: { type: String, required: true },
    end: { type: String, required: true },
  },
  schoolId: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
});

// Referral Code Schema
const ReferralCodeSchema = new Schema({
  schoolId: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  userType: { type: String, required: true },
  classId: {
    type: Schema.Types.ObjectId,
    ref: "Class",
  },
  codes: [{ type: String, required: true, unique: true }],
});

// Tuition Class Schema
const TuitionClassSchema = new Schema({
  teacherId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  className: { type: String, required: true },
  subject: { type: String, required: true },
  description: { type: String, required: true },
  targetClassId: {
    type: Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  imageBanner: { type: String, required: true },
});

// Tuition Group Chat Schema
const TuitionGroupChatSchema = new Schema({
  id: { type: Number, required: true },
  sender: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
  },
  content: { type: String, required: true },
  type: { type: String, required: true },
  timestamp: { type: Date, required: true },
  schoolId: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  classId: {
    type: Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  tuitionClassId: {
    type: Schema.Types.ObjectId,
    ref: "TuitionClass",
    required: true,
  },
});

// Tuition Announcement Schema
const TuitionAnnouncementSchema = new Schema({
  id: { type: Number, required: true },
  sender: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
  },
  content: { type: String, required: true },
  type: { type: String, required: true },
  timestamp: { type: Date, required: true },
  schoolId: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  classId: {
    type: Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  fileUrl: { type: String },
});

// Student Schema
const StudentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  schoolId: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  section: { type: String, required: true },
  classRoleNumber: { type: String, required: true },
  classId: {
    type: Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  studentIdCardImage: { type: String },
});

// Student Enrolled in Tuition Schema
const StudentEnrolledInTuitionSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  tuitionClassId: {
    type: Schema.Types.ObjectId,
    ref: "TuitionClass",
    required: true,
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  daysLeft: { type: Number, required: true },
});

// Teacher Schema
const TeacherSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  schoolId: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  subjectsTaught: [{ type: String, required: true }],
  targetClassesId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
});

// Management Role Schema
const ManagementRoleSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  schoolId: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
});

// Transaction Schema
const TransactionSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  tuitionClassId: {
    type: Schema.Types.ObjectId,
    ref: "TuitionClass",
    required: true,
  },
  receiptId: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  daysLeft: { type: Number, required: true },
});

// Receipt Schema
const ReceiptSchema = new Schema({
  id: { type: String, required: true },
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  tuitionClassId: {
    type: Schema.Types.ObjectId,
    ref: "TuitionClass",
    required: true,
  },
  schoolId: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  teacherId: {
    type: Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  timestamp: { type: Date, required: true },
  amount: { type: Number, required: true },
  duration: { type: Number, required: true },
  durationType: { type: String, required: true },
});

// Announcement Schema
const AnnouncementSchema = new Schema({
  id: { type: Number, required: true },
  sender: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
  },
  content: { type: String, required: true },
  type: { type: String, required: true },
  timestamp: { type: Date, required: true },
  schoolId: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  classId: {
    type: Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  fileUrl: { type: String },
});

// Create and export models based on the schemas
const UserProfile = mongoose.model("UserProfile", UserProfileSchema);
const School = mongoose.model("School", SchoolSchema);
const Class = mongoose.model("Class", ClassSchema);
const ReferralCode = mongoose.model("ReferralCode", ReferralCodeSchema);
const TuitionClass = mongoose.model("TuitionClass", TuitionClassSchema);
const TuitionGroupChat = mongoose.model(
  "TuitionGroupChat",
  TuitionGroupChatSchema
);
const TuitionAnnouncement = mongoose.model(
  "TuitionAnnouncement",
  TuitionAnnouncementSchema
);
const Student = mongoose.model("Student", StudentSchema);
const StudentEnrolledInTuition = mongoose.model(
  "StudentEnrolledInTuition",
  StudentEnrolledInTuitionSchema
);
const Teacher = mongoose.model("Teacher", TeacherSchema);
const ManagementRole = mongoose.model("ManagementRole", ManagementRoleSchema);
const Transaction = mongoose.model("Transaction", TransactionSchema);
const Receipt = mongoose.model("Receipt", ReceiptSchema);
const Announcement = mongoose.model("Announcement", AnnouncementSchema);

module.exports = {
  UserProfile,
  School,
  Class,
  ReferralCode,
  TuitionClass,
  TuitionGroupChat,
  TuitionAnnouncement,
  Student,
  StudentEnrolledInTuition,
  Teacher,
  ManagementRole,
  Transaction,
  Receipt,
  Announcement,
};
