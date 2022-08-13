import { mode } from '@chakra-ui/theme-tools'

export default {
	global: (props) => ({
		'*, *::before, &::after': {
			borderColor: mode('gray.200', 'gray.700')(props),
			letterSpacing: 'inherit'
		},

		body: {
			bg: 'bg-canvas',
			color: 'default',
			letterSpacing: '0.013rem'
		},

		'*::placeholder': {
			opacity: 1,
			color: 'muted'
		}
	})
}
