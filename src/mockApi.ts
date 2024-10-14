// src/mockApi.ts

const initialData = [
    { type: 'bank-draft', title: 'Bank Draft', position: 0 },
    { type: 'bill-of-lading', title: 'Bill of Lading', position: 1 },
    { type: 'invoice', title: 'Invoice', position: 2 },
    { type: 'bank-draft-2', title: 'Bank Draft 2', position: 3 },
    { type: 'bill-of-lading-2', title: 'Bill of Lading 2', position: 4 },
  ];
  
  // Save initial data in localStorage if not present
  if (!localStorage.getItem('documents')) {
    localStorage.setItem('documents', JSON.stringify(initialData));
  }
  
  // Simulate a GET request
  export const fetchDocuments = () => {
    return new Promise((resolve) => {
      const data = JSON.parse(localStorage.getItem('documents') || '[]');
      setTimeout(() => resolve(data), 500); // Simulate network delay
    });
  };
  
  // Simulate a POST request to add documents
  export const addDocument = (newDocument: any) => {
    return new Promise((resolve) => {
      const data = JSON.parse(localStorage.getItem('documents') || '[]');
      const updatedData = [...data, newDocument];
      localStorage.setItem('documents', JSON.stringify(updatedData));
      setTimeout(() => resolve({ success: true }), 500); // Simulate network delay
    });
  };
  