import ThemedButton from '@/images/FadeInImage.tsx/shared/ThemedButton';
import ThemedText from '@/images/FadeInImage.tsx/shared/ThemedText';
import ThemedView from '@/images/FadeInImage.tsx/shared/ThemedView';
import { Link, router } from 'expo-router';


const ModalScreen = () => {
  return (
    <ThemedView>
      <Link asChild href="/modal/modal-window" className='mx-4'>
        <ThemedText 
          className='text-white dark:text-dark-text my-2 text-xl text-center bg-light-primary dark:bg-dark-primary rounded-xl'
        >
          Abrir Modal
        </ThemedText>
      </Link>


      <ThemedButton
         onPress={() => router.push('/modal/modal-window')}
      >
        Abrir modal
      </ThemedButton>


    </ThemedView>
  );
};
export default ModalScreen;
