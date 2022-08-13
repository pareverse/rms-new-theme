import Head from 'next/head'
import NextLink from 'next/link'
import { getSession } from 'next-auth/react'
import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const Units = () => {
	return (
		<>
			<Head>
				<title>Units</title>
			</Head>

			<C.Container py={6}>
				<Card>
					<C.Stack direction="row" justify="space-between" align="center" spacing={6} p={6}>
						<C.Text fontWeight="semibold">Units</C.Text>

						<C.Stack direction="row" spacing={3}>
							<C.IconButton variant="ghost" icon={<I.Search size={20} />} />
							<C.IconButton variant="ghost" icon={<I.Plus size={20} />} />
							<C.IconButton variant="ghost" icon={<I.MoreVertical size={20} />} />
						</C.Stack>
					</C.Stack>

					<C.TableContainer>
						<C.Table>
							<C.Thead>
								<C.Tr>
									<C.Th>Unit</C.Th>
									<C.Th>Company</C.Th>
									<C.Th>Tenant</C.Th>
									<C.Th>Monthly</C.Th>
									<C.Th>Balance</C.Th>
									<C.Th>Due Date</C.Th>
									<C.Th>Status</C.Th>
									<C.Th>Action</C.Th>
								</C.Tr>
							</C.Thead>

							<C.Tbody>
								{[...Array(4)].map((data, index) => (
									<C.Tr key={index}>
										<C.Td>110</C.Td>

										<C.Td>
											<C.Stack direction="row" spacing={3} align="center">
												<C.Avatar size="sm" name="My Girl" />

												<C.Text w={124} overflow="hidden" textOverflow="ellipsis">
													Emma Smith
												</C.Text>
											</C.Stack>
										</C.Td>

										<C.Td>
											<C.Text w={124} overflow="hidden" textOverflow="ellipsis">
												Lemuel Palwa
											</C.Text>
										</C.Td>

										<C.Td>₱25,000</C.Td>

										<C.Td>₱1,000</C.Td>

										<C.Td>Aug 23, 2022</C.Td>

										<C.Td>
											<C.Badge colorScheme="blue" size="sm">
												Occupied
											</C.Badge>
										</C.Td>

										<C.Td>
											<NextLink href="/units/1" passHref>
												<C.IconButton as="a" variant="outline" size="sm" icon={<I.Eye size={14} />} />
											</NextLink>
										</C.Td>
									</C.Tr>
								))}

								<C.Tr>
									<C.Td>
										<C.Skeleton h={2} w="24px" />
									</C.Td>

									<C.Td>
										<C.Stack direction="row" spacing={3} align="center">
											<C.SkeletonCircle size={8} />
											<C.Skeleton h={2} w={124} />
										</C.Stack>
									</C.Td>

									<C.Td>
										<C.Skeleton h={2} w={124} />
									</C.Td>

									<C.Td>
										<C.Skeleton h={2} w="64px" />
									</C.Td>

									<C.Td>
										<C.Skeleton h={2} w="64px" />
									</C.Td>

									<C.Td>
										<C.Skeleton h={2} w="64px" />
									</C.Td>

									<C.Td>
										<C.Skeleton h={2} w="64px" />
									</C.Td>

									<C.Td>
										<C.Skeleton borderRadius="lg" h={8} w={8} />
									</C.Td>
								</C.Tr>
							</C.Tbody>
						</C.Table>
					</C.TableContainer>
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

export default Units
