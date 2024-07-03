import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';
import Error from './pages/error/Error';




const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/accomodation/:id",
		element: <Accomodation />,
		errorElement: <Error />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: "*",
		element: <Error />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;
