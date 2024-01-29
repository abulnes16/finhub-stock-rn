import React, { useState } from 'react'
import { View } from 'react-native'
import { Logo, Screen } from '@components/atoms'
import {
  Button,
  Icon,
  IndexPath,
  Input,
  Select,
  SelectItem,
  Spinner,
  Text
} from '@ui-kitten/components'
import strings from '@localization'
import { styles } from './AddAlert.style'
import useFinnhub from '@hooks/useFinnhub'
import usePriceAlerts from '@hooks/usePriceAlerts'
import { ResultState } from '@components/molecules'
import { Images } from '@res/img'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'
import { AlertStackParams } from 'types/navigation'

const AddAlerts = () => {

  const { goBack } = useNavigation<AlertStackParams<"AddAlertsScreen">["navigation"]>();
  const { loading, stockSymbols, error, fetchStockSymbols } = useFinnhub();
  const { saveAlert } = usePriceAlerts();

  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(new IndexPath(0));
  const [price, setPrice] = useState<string>();


  const onRetry = () => {
    fetchStockSymbols()
  }

  const renderForm = () => {
    if (error) {
      return <ResultState
        image={Images.GeneralError}
        title={strings.alerts.failedFetch}
        subtitle={strings.alerts.failedFetchDescription}
        onPrimaryAction={onRetry}
        primaryActionText={strings.alerts.retry}
      />
    }

    if (loading) {

      return (
        <View style={styles.loaderContainer}>
          <Spinner size='giant' />
        </View>
      )
    }

    const stockSelected = stockSymbols[selectedIndex.row]

    const onSubmit = async () => {
      if (!selectedIndex) {
        Toast.show({
          type: "info",
          text1: strings.alerts.validationFailed,
          text2: strings.alerts.stockIsRequired
        })
        return;
      }

      if (!price) {
        Toast.show({
          type: "info",
          text1: strings.alerts.validationFailed,
          text2: strings.alerts.priceIsRequired
        })
        return;
      }

      if (Number.isNaN(price) || Number(price) === 0) {
        Toast.show({
          type: "info",
          text1: strings.alerts.validationFailed,
          text2: strings.alerts.priceMustBeGreatherThanZero
        })
        return;
      }

      const result = await saveAlert({ price: Number(price), symbol: stockSelected?.symbol })

      if (!result) {
        return;
      }

      goBack()

    }

    return (
      <>
        <View style={styles.header}>
          <Text category='h5'>{strings.alerts.addAnAlert}</Text>
          <Text style={styles.verticalSpacing} >{strings.alerts.addAlertSubtitle}</Text>
        </View>
        <View style={styles.formContainer}>
          <Select
            value={stockSelected?.description}
            onSelect={index => setSelectedIndex(index as IndexPath)}
            selectedIndex={selectedIndex}
            placeholder={strings.alerts.stockToWatch}
            style={styles.verticalSpacing}
          >
            {stockSymbols.map(symbol => <SelectItem key={symbol.symbol} title={symbol.description} />)}
          </Select>
          <Input
            value={price}
            onChangeText={text => setPrice(text)}
            keyboardType='numeric'
            placeholder={strings.alerts.notifyMeWhenPriceIs}
            style={styles.verticalSpacing}
          />
          <Button
            onPress={onSubmit}
            style={styles.verticalSpacing}
          >
            {strings.alerts.addAlert}
          </Button>
        </View>
      </>
    )

  }


  return (
    <Screen style={styles.screen}>
      <Button
        size='giant'
        appearance='ghost'
        accessoryLeft={<Icon name='chevron-left' style={styles.backIcon} />}
        style={styles.goBack}
        onPress={goBack}
      />
      <Logo />

      {renderForm()}
    </Screen>
  )
}

export default AddAlerts