/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import ArtList from './screens/list'



function App(): React.JSX.Element {


  // return (

  //     <SafeAreaView>

  //         <Text>HOME</Text>

  //     </SafeAreaView>

  // );

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <ArtList />
    </ApplicationProvider>
  );
}

export default App;
