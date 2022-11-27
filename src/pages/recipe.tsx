import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../styles/colors';
import {Button, Input, Stack} from 'native-base';

export function Recipe() {
  return (
    <View>
      <View style={{paddingLeft: 23, paddingTop: 15}}>
        <Text style={styles.text}>Add new recipe</Text>
      </View>
      <View style={{paddingLeft: 23, paddingTop: 12}}>
        <Stack direction="row" mb="2.5" mt="1.5" space={2}>
          <Input
            type="text"
            placeholder="Enter URL with recipe"
            w="299"
            h="45"
            backgroundColor={Colors.BAR}
            borderRadius="10"
            borderColor={Colors.BAR_BORDER}
            placeholderTextColor={Colors.PLACEHOLDER}
            color={Colors.TEXT}
            _focus={{
              borderColor: Colors.BAR_BORDER,
            }}
          />
          <Button
            backgroundColor={Colors.BUTTON}
            borderColor={Colors.BUTTON_BORDER}
            borderRadius={10}>
            HIT
          </Button>
        </Stack>
      </View>
      <View style={{paddingLeft: 18, paddingTop: 15}}>
        <Text style={styles.text}>Recipes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.TEXT,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
