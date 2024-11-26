import React from 'react';
import Theme from './providers/Theme';
// import HelloWorld from './components/HelloWorld';
import NavigationRouter from './components/organism/NavigationRouter';

const App: React.FC = () => {
	return (
		<Theme>
			<NavigationRouter />
		</Theme>
	);
};

export default App;
