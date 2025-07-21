# Health Monitoring Dashboard

# [Deployed Site Here](https://health-dashboard-kcwp.vercel.app/)

## Requirements
1. Build a responsive UI that matches the attached dashboard layout using React + Tailwind + TypeScript
2. Fetch dashboard data (mocked from a local data.json or via a mocked API server)
3. Implement the following components:
   - Alert Cards (Top 2 boxes)
   - Health Indicators (Heart Rate, Temperature, Noise)
4. Ensure the Alert and Noise Index Box Critical Animation work
5. Add a unit test for any one key component

## Implementation Plan
- [x] Initialize React + TypeScript project
- [x] Set up Tailwind CSS
- [x] Create mock data.json for dashboard data
- [x] Build Alert Cards and Health Indicator components
- [x] Implement critical state animation
- [x] Add unit test for a key component

---

## Architecture Overview

### 1. **Project Structure**
```
health-dashboard/
├── public/                # Static assets (data.json, favicon, etc.)
├── src/
│   ├── components/        # Reusable React components (AlertCard, HealthIndicator, Sidebar, etc.)
│   ├── utils/             # Utility functions (e.g., data fetching)
│   ├── types.ts           # TypeScript interfaces and types
│   ├── App.tsx            # Main app layout and routing
│   ├── index.tsx          # React entry point
│   ├── index.css          # Tailwind and global styles
│   └── ...
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.ts         # Vite configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

### 2. **Component Organization**
- **AlertCard**: Displays alert summary (icon, count, title, description, action button). Device alert has animated icon and special border.
- **HealthIndicator**: Shows health metrics (heart, temperature, noise) with charts, progress bars, and animated effects for critical/alert states.
- **ActivityIndicators**: Shows activity metrics (steps, trends, open space time) with progress bars and charts.
- **Sidebar**: Responsive navigation, always visible on desktop, drawer on mobile.
- **Header**: Responsive top bar with user info, ship info, and notifications.

### 3. **Data Flow**
- **Mock Data**: Located in `public/data.json`.
- **Fetching**: `src/utils/fetchDashboardData.ts` fetches and types data.
- **Types**: All data is strongly typed via `src/types.ts`.
- **Props**: Data is passed to components as props for rendering.

### 4. **Styling & Animations**
- **Tailwind CSS**: Used for all layout, spacing, color, and responsive design.
- **Custom Animations**: Keyframes in global CSS for:
  - Device icon zoom in/out
  - Animated rings for device alert
  - Rotating border for noise card
  - Card hover shadows
- **Conditional Classes**: Used to apply special effects only to certain cards (e.g., device, noise).

### 5. **Responsiveness**
- **Sidebar**: Fixed on desktop, slides in as a drawer on mobile (with overlay and hamburger menu).
- **Header**: Collapses into a hamburger menu on mobile.
- **Cards**: Grid layout adapts to screen size.

### 6. **Testing**
- **Unit Tests**: Example test for `AlertCard` using React Testing Library.

---

## How to Run
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Customization & Extensibility
- Add new cards/components in `src/components/`.
- Update or extend data in `public/data.json`.
- Add new animations in global CSS or Tailwind config.
- Use TypeScript types for safety and scalability.

---

## Contact
For questions or contributions, open an issue or pull request.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
