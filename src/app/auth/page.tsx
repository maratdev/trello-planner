import React from 'react';
import { Metadata } from 'next';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import Auth from '@/app/auth/Auth';

export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE,
};

const AuthPage = () => <Auth/>

export default AuthPage;
