import NavBar from '../components/NavBar/NavBar';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import routes from './routes';
import Home from '../pages/Home/Home';
import FormInput from '../components/FormInput/FormInput'

const AppRouter = () => {
	const [password, setPassword] = useState('')
	const [access, setAccess] = useState(false)
	const [values, setValues] = useState({
        password: ''
    })

	const input = {
		id: "site-password",
		name: "password",
		type: "text",
		placeholder: "Enter site password",
		errorMessage: "Ask Mr. Terry",
		label: "Password: ",
		required: true,
	}

	const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value }) 
		setPassword(e.target.value)
    }

	const handleSubmit = async (e) => {
        e.preventDefault()
        // let formData = new FormData()
        // for (let key in values) {
        //     formData.append(key, values[key])
        // }
        // console.log('formData = ' + formData)
        // // const data = await submit(formData)
        const response = await fetch(`/api/admin/password/${password}`)
		const test = await response.json()
		console.log(test)
    }

	// return ( 
	// 	<div>
	// 	{access === true ? 
	// 	<Router>
	// 		<NavBar routes={routes} />	
	// 		<Routes>
	// 			{routes.map(({ Component, key, path }) => (
	// 				<Route
	// 					key={key}
	// 					path={path}
	// 					element={<Component page={key} />}
	// 				></Route>
	// 			))}
	// 			<Route path="/*" key="Home" element={Home} />
	// 		</Routes>
	// 	</Router>
	// 	:
	// 	<>
	// 		<form  autoComplete="off" onSubmit={handleSubmit}>
	// 			<FormInput key={input.id} {...input} value={values[input.name]} handleInputChange={handleInputChange} />
	// 			<button formMethod='dialog'>Submit</button>			
	// 		</form>
	// 		{/* <button onClick={alert('Hint: The theme of this year!')}>Hint</button> */}
	// 	</>
	// 	}
	// </div>
	// );
	return (
		<Router>
			<NavBar routes={routes} />	
			<Routes>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						element={<Component page={key} />}
					></Route>
				))}
				<Route path="/*" key="Home" element={Home} />
			</Routes>
		</Router>
	)
};

export default AppRouter;
