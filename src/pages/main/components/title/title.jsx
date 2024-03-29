import { Heading, Divider, Stack } from '@chakra-ui/react'
import React from 'react'

const Title = ({ title }) => {
	return (
		<React.Fragment>
			<Stack alignItems='center'>
				<Heading
					color='rgb(0,0,0,0.6)'
					fontWeight='600'
					fontFamily='unset'
					pb={5}
					textAlign='center'
				>
					{title}
				</Heading>

				<Divider
					orientation='horizontal'
					colorScheme='red'
					w={['300px', '400px', '500px', '700px']}
					border='1px solid orange'
				/>
			</Stack>
		</React.Fragment>
	)
}

export default Title
