const Routes={
    home:'/',
    about:'/about',
    dashboard:'/dashboard',
    login:'/login',
    signup:'/signup'
}as const;

export type Route=(typeof Routes)[keyof typeof Routes];