export const PROJECT_URL = 'https://60254fac36244d001797bfe8.mockapi.io/api/v1/';
// Кончился лимит на запросы, в итоге сделал V2
export const PROJECT_URL_V2 = 'https://60574277055dbd0017e84949.mockapi.io/api/v2/'

// Дабы не дублировать код
export const getResponseData = res => {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  // Получаем города
  export const getCity = async () => {
    const res = await fetch(`${PROJECT_URL}/city`);
    return getResponseData(res)
  }

  // Отправляем POST запрос
  export const sendData = async ({ office, topic, description, file }) => {
    const res = await fetch(`${PROJECT_URL_V2}/send-form`, {
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
