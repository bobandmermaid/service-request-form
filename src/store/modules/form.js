import * as api from '../../api/index'
import router from '../../router'

export default {
  state: {
    city: [],
    success: false,
    office: null,
    topic: null,
    description: null,
    file: null
  },
  mutations: {
    // Меняем стейты
    setCity(state, city) {
      state.city = city
    },
    successTrue(state) {
      state.success = true
    },
    setOffice(state, office) {
      state.office = office
    },
    setTopic(state, topic) {
      state.topic = topic
    },
    setDescription(state, description) {
      state.description = description
    },
    setFile(state, file) {
      state.file = file
    },
  },
  // Действия инициируют мутации. Для асинхронных операций
  actions: {
    // Получение городов
    async getCity({ commit }) {
      try {
        const city = await api.getCity()
        // Запуск мутации
        commit('setCity', city)
      } catch (err) {
        console.log(err)
      }
    },
    // Запрос к api на отправку данных
    async sendData({ commit }, data) {
      try {
        const res = await api.sendData(data)

        if (res.success === true) {
          commit('successTrue')
        }
      } catch (err) {
        console.log(err)
      }
    },
    // Отправялем заявку
    async submit({ dispatch, state }) {

      const { office, topic, description, file } = state;
      // Запуск действия
      await dispatch('sendData', { office, topic, description, file });

      if(state.success) {
        router.push('/success', () => {});
        state.office = null;
        state.topic = null;
        state.description = null;
        state.success = false;
      } else {
        alert('Ошибка отправки заявки');
      }
    },
  },
  // Вычисляемые свойства хранилища
  getters: {
    // Забираем из стейта города и возвращаем как данные
    allCities(state) {
      return state.city
    },
    // Активируем кнопку отправки заявки с случае заполненности обязательных полей
    isComplete(state) {
      return state.office && state.topic && state.description
    },
  }
}
