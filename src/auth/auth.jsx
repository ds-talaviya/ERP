let isUserLoggedIn = false;

export const isLoggedIn = () => {
    return !!isUserLoggedIn || localStorage.getItem('isUserLoggedIn');
};

export const userLoggedIn = () => {
    localStorage.setItem('isUserLoggedIn', true);
    isUserLoggedIn = true;
};

export const userLoggedOut = () => {
    localStorage.removeItem('isUserLoggedIn');
    isUserLoggedIn = false;
};
