import * as api from '../../api/index'

export default {
  state: {
    city: [],
    success: false,
    office: '',
    topic: '',
    description: '',
    file: null
  },
  mutations: {
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
    async handleSubmit(state) {

      const {office, topic, description, file} = this

      await this.dispatch('sendData', { office, topic, description, file });

      if(state.success) {
        this.$router.push('/success');
      } else {
        alert('Ошибка отправки заявки');
      }
    }
  },
  actions: {
    async getCity({ commit }) {
      try {
        const city = await api.getCity()
        commit('setCity', city)
      } catch (err) {
        console.log(err)
      }
    },
    async sendData({ commit }, data) {
      try {
        const res = await api.sendData(data)

        if (res.success === true) {
          commit('successTrue')
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {
    allCities(state) {
      return state.city
    },
    isComplete(state) {
      return state.office && state.topic && state.description
    },
  }
}
