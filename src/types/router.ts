
export enum AppRoutes {
    MAIN = 'main',
    AUTH = 'auth',
    CREATE_GAME = 'create',
    GAME = 'game',
    PROFILE = 'profile',
    RULES = 'rules',
    NOT_FOUND = 'not_found'
}

export const navLink = [
    {name: "Главная страница", link: '/'},
    {name: "Coздать игру", link: '/create'},
    {name: "Правила", link: '/rules'},
    {name: "Профиль", link: '/profile/'},
]


export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.AUTH]: '/auth',
    [AppRoutes.CREATE_GAME]: '/create',
    [AppRoutes.GAME]: '/game/',
    [AppRoutes.RULES]: '/rules',
    [AppRoutes.NOT_FOUND]: '*',
}
