export function condition(condition) {
  switch (condition) {
    case 'storm':
      return icon = {
        name="thunderstorm-outline",
        color: '#1ec9ff',
      };
      break;

    case 'clear_day':
      return icon = {
        name="sunny-outline",
        color: '#FFB300'
      };
      break;

    case 'rain':
      return icon = {
        name="rainy-outline",
        color: '#1ec9ff',
      };
      break;

    case 'cloud':
      return icon = {
        name="cloud-outline",
        color: '#FFB300'
      };
      break;

    default:
      return icon = {
        name="partly-sunny-outline",
        color: '#1ec9ff',
      };
  }
}