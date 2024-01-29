import React from 'react'
import { View, useWindowDimensions } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StockHistoryStackParams } from 'types/navigation';
import { Logo, Screen } from '@components/atoms';
import { Button, Icon, Spinner, Text, useTheme } from '@ui-kitten/components';
import { styles } from './StockChart.style';
import { LineChart } from 'react-native-chart-kit';
import strings from '@localization';
import { Spacing } from '@theme/spacing';
import useStockHistory from '@hooks/useStockHistory';
import { ResultState } from '@components/molecules';
import { Images } from '@res/img';

const StockChart = () => {

  const { goBack } = useNavigation<
    StockHistoryStackParams<"StockChartScreen">["navigation"]>();

  const { params } = useRoute<StockHistoryStackParams<"StockChartScreen">["route"]>();

  const { symbol } = params

  const { stockHistory, loading, error, fetchStockHistory } = useStockHistory(symbol);

  const theme = useTheme();

  const { width } = useWindowDimensions();


  const renderChart = () => {

    if (error) {
      return <ResultState
        image={Images.GeneralError}
        title={strings.stockHistory.errorFetchingTitle}
        subtitle={strings.stockHistory.errorFetchingDescription}
        onPrimaryAction={fetchStockHistory}
        primaryActionText={strings.stockHistory.tryAgain}
      />
    }

    if (loading) {
      return (
        <View style={styles.spinnerContainer}>
          <Spinner size='giant' />
        </View>
      )
    }

    if (!stockHistory) {
      return <ResultState
        image={Images.EmptyAlerts}
        title={strings.stockHistory.noDataForStock}
        style={styles.emptyChartText}
      />
    }

    return (
      <>
        <Text category='h2'>{strings.stockHistory.chartTitle}</Text>
        <Text >{strings.stockHistory.chartDescription}</Text>
        <Text style={styles.title} category='h3'>{symbol}</Text>

        <LineChart
          width={width - Spacing.md}
          height={300}
          data={{
            labels: stockHistory?.labels ?? [],
            datasets: [
              { data: stockHistory?.data ?? [] }
            ]
          }}
          yAxisLabel='$'
          chartConfig={{
            color: (opacity = 1) => `${theme["color-primary-400"]}`,
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
          }}
          bezier
          style={styles.chart}
        />
        <Text style={{ color: theme["color-primary-400"] }}>
          {stockHistory.month}
        </Text>

      </>
    )


  }


  return (
    <Screen containerStyle={styles.screen}>
      <Button
        size='giant'
        appearance='ghost'
        accessoryLeft={<Icon name='chevron-left' style={styles.backIcon} />}
        style={styles.goBack}
        onPress={goBack}
      />
      <Logo />
      {renderChart()}
    </Screen>
  )
}

export default StockChart