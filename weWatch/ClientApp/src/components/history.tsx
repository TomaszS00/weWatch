import { createBrowserHistory, Location } from 'history';

const basename = document.getElementsByTagName('base')[0].getAttribute('href')?.toString();

export const history = createBrowserHistory({
    basename
});


history.listen((state: Location) => {
    switch (state.pathname) {
        case '/':
            // store.dispatch({
            //     type: actionTypes.UPDATE_MENU_TITLE,
            //     menuItem: IMenuItem.home
            // });
            break;

        case '/login':
            // store.dispatch({
            //     type: actionTypes.UPDATE_MENU_TITLE,
            //     menuItem: IMenuItem.people
            // });
            break;

        default:
            break;
    }
});
