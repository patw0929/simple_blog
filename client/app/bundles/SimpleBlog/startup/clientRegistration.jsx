import ReactOnRails from 'react-on-rails';
import App from './ClientApp';


ReactOnRails.setOptions({
  traceTurbolinks: true,
});

ReactOnRails.register({ App });
