const userTypes = ["Teacher","Student","Management"]

const UserProfile = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      passwordHash: "hashedPassword",
      jwtToken: "jwtToken",
      image: "https://example.com/avatar.png",
      role: "student",
      referralCode: "ABCD1234"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      passwordHash: "hashedPassword",
      jwtToken: "jwtToken",
      image: "https://example.com/avatar.png",
      role: "teacher",
      referralCode: "EFGH5678"
    },
    {
      id: 3,
      name: "Admin",
      email: "admin@example.com",
      passwordHash: "hashedPassword",
      jwtToken: "jwtToken",
      image: "https://example.com/avatar.png",
      role: "management",
      referralCode: "IJKL9012"
    },
    // Add more user profiles as needed...
  ];
  
const schools = [
    {
      id: 1,
      name: "School A",
      location: "City A",
      description: "School A is a prestigious institution known for its academic excellence and diverse extracurricular activities.",
      slogan: "Empowering Minds, Shaping Futures",
      icon: "https://example.com/schoola-icon.png",
      platformFees: "12%",
      bannerImage: {
        desktop: { dimension: "1200x600", url: "https://example.com/desktop-banner.jpg" },
        mobile: { dimension: "600x300", url: "https://example.com/mobile-banner.jpg" },
      },
      users: {
        students: 1000, //dynamically calculated
        teachers: 50, //dynamically calculated
        management: 10, //dynamically calculated
      },
  
    },
    // Add more schools as needed...
  ];

const classes = [
  {
    id: 1,
    name: "11S",
    subjects: ["Math", "English", "Physics"],
    numberOfStudents: 50, //dynamically calculated
    schoolYear: {
      start: "2023-06-01",
      end: "2024-05-31",
    },
    schoolId: 1,
  },
  {
    id: 2,
    name: "11A",
    subjects: ["Math", "History", "Geography"],
    numberOfStudents: 45, //dynamically calculated
    schoolYear: {
      start: "2023-06-01",
      end: "2024-05-31",
    },
    schoolId: 1,
  },
  // Add more classes as needed...
];

const referralCodes = [
  {
    schoolId: 1,
    management: ["ABCD1234", "XYZ7890"],
    teachers: ["EFGH5678", "PQRS4567"],
    students: [
      { classId: "1", codes: ["IJKL9012", "UVWX2345"] },
      { classId: "2", codes: ["MNOP3456", "QRST5678"] },
      { classId: "3", codes: ["QRST7890", "VWXY9012"] },
      // Add more student referral codes as needed...
    ],
  },
  // Add more referral codes for other schools...
];
  
const tuitionClass = [
    {
      id: 1,
      teacherId: 2,
      className: "11S",
      subject: "Math",
      description: "Tuition class for Class 11 Math students",
      targetClass: "11S", 
      imageBanner: "https://example.com/banner.jpg",
    },
    // Add more tuition classes as needed...
  ];
const tuitionGroupChat = [
  {
    id: 1,
    sender: { id: 2, name: "Jane Smith" },
    content: "Hello everyone! How are you doing?",
    type: "text",
    timestamp: "2023-07-20T10:00:00Z",
    schoolId: 1,
    classId: "11S",
    tuitionClassId: 1,
  },
  {
    id: 2,
    sender: { id: 1, name: "John Doe" },
    content: "I'm doing great, thanks! How about you?",
    type: "text",
    timestamp: "2023-07-20T10:05:00Z",
    schoolId: 1,
    classId: "11S",
    tuitionClassId: 1,
  },
  {
    id: 3,
    sender: { id: 1, name: "John Doe" },
    content: "Check out this image I found!",
    type: "image",
    imageUrl: "https://example.com/image.jpg",
    timestamp: "2023-07-20T10:10:00Z",
    schoolId: 1,
    classId: "11S",
    tuitionClassId: 1,
  },
  // Add more group chat messages as needed...
];
const tuitionAnnouncements = [
  {
    id: 1,
    sender: { id: 1, name: "Mr. Johnson" },
    content: "Reminder: The upcoming class will cover Chapter 5. Please come prepared with your textbooks.",
    type: "text",
    timestamp: "2023-07-19T15:00:00Z",
    schoolId: 1,
    classId: "11S",
    tuitionClassId: 1,
  },
  {
    id: 2,
    sender: { id: 1, name: "Mr. Johnson" },
    content: "We will have a quiz next week. Study hard!",
    type: "text",
    timestamp: "2023-07-19T15:05:00Z",
    schoolId: 1,
    classId: "11S",
    tuitionClassId: 1,
  },
  {
    id: 3,
    sender: { id: 1, name: "Mr. Johnson" },
    content: "Check out this document for additional study materials.",
    type: "file",
    fileUrl: "https://example.com/document.pdf",
    timestamp: "2023-07-19T15:10:00Z",
    schoolId: 1,
    classId: "11S",
    tuitionClassId: 1,
  },
  // Add more announcement messages as needed...
];


const students = [
  {
    id: 1,
    userId: 1,
    schoolId: 1,
    name: "John Doe",
    section: "A",
    classRoleNumber: "A1",
    class: "11S"
  },
  {
    id: 2,
    userId: 2,
    schoolId: 1,
    name: "Jane Smith",
    section: "A",
    classRoleNumber: "A2",
    class: "11S"
  },
  // Add more students as needed...
];

const studentEnrolledInTuition = [
  {
    studentId: 1,
    tuitionClassId: 1,
    teacherName: "Mr. Johnson",
    subject: "Math",
    startDate: "2023-07-01",
    endDate: "2023-12-31",
    daysLeft: 0
  },
  {
    studentId: 1,
    tuitionClassId: 2,
    teacherName: "Ms. Anderson",
    subject: "English",
    startDate: "2023-08-01",
    endDate: "2023-11-30",
    daysLeft: 0
  },
  {
    studentId: 2,
    tuitionClassId: 1,
    teacherName: "Mr. Johnson",
    subject: "Math",
    startDate: "2023-07-01",
    endDate: "2023-12-31",
    daysLeft: 0
  },
  {
    studentId: 2,
    tuitionClassId: 2,
    teacherName: "Ms. Anderson",
    subject: "English",
    startDate: "2023-08-01",
    endDate: "2023-11-30",
    daysLeft: 0
  }
  // Add more enrollment records as needed...
];
  
  // Teachers
const teachers = [
    {
      id: 1,
      userId: 2, // User ID from Global Users
      schoolId: 1, // School ID associated with this teacher
      subjectsThought: ["Math", "Physics"],
      TargetClassesId: [1,3] // Classes taught by this teacher
    },
    // Add more teachers as needed...
  ];
  
  // Management Roles
  const management = [
    {
      id: 1,
      userId: 3, // User ID from Global Users
      schoolId: 1 // School ID associated with this management role
    },
    // Add more management roles as needed...
  ];
  
  // Transactions
  const transactions = [
    {
      id: 1,
      studentId: 1, // Student ID associated with this transaction
      tuitionClassId: 1, // Tuition Class ID for which the subscription is made
      receiptId: "ABC123XYZ", // Receipt ID for the transaction
      startDate: "2023-07-01", // Start date of the subscription
      endDate: "2023-12-31", // End date of the subscription
      daysLeft: 169 // Number of days left before the subscription expires
    },
    // Add more transactions as needed...
  ];
  
  // Receipts
  const receipts = [
    {
      id: "ABC123XYZ",
      studentId: 1, // Student ID associated with this receipt
      tuitionClassId: 1, // Tuition Class ID associated with this receipt
      schoolId: 1, // School ID associated with this receipt
      teacherId: 2, // Teacher ID associated with this receipt
      timestamp: "2023-07-15T10:00:00Z",
      Totalamount: 100, // Amount paid for the subscription
      discount: "20%",
      duration: 6, // Duration of the subscription (in months)
      durationType: "monthly" // Duration type: "monthly", "quarterly", "half-year", or "12-month"
    },
    // Add more receipts as needed...
  ]; 

  const announcement = [
    {
      id: 1,
      sender: { id: 1, name: "Mr. Johnson" },
      content: "Reminder: The upcoming class will cover Chapter 5. Please come prepared with your textbooks.",
      type: "text",
      timestamp: "2023-07-19T15:00:00Z",
      schoolId: 1,
      classId: "11S",
    },
    {
      id: 2,
      sender: { id: 1, name: "Mr. Johnson" },
      content: "We will have a quiz next week. Study hard!",
      type: "text",
      timestamp: "2023-07-19T15:05:00Z",
      schoolId: 1,
      classId: "11S",
    },
    {
      id: 3,
      sender: { id: 1, name: "Mr. Johnson" },
      content: "Check out this document for additional study materials.",
      type: "file",
      fileUrl: "https://example.com/document.pdf",
      timestamp: "2023-07-19T15:10:00Z",
      schoolId: 1,
      classId: "11S",
    },
    // Add more announcement messages as needed...
  ];
  
  
  
  