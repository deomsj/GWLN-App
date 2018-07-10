class CalendarScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      _markedDates: this.initialState
    };
    this.onDayPress = this.onDayPress.bind(this);
  }
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    this.props.navigation.navigate('Slot', { bookingDate : day })
    let marked = true;
    let markedDates = {}
    markedDates = {...markedDates, ...{ marked }};
    const updateMarkedDates = {...this.state._markedDates}
    //this.setState({_markedDates, updateMarkedDates});
  }
  // add back button
  _onPressBack() {
    const {goBack} = this.props.navigation
    goBack()
  }
  

  render() {
    //this.AddToCal();
    return (
      <View style={{ flex: 1}}>
        
        /*<View style={styles.AddButtonContainer}>
          <Button
          style={styles.AddButton}
          title='Plus'
          onPress={() => this.props.navigation.navigate('CreateEvent')}
          />
        </View>*/

        
        <Calendar 
        style={styles.Calendar}
          theme={{
            dotColor: 'pink',
          }}

          

          onDayPress={this.onDayPress}
          markedDates={{[this.state.selected]: {selected: true}}}

          />
      </View>
    );
  }
}



const styles = StyleSheet.create ({
  Calendar: {
    flex: 10,
    height: "90%",
    width: "100%"
  },
  AddButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    height:20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
   
  },
  AddButton: {
    backgroundColor: 'green',

  }
});

export default CalendarScreen;