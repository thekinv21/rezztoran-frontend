import { axiosInstance } from '../api/apiInterceptor'
import { END_POINTS } from './../endpointService/endpoints.service'
import { useMutation } from '@tanstack/react-query'

//*=================POST RESET PASSWORD================

export const useReset = () => {
	const postResetPassword = async email => {
		const response = await axiosInstance.post(
			END_POINTS.RESET_CONTROLLER.POST_RESET_PASSWORD,
			email
		)

		return response.data
	}

	return useMutation(postResetPassword)
}

//*=================POST NEW PASSWORD================

export const usePostNewPassword = () => {
	const postNewPassword = async ({ mail, password, code }) => {
		const response = await axiosInstance.post(
			END_POINTS.RESET_CONTROLLER.POST_NEW_PASSWORD,
			{ mail, password, code }
		)

		return response.data
	}

	return useMutation(postNewPassword)
}
