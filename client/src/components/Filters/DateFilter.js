import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Picker from 'react-month-picker';
import 'react-month-picker/css/month-picker.css';

import DATE_LANG from '../../constants/misc/DATE_LANG';

class DateFilter extends React.Component {
  state = {
    isShown: false,
  }

  onChange = (year, month, id) => {
    const { setStartDate, setEndDate } = this.props;
    // ID is 0 if startDate was changed, and 1 if endDate was changed
    if (id === 0) setStartDate(year, month);
    if (id === 1) setEndDate(year, month);
  }

  onClick = (e) => {
    e.preventDefault();
    this.setState({ isShown: true });
  }

  onDismiss = () => this.setState({ isShown: false })

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
    const formattedStartDate = `${DATE_LANG.months[startDate.month - 1]}, ${startDate.year}`;
    const formattedEndDate = `${DATE_LANG.months[endDate.month - 1]}, ${endDate.year}`;
    const rangeString = `${formattedStartDate} through ${formattedEndDate}`;
    return (
      <section>
        <div>
          <p>Date Filters</p>
          <button type='button' onClick={toggleDate}>Toggle</button>
        </div>
        <form>
          <p>{rangeString}</p>
          <button type='button' onClick={this.onClick} disabled={!isActive}>
            Edit Date
          </button>
          <Picker
            lang={DATE_LANG}
            years={{ min: 2012, max: dayjs().year() }}
            range={range}
            onChange={this.onChange}
            onDismiss={this.onDismiss}
            show={isShown}
          />
        </form>
      </section>
    );
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
  isActive: PropTypes.bool,
  /**
   * Toggles the startDateIsActive and endDateIsActive values
   */
  toggleDate: PropTypes.bool.isRequired,
};

DateFilter.defaultProps = {
  isActive: false,
};

export default DateFilter;
