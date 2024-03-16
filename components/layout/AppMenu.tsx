import { AppMenuItem } from '@/types';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';

const AppMenu = () => {
    const model: AppMenuItem[] = [
        {
            label: 'Pages',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard' },
                {
                    label: 'Landing',
                    icon: 'pi pi-fw pi-globe',
                    to: '/'
                },
                {
                    label: 'Not Found',
                    icon: 'pi pi-fw pi-exclamation-circle',
                    to: '/notfound'
                }
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
