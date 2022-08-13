import Head from 'next/head'
import { getSession } from 'next-auth/react'
import * as C from '@chakra-ui/react'
import * as I from 'react-feather'

const Payments = () => {
	return (
		<>
			<Head>
				<title>Payments</title>
			</Head>

			<C.Container py={6}>Payments</C.Container>
		</>
	)
}

export const getServerSideProps = async (ctx) => {
	const session = await getSession(ctx)

	if (session) {
		return {
			props: {}
		}
	} else {
		return {
			redirect: {
				destination: '/'
			},

			props: {}
		}
	}
}

export default Payments
