import React from 'react'
import { FlatList, View } from 'react-native'
import { Logo, Screen } from '@components/atoms'
import { Button, Icon, Spinner, Text } from '@ui-kitten/components'
import strings from '@localization'
import { styles } from './PriceAlerts.style'
import { AlertItem, ResultState } from '@components/molecules'
import { Images } from '@res/img'
import { useNavigation } from '@react-navigation/native'
import { AlertStackParams } from 'types/navigation'
import { usePriceAlerts } from '@hooks/index'

const PriceAlerts = () => {

  const { navigate } = useNavigation<AlertStackParams<"PriceAlertsScreen">["navigation"]>();
  const { alerts, isLoadingAlerts, deleteAlert, loadingOperation } = usePriceAlerts();
  const onAddAlert = () => navigate("AddAlertsScreen");



  return (
    <Screen>
      <Logo />
      <View style={styles.header}>
        <Text category='h5'>{strings.alerts.myAlerts}</Text>
        <Button onPress={onAddAlert} accessoryLeft={<Icon name='plus' />}>{strings.alerts.addAlert}</Button>
      </View>


      {isLoadingAlerts || loadingOperation ?
        <Spinner />
        : <FlatList
          data={alerts}
          renderItem={({ item }) =>
            <AlertItem
              name={item.symbol}
              price={item.price}
              icon='close'
              onPress={() => deleteAlert(item.symbol)}
            />
          }
          ListEmptyComponent={() =>
            <ResultState
              image={Images.EmptyAlerts}
              title={strings.alerts.emptyTitle}
              subtitle={strings.alerts.emptySubtitle}
            />
          }
        />
      }


    </Screen>
  )
}

export default PriceAlerts