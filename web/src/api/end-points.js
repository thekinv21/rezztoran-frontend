const BASE_URL = "http://192.168.1.25:8082"
const REZZTORAN_AUTH_SERVICE = BASE_URL + "/api/auth" // cmd ipconfig yazıp kendi ip adresini yapıştır
const REZZTORAN_USER_SERVICE = BASE_URL + "/api/user"
const REZZTORAN_RESTAURANT_SERVICE = BASE_URL + "/api/restaurant"
const REZZTORAN_MENU_SERVICE = BASE_URL + "/api/menu"
const REZZTORAN_CATEGORY_SERVICE = BASE_URL + "/api/category"

export const END_POINTS = {
    USER_CONTROLLER: {
        POST_RESET_PASSWORD: `${REZZTORAN_USER_SERVICE}/reset-password`,
        DELETE_USER: `${REZZTORAN_USER_SERVICE}/:id`
    },
    AUTH_CONTROLLER: {
        LOGIN: `${REZZTORAN_AUTH_SERVICE}/login`,
        REGISTER: `${REZZTORAN_AUTH_SERVICE}/register`,
        ME: `${REZZTORAN_AUTH_SERVICE}/me`
    },
    RESTAURANT_CONTROLLER: {
        GET_RESTAURANT: `${REZZTORAN_RESTAURANT_SERVICE}`,
        GET_RESTAURANT_BY_ID: `${REZZTORAN_RESTAURANT_SERVICE}/:id`
    },
    MENU_CONTROLLER: {
        GET_MENU_BY_ID: `${REZZTORAN_MENU_SERVICE}/:id`
    },
    CATEGORY_CONTROLLER: {
        GET_CATEGORY: `${REZZTORAN_CATEGORY_SERVICE}`,
        GET_CATEGORY_BY_ID: `${REZZTORAN_CATEGORY_SERVICE}`
    }
}