import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/themes';
import '../styles/globals.css';

export default function LoadApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<Component {...pageProps} />
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
					integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
					crossOrigin='anonymous'
				/>
			</ThemeProvider>
		</>
	);
}
