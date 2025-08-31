import { useThemeColor } from '@/hooks/useThemeColor';
import { Platform, Pressable, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import ThemedText from './ThemedText';

interface Props {
    text?: string;
    value: boolean;
    className?: string;
    onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';


const ThemedSwitch = ({
    text,
    value,
    className,
    onValueChange,
}: Props ) => {


    const switchAndtiveColor = useThemeColor({}, 'primary');

    return (
        <Pressable
            className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
            onPress={() => onValueChange(!value)}
        >

            {
                text ? <ThemedText type='h2'>{text}</ThemedText> : <View />
            }

            <Switch 
                value={value}
                onValueChange={onValueChange}
                thumbColor={isAndroid ? switchAndtiveColor : ''}
                //ios_backgroundColor={value ? 'green' : 'grey'}
                trackColor={{
                    false: 'grey',
                    true: switchAndtiveColor,
                }}
            />

        </Pressable>
        
    )
}

export default ThemedSwitch