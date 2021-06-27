import React from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {ItemLocation, Text, View} from '..';
import Flex from '../../styles/Flex';

const ListLocation = ({onItemSelect}) => {
  const {resultSearchMap} = useSelector(state => state.mapReducer);

  const renderEmpty = () => {
    return (
      <View style={[Flex.rowCenter, styles.container]}>
        <Image style={styles.image} source={require('../../assets/logo.png')} />
        <View marginLeft={16} style={styles.rightContainer}>
          <Text size={16} fontWeight="bold">
            That's right, order Gojek now
          </Text>
          <View marginBottom={4} />
          <View>
            <Text>
              Less stress on road, more joy on the ride. Aaaah asdks asdla
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={resultSearchMap}
        keyExtractor={item => item?.place_id}
        renderItem={({item}) => (
          <ItemLocation
            data={item}
            onPress={data => onItemSelect && onItemSelect(data)}
          />
        )}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default ListLocation;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  itemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  image: {
    height: 64,
    width: 60,
  },
  rightContainer: {
    flex: 1,
  },
});
