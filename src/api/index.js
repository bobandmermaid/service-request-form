// import config from '../config/index'
export const PROJECT_URL = 'https://60254fac36244d001797bfe8.mockapi.io/api/v1/';

export const getResponseData = res => {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

export const getCity = async () => {
    const res = await fetch(`${PROJECT_URL}/city`);
    return getResponseData(res)
  }

  export const sendData = async ({office, topic, description, file}) => {
    const res = await fetch(`${PROJECT_URL}/send-form`, {
      method: "POST",
      body: JSON.stringify({
        office,
        topic,
        description,
        file
      }),
    })
    return getResponseData(res)
  }
