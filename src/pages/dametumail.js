import React, {useState} from 'react';
import { graphql } from "gatsby"
import Text from "../components/Text";
import {useWindowSize} from "../hooks/useWindowSize";
import pic from '../images/Screen Shot 2021-02-08 at 19.24.24.png'
import goma from '../images/logobeinrosa.png'
import firebase from "gatsby-plugin-firebase"

const EPK = ({t}) => {
	const [value, setValue] = useState();
	const [visible, setVisible] = useState(true);
	
	const addMail = async () => await firebase.firestore().collection('emails').add({email: value});
	
	return visible ? (
		<div>
		<form onSubmit={(e) => {
			e.preventDefault();
			addMail()
			setVisible(false)
		}}
		      style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}
		>
			<Text>{t.dametumail.desc}</Text>
			<input
				style={{
					width: '100%',
					height: 30,
				}}
				required
				type="email"
				onChange={({target: {value}}) => setValue(value)}
			/>
			<button
				type="submit"
				style={{
					backgroundColor: 'black',
					color: 'white',
					border: '0',
					width: 100,
					height: 30,
					marginTop: 10
				}}
			>
				SUBMIT
			</button>
		</form>
		</div>
	) : (
		<div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			<p>Gracias !</p>
		</div>
	)
};

export default EPK;
