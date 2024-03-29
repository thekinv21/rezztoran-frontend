import Container from '../../components/container/Container'
import RestaurantCard from '../main/components/restaurant_list/RestaurantCard/RestaurantCard'
import UserCard from '../profile/components/user-card/UserCard'
import FavoriteNotFound from './components/FavoriteNotFound'
import { useFavorites } from './useFavorites'
import { Box } from '@chakra-ui/react'

const Favorites = () => {
	const { onClick, isLoading, filteredData, data } = useFavorites()

	if (isLoading) return data

	return (
		<Container>
			{/*=================FAVORİTES CONTAİNER===============*/}
			<Box
				padding={10}
				className='container'
				display='flex'
				alignItems='flex-start'
				justifyContent='center'
				gap={5}
			>
				{/*===================FAVORİ USER CARD================= */}
				<UserCard />

				{/*================FAVORİ RESTAURANT VARSA============ */}

				<Box
					display='flex'
					justifyContent={['center', 'center', 'center', 'flex-start']}
					alignItems='center'
					flexWrap='wrap'
					gap={5}
				>
					{filteredData?.length ? (
						filteredData?.map((fav, index) => (
							<RestaurantCard
								key={index}
								onClick={onClick}
								restaurant={{ ...fav, isFavorite: true }}
								favData={data.content}
							/>
						))
					) : (
						<FavoriteNotFound />
					)}
				</Box>
			</Box>
		</Container>
	)
}

export default Favorites
