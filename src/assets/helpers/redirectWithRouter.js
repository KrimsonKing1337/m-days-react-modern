import queryString from 'query-string';

/**
 *
 * @param location {object}
 * @param history {object}
 */
export default function ({ location, history }) {
  /**
   * переадресуем, если с сервера прилетает параметр route
   */
  const { route } = queryString.parse(location.search);

  const allowRoutes = [
    'index',
    'about'
  ];

  if (route) {
    if (allowRoutes.indexOf(route) !== -1) {
      history.push(route);
    } else {
      history.push('/');
    }
  }
}
