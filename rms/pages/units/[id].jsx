import Head from 'next/head'
import { getSession } from 'next-auth/react'
import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const UnitId = () => {
	return (
		<>
			<Head>
				<title>UnitId</title>
			</Head>

			<C.Container py={6}>
				<Card>
					<C.Stack direction="row" justify="space-between" align="center" spacing={6} p={6}>
						<C.Text fontWeight="semibold">UnitId</C.Text>

						<C.Stack direction="row" spacing={3}>
							<C.IconButton variant="ghost" icon={<I.Search size={20} />} />
							<C.IconButton variant="ghost" icon={<I.Plus size={20} />} />
							<C.IconButton variant="ghost" icon={<I.MoreVertical size={20} />} />
						</C.Stack>
					</C.Stack>
				</Card>
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

export default UnitId
