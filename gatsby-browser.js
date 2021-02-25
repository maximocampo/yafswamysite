import React from 'react';
import Layout from './src/components/layout';
import "firebase/auth"
import "firebase/firestore"

export const wrapPageElement = ({ element, props }) => {
	return <Layout {...props}>{element}</Layout>;
};
