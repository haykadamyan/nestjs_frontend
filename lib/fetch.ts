import axios from 'axios';
import config from 'config/config';

const fetch = async (path: string, options: any): Promise<any> => {
  const { method = 'get', data = null, headers = {} } =
    options || {};

  const requestParams = {
    url: `${config.baseApiUrl}${path}`,
    method,
    headers: {
      ...headers,
    },
    data,
  };

  if (method === 'get') {
    delete requestParams.data;
  }

  try {
    const response = await axios(requestParams);

    return response.data;
  } catch (err) {
    console.error('>>> API Error ', err);
    throw err;
  }
};

export default fetch;