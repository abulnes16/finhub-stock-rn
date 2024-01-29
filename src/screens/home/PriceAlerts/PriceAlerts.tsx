import React from 'react'
import { FlatList, Image, View } from 'react-native'
import { Logo, Screen } from '@components/atoms'
import { Button, Icon, Text } from '@ui-kitten/components'
import strings from '@localization'
import { styles } from './PriceAlerts.style'
import { AlertItem, EmptyState } from '@components/molecules'
import { Images } from '@res/img'
import { useNavigation } from '@react-navigation/native'
import { AlertStackParams } from 'types/navigation'

const PriceAlerts = () => {

  const { navigate } = useNavigation<AlertStackParams<"PriceAlertsScreen">["navigation"]>();

  const onAddAlert = () => navigate("AddAlertsScreen");

  return (
    <Screen>
      <Logo />
      <View style={styles.header}>
        <Text category='h5'>{strings.alerts.myAlerts}</Text>
        <Button onPress={onAddAlert} accessoryLeft={<Icon name='plus' />}>{strings.alerts.addAlert}</Button>
      </View>

      <FlatList
        data={[]}
        renderItem={({ item }) => <AlertItem
          name='BTC'
          price={40}
          onRemove={() => { }}
        />
        }
        ListEmptyComponent={() =>
          <EmptyState
            image={Images.EmptyAlerts}
            title={strings.alerts.emptyTitle}
            subtitle={strings.alerts.emptySubtitle}
          />}
      />
    </Screen>
  )
}

export default PriceAlerts