import ThemedCard from '@/images/FadeInImage.tsx/shared/ThemedCard';
import ThemedSwitch from '@/images/FadeInImage.tsx/shared/ThemedSwitch';
import ThemedView from '@/images/FadeInImage.tsx/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin className='mt-2'>
      
      <ThemedCard>

        <ThemedSwitch 
          text='Activo'
          value={state.isActive}
          onValueChange={(value: boolean) => setState({...state, isActive: value})}
          className='mb-4'
        />


        <ThemedSwitch 
          text='Hambriento'
          value={state.isHungry}
          onValueChange={(value: boolean) => setState({...state, isHungry: value})}
          className='mb-4'
        />


        <ThemedSwitch 
          text='Contento'
          value={state.isHappy}
          onValueChange={(value: boolean) => setState({...state, isHappy: value})}
          className='mb-4'
        />



      </ThemedCard>

    </ThemedView>
  );
};
export default Switches;
