Here’s a **README.md** template for your project:

---

# Document Manager - Coding Challenge

This is a frontend project built with **React** and **TypeScript** that demonstrates document management functionality, including drag-and-drop reordering, image loading spinners, and card overlays. The goal is to showcase good coding practices and thoughtful design, adhering to the requirements from the provided coding challenge.

---

## 🚀 **Features**
- Display 5 documents as **cards** (3 in the first row, 2 in the second row).
- Each card includes a unique **cat image thumbnail**.
- Cards are **draggable and reorderable** using `react-beautiful-dnd`.
- A **loading spinner** appears while images are loading.
- **Clicking on a card** opens an overlay with a larger view of the image. 
- **ESC key** closes the overlay.
- Data is stored **locally** in the browser to persist across reloads.

---

## 🛠 **Tech Stack**
- **React** (with hooks)
- **TypeScript**
- **react-beautiful-dnd** (for drag-and-drop functionality)
- **CSS Grid/Flexbox** (for layout)
- **Local Storage** (for data persistence)

---

## 📦 **Project Setup**

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd document-manager
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the project:**
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## 🧱 **Code Structure**
- **`App.tsx`**: Contains the main React component that renders the cards and handles drag-and-drop functionality.
- **`App.css`**: Contains styling for the layout and cards.
- **`documents.json`**: Simulated static JSON data containing document information (stored within the component for this demo).
  
---

## 📝 **How to Use**
1. **Drag and Drop**: Click and drag any card to reorder it.
2. **Overlay View**: Click on a card to view the image in an overlay. Press the **ESC key** to close the overlay.
3. **Automatic Save**: The order of the cards is saved to **local storage** every 5 seconds (if changes are made).

---

## 📄 **Local API Mock with MSW**
We’ve mocked the backend API using **MSW (Mock Service Worker)** to simulate fetching data from an API and saving to local storage. This ensures a seamless frontend experience without the need for a real backend.

To start the mock service, install MSW:
```bash
npm install msw --save-dev
```

---

## 🐋 **Docker Deployment**
This project can be containerized using **Docker Compose**. Run the following to spin up the services:
```bash
docker-compose up --build
```

---

## 🌐 **Demo on Vercel**
If deployed to **Vercel**, the app will be available at the provided link. Ensure that the `vercel.json` configuration is set up correctly to serve static files.

---

## 🛑 **Known Issues**
- **Drag-and-Drop Performance**: On slower devices, the drag animation might lag.
- **Image Loading Spinner**: Spinners may flash briefly for cached images.
  
---

## 💡 **Thought Process**
1. **Simple Layout**: Used **CSS Grid** to align the cards in two rows. Chose grid because it provides better control over the layout than Flexbox for this scenario.
2. **Drag-and-Drop**: Used `react-beautiful-dnd` to implement reordering functionality.
3. **Local Storage**: Decided to use **local storage** to persist the order across page reloads. Mocked the API with **MSW** for a more realistic development environment.
4. **Performance Considerations**: Avoided re-saving every time a change is made by implementing a **5-second save interval**.
5. **Overlay Design**: Used a simple modal with the **ESC key** event listener for user convenience.

---

## ⚙️ **API Design (Optional)**
If this project had a backend, the following API endpoints could be used:
- **GET /documents**: Retrieve all documents.
- **POST /documents**: Add a new document.
- **PUT /documents/:id**: Update a specific document.
- **DELETE /documents/:id**: Delete a document.

---

## 📧 **Contact**
If you have any questions about this project, feel free to reach out. 

---

## 📑 **How to Submit**
Please compress the project folder into a **ZIP** file and email it to `yash@raft.ai` or provide a **GitHub/Vercel link**.

---

## 🏁 **Conclusion**
This project is a demonstration of my **React + TypeScript** skills, showing how to implement **drag-and-drop**, API simulation, and **local data persistence**. Thank you for the opportunity to take on this challenge!

---

Let me know if you need further adjustments! 😊