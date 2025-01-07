import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutLayout/>}>
          <Route path="/about" element={<About />} />
          <Route path="/about/details" element={<AboutDetails />} />
        </Route>
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function AboutLayout(){
  let location = useLocation();
  return(
    <div>
        <h1>About Layout</h1>
        <p>Current Path:{location.pathname}</p>
        <Outlet/>
    </div>
  );
}

function Home(){
  return(
    <div>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
      <Link to="/about/details">Go to About Details</Link>
    </div>
  );
}

function About(){
  return(
    <div>
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

function AboutDetails(){
    return(
      <div>
        <h1>About Details</h1>
        <Link to="/">Go to Home</Link>
      </div>
    );
  }
// The solution involves using the Outlet component to render nested routes within a parent layout component.  This ensures proper route rendering and navigation behavior.  We also use useLocation hook to show current location.