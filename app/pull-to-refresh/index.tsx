import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedText from '@/images/FadeInImage.tsx/shared/ThemedText';
import ThemedView from '@/images/FadeInImage.tsx/shared/ThemedView';
import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

const PullToRefreshScreen = () => {

  const primaryColor = useThemeColor({}, 'primary');
  const backgroundColor = useThemeColor({
    dark: 'black', light: 'white'
  }, 'background');

  const [isRefresing, setIsRefresing] = useState(false);

  const onRefresh = async() => {

    setIsRefresing(true);

    setTimeout(() => {
      setIsRefresing(false);
    }, 1000);

  }


  return (
    <ScrollView
      refreshControl={
        <RefreshControl 
          refreshing={isRefresing}
          onRefresh={onRefresh}
          colors={[primaryColor, 'red', 'orange', 'green']}
          progressBackgroundColor={backgroundColor}
        />
      }
    >

      <ThemedView margin>

        <ThemedText>PullToRefreshScreen</ThemedText>

      </ThemedView>

    </ScrollView>
  );
};

export default PullToRefreshScreen;
