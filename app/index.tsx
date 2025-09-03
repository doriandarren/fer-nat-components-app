import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes';
import MenuItem from '@/images/FadeInImage.tsx/menu/MenuItem';
import ThemedView from '@/images/FadeInImage.tsx/shared/ThemedView';
import { View } from 'react-native';

const ComponentsApp = () => {
    return (
        <ThemedView margin>

            {
                animationMenuRoutes.map((route, index) => (
                    <MenuItem 
                        key={route.title}
                        title={route.title}
                        icon={route.icon}
                        name={route.name}
                        isFirst={index === 0}
                        isLast={ index === animationMenuRoutes.length - 1}

                    />
                ))
            }

            <View className='my-3' />

            {
                uiMenuRoutes.map((route, index) => (
                    <MenuItem 
                        key={route.title}
                        title={route.title}
                        icon={route.icon}
                        name={route.name}
                        isFirst={index === 0}
                        isLast={ index === uiMenuRoutes.length - 1}

                    />
                ))
            }

            <View className='my-3' />

            {
                menuRoutes.map((route, index) => (
                    <MenuItem 
                        key={route.title}
                        title={route.title}
                        icon={route.icon}
                        name={route.name}
                        isFirst={index === 0}
                        isLast={ index === menuRoutes.length - 1}

                    />
                ))
            }

        </ThemedView>
    )
}

export default ComponentsApp;