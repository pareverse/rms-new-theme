import Head from 'next/head'
import { getSession } from 'next-auth/react'
import * as C from '@chakra-ui/react'
import * as I from 'react-feather'

const Home = () => {
	return (
		<>
			<Head>
				<title>TSVJ Center</title>
			</Head>

			<C.Container py={6}>
				<C.Stack direction="row" spacing={6}>
					<C.Input type="date" />
					<C.Input type="date" />
				</C.Stack>
			</C.Container>
		</>
	)
}

export const getServerSideProps = async (ctx) => {
	const session = await getSession(ctx)

	if (session) {
		return {
			redirect: {
				destination: '/dashboard'
			},

			props: {}
		}
	} else {
		return {
			props: {}
		}
	}
}

export default Home
