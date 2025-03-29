// src/mockData/userData.ts

// Define the Activity interface
export interface Activity {
    open?: boolean; // Now optional
    type: "Write" | "Read";
    status: "Success" | "Failed";
    classification: string | string[];
    severity: "High" | "Moderate" | "Low";
    dateTime: string;
  }
  

// Define the UserData interface
export interface UserData {
    
  user: string;
  email: string;
  role: string;
  activities?: Activity[];
}

// Export your mock data
export const rows: UserData[] = [
  {
    user: "Roger Stanton",
    email: "roger.stanton@example.com",
    role: "Role 1",
    activities: [
      {
        type: "Write",
        status: "Success",
        classification: ["PCI", "Sensitive"],
        severity: "High",
        dateTime: "23 Jun 2023 3:00PM",
      },
      {
        type: "Read",
        status: "Failed",
        classification: "PCI",
        severity: "Low",
        dateTime: "23 Jun 2023 2:30PM",
      },
      {
        type: "Read",
        status: "Success",
        classification: "Financial",
        severity: "Moderate",
        dateTime: "23 Jun 2023 2:15PM",
      },
      {
        type: "Write",
        status: "Failed",
        classification: ["PCI", "Sensitive"],
        severity: "High",
        dateTime: "23 Jun 2023 3:45PM",
      },
      {
        type: "Read",
        status: "Success",
        classification: "Financial",
        severity: "Moderate",
        dateTime: "23 Jun 2023 2:15PM",
      },
    ],
  },
  {
    user: "Craig Curtis",
    email: "craig.curtis@example.com",
    role: "Role 2",
    activities: [
      {
        type: "Read",
        status: "Success",
        classification: "Financial",
        severity: "Moderate",
        dateTime: "23 Jun 2023 2:15PM",
      },
      {
        type: "Write",
        status: "Failed",
        classification: ["PCI", "Sensitive"],
        severity: "High",
        dateTime: "23 Jun 2023 3:45PM",
      },
    ],
  },
  {
    user: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Role 3",
    activities: [
      {
        type: "Write",
        status: "Success",
        classification: "Financial",
        severity: "Moderate",
        dateTime: "23 Jun 2023 4:00PM",
      },
      {
        type: "Read",
        status: "Failed",
        classification: "PCI",
        severity: "Low",
        dateTime: "23 Jun 2023 4:30PM",
      },
    ],
  },
  {
    user: "John Doe",
    email: "john.doe@example.com",
    role: "Role 4",
    activities: [
      {
        type: "Write",
        status: "Success",
        classification: ["PCI", "Sensitive"],
        severity: "High",
        dateTime: "23 Jun 2023 5:00PM",
      },
      {
        type: "Read",
        status: "Failed",
        classification: "Financial",
        severity: "Moderate",
        dateTime: "23 Jun 2023 5:30PM",
      },
    ],
  },
  {
    user: "Emily Davis",
    email: "emily.davis@example.com",
    role: "Role 5",
    activities: [
      {
        type: "Read",
        status: "Success",
        classification: "PCI",
        severity: "Low",
        dateTime: "23 Jun 2023 6:00PM",
      },
      {
        type: "Write",
        status: "Failed",
        classification: ["PCI", "Sensitive"],
        severity: "High",
        dateTime: "23 Jun 2023 6:30PM",
      },
    ],
  },
  {
    user: "Michael Brown",
    email: "michael.brown@example.com",
    role: "Role 6",
    activities: [
      {
        type: "Write",
        status: "Success",
        classification: "Financial",
        severity: "Moderate",
        dateTime: "23 Jun 2023 7:00PM",
      },
      {
        type: "Read",
        status: "Failed",
        classification: "PCI",
        severity: "Low",
        dateTime: "23 Jun 2023 7:30PM",
      },
    ],
  },
  {
    user: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    role: "Role 7",
    activities: [
      {
        type: "Read",
        status: "Success",
        classification: ["PCI", "Sensitive"],
        severity: "High",
        dateTime: "23 Jun 2023 8:00PM",
      },
      {
        type: "Write",
        status: "Failed",
        classification: "Financial",
        severity: "Moderate",
        dateTime: "23 Jun 2023 8:30PM",
      },
    ],
  },
  {
    user: "David Clark",
    email: "david.clark@example.com",
    role: "Role 8",
    activities: [
      {
        type: "Write",
        status: "Success",
        classification: "PCI",
        severity: "Low",
        dateTime: "23 Jun 2023 9:00PM",
      },
      {
        type: "Read",
        status: "Failed",
        classification: ["PCI", "Sensitive"],
        severity: "High",
        dateTime: "23 Jun 2023 9:30PM",
      },
    ],
  },
  {
    user: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    role: "Role 9",
    activities: [
      {
        type: "Read",
        status: "Success",
        classification: "Financial",
        severity: "Moderate",
        dateTime: "23 Jun 2023 10:00PM",
      },
      {
        type: "Write",
        status: "Failed",
        classification: "PCI",
        severity: "Low",
        dateTime: "23 Jun 2023 10:30PM",
      },
    ],
  },
  {
    user: "James Taylor",
    email: "james.taylor@example.com",
    role: "Role 10",
    activities: [
      {
        type: "Write",
        status: "Success",
        classification: ["PCI", "Sensitive"],
        severity: "High",
        dateTime: "23 Jun 2023 11:00PM",
      },
      {
        type: "Read",
        status: "Failed",
        classification: "Financial",
        severity: "Moderate",
        dateTime: "23 Jun 2023 11:30PM",
      },
    ],
  },
];
