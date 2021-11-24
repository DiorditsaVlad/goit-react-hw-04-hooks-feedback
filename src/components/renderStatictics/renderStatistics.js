export default function renderStatistics(options) {
  return Object.keys(options).map(key => (
    <p key={key}>
      {key}: {options[key]}
    </p>
  ));
}
