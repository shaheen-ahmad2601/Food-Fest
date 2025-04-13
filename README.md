# Diving Deep In React.js 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

## React Concepts

- **JSX** - JavaScript + XML  
- **Components** - Building blocks of UI  
- **Props** - For passing data to components  
- **State** - For managing data in components  
- **Virtual DOM** - Optimized rendering  
- **Reconciliation** - Update DOM efficiently  
- **React Fiber** - Internal engine for faster rendering  
- **Component Lifecycle** (only in Class Components)  
- **Keys in lists** - For unique identity during re-renders  
- **Controlled vs Uncontrolled Components**  
- **Lifting State Up** - Sharing state between components  
- **Composition vs Inheritance**

---

## React Hooks

- `useState()` – Manage component state  
- `useEffect()` – Handle side effects (like API calls, event listeners)  
- `useContext()` – Consume context without props  
- `useReducer()` – Alternative to useState for complex logic  
- `useRef()` – Access DOM nodes or store mutable values  
- `useMemo()` – Memoize values to optimize performance  
- `useCallback()` – Memoize functions to prevent re-creation  
- `useImperativeHandle()` – Customize the instance exposed via ref  
- `useLayoutEffect()` – Like useEffect but fires before paint  
- `useDebugValue()` – Debug custom hooks


# Food-App

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-      - Img
-      - Name of Res, Star Rating, cuisine, delery tie
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    


Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# 2 types Routing in web apps

- Client Side Routing
- Server Side Routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of testing (devloper)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom
