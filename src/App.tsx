import React from 'react';
import Theme from './providers/Theme';
// import HelloWorld from './components/HelloWorld';
import { LandingPage } from './components/organism/screens/LandingPage';

const App: React.FC = () => {
	return (
		<Theme>
			<LandingPage
				header={<h1>Header Content</h1>}
				heroContent={<div>Welcome to the Landing Page</div>}
				footer={<div>Footer Content</div>}
			>
				<p>This is the main content area of the landing page.</p>
			</LandingPage>
		</Theme>
	);
};

export default App;
