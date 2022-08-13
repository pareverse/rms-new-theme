import Head from 'next/head'
import { getSession } from 'next-auth/react'
import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Statistics from 'components/dashboard/statistics'
import Payments from 'components/dashboard/payments'

const Dashboard = () => {
	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>

			<C.Container py={6}>
				<C.Grid templateColumns="repeat(12, 1fr)" gap={6}>
					<Statistics />
					<Payments />
				</C.Grid>
			</C.Container>
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

export default Dashboard
