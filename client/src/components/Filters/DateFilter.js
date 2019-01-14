import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Picker from 'react-month-picker';
import 'react-month-picker/css/month-picker.css';

const pickerLang = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  from: 'From', to: 'To',
}

class DateFilter extends React.Component {
  state = {
    isShown: true,
  }

  onChange = (year, month, id) => {
    const { setStartDate, setEndDate } = this.props;
    // ID is 0 if startDate was changed, and 1 if endDate was changed
    if (id === 0) return setStartDate(year, month);
    setEndDate(year, month);
  }

  onClick = (e) => {
    e.preventDefault();
    this.setState({ isShown: true})
  }

  onDismiss = () => this.setState({ isShown: false})
  
  render() {
    const {
      startDate,
      endDate,
      toggleDate,
      isActive,
    } = this.props;
    const { isShown } = this.state;
    
    const range = {
      from: startDate,
      to: endDate,
    };
    const formattedStartDate = `${pickerLang.months[startDate.month - 1]}, ${startDate.year}`;
    const formattedEndDate = `${pickerLang.months[endDate.month - 1]}, ${endDate.year}`;
    const rangeString = `${formattedStartDate} through ${formattedEndDate}`; 
    return (
      <section>
        <form>
          <div
            tabIndex={0}
            onClick={toggleDate}
            onKeyPress={toggleDate}
            role='menuItem'
          >
            <h1>Date Filters</h1>
          </div>
          <p>{rangeString}</p>
          <button onClick={this.onClick} disabled={!isActive}>
            Edit Date
          </button>
          <Picker 
            lang={pickerLang}
            years={{ min: 2012, max: dayjs().year() }}
            range={range}
            onChange={this.onChange}
            onDismiss={this.onDismiss}
            show={isShown}
          />
        </form>
      </section>
    )
  }
}

DateFilter.propTypes = {
  /**
   * The unix time stamp date in milliseconds used
   * for the start date filter.
   */
  startDate: PropTypes.number.isRequired,
  /**
   * The unix time stamp date in milliseconds used
   * for the end date filter.
   */
  endDate: PropTypes.number.isRequired,
  /**
   * Sets the date to use in the start date filter.
   * Input is in time stamp format (milliseconds).
   */
  setStartDate: PropTypes.func.isRequired,
  /**
   * Sets the date to use in the end date filter.
   * Input is in time stamp format (milliseconds).
   */
  setEndDate: PropTypes.func.isRequired,
  /**
   * True if the date filters are currently being applied,
   * false otherwise.
   */
  IsActive: PropTypes.bool,
  /**
   * Toggles the startDateIsActive and endDateIsActive values
   */
  toggleDate: PropTypes.bool.isRequired,
};

DateFilter.defaultProps = {
  startDateIsActive: false,
  endDateIsActive: false,
};

export default DateFilter;
