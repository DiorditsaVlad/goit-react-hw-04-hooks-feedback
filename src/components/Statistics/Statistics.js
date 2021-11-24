import PropTypes from 'prop-types';
import renderStatistics from '../renderStatictics/renderStatistics';

export default function Statistics({
  options,
  total = 0,
  positivePercentage = 0,
}) {
  return (
    <div>
      {renderStatistics(options)}
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
