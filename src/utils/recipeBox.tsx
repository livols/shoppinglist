import * as React from 'react';
import {Box} from 'native-base';
import {Colors} from '../styles/colors';

export function RecipeBox() {
  return (
    <Box
      bg={Colors.BAR}
      w="50%"
      h="96"
      _text={{fontSize: 'md', fontWeight: 'bold', color: 'white'}}>
      Chicken Tinola
    </Box>
  );
}
