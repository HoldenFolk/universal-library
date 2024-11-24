import React from 'react';
import Theme from './providers/Theme';
import { ScannersProvider } from './providers/ScannersProvider';
import { SettingsScannersProvider } from './providers/SettingsScannersProvider';
import NavigationRouter from './components/organism/NavigationRouter';

const App: React.FC = () => {
	return (
		<Theme>
			<ScannersProvider>
				<SettingsScannersProvider>
					<NavigationRouter />
				</SettingsScannersProvider>
			</ScannersProvider>
		</Theme>
	);
};

export default App;
