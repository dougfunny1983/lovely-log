const makeMessage = (message, badge, badgeColor) =>
  console.log(
    `%c ${badge} %c ${message} `,
    `background: ${badgeColor}; color: white; padding: 4px; border-radius: 3px 0 0 3px`,
    'background:#35495e; color: white; padding: 4px; border-radius: 0 3px 3px 0'
  );
const info = message => makeMessage(message, 'Info', '#03A9F4');
const debug = message => makeMessage(message, 'Debug', '#FF9800');
const error = message => makeMessage(message, 'Error', '#F44336');
const warn = message => makeMessage(message, 'Warn', '#FFC107');

module.exports = { info, debug, error, warn };
