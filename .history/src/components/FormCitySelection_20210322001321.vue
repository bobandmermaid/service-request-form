<template>
  <form-required-fields title="Ваш филиал" reqiured>
    <select
      class="form-city"
      name="office"
      v-model="selected"
      :disabled="picked"
      @change="setOffice(selectedCity)"
      require>
      <option
        class="form-city__option"
        disabled
        value="">
        Выберите город
      </option>
      <option
        class="form-city__option"
        v-for="city in allCities"
        :key="city.id"
        :value="city.title">
        {{ city.title }}
      </option>
    </select>
    <div class="form-online">
      <input
        id="checkbox"
        class="form-online__input"
        type="checkbox"
        name="online"
        v-model="picked"
        @change="setOffice(selectedCity)"
      >
      <label for="checkbox" class="form-online__label">Онлайн</label>
    </div>
  </form-required-fields>
</template>

<script>
import FormRequiredFields from './FormRequiredFields'
import { mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
  components: {
    FormRequiredFields
    },
  data() {
    return {
      selected: '',
      picked: false
    }
  },
  async mounted() {
      this.getCity();
    },
  computed: {
    ...mapGetters(['allCities']),
    // Если выбран чекбокс “Онлайн”, то селект с городами и приобретает статус disabled.
    selectedCity() {
      return this.picked ? 'online' : this.selected;
    }
  },
  methods: {
    ...mapActions(['getCity']),
    ...mapMutations(['setOffice']),
  }
}
</script>

<style scoped>
.form-city {
  margin: 7px 0 15px;
  padding: 8px;
  border: #e7e7e7 solid 1px;
  width: 25%;
  color: #6f7983;
  background-color: inherit;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.form-city:disabled {
  background-color: #f1f1f1;
}

.form-city__option {
  color: #6f7983;
}

.form-online input[type="checkbox"] {
  display: none;
}

.form-online label {
  position: relative;
  display: inline-block;
  padding-left: 37px;
  align-items: baseline;
}

.form-online label:before,
.form-online label:after {
  position: absolute;
  content: "";
  display: inline-block;
  cursor: pointer;
}

.form-online label:before{
  height: 25px;
  width: 25px;
  border:#486583 solid 1px;
  background-color: #fff;
  position: absolute;
  left: 0px;
  top: 3px;
}

.form-online label:after {
  height: 10px;
  width: 14px;
  border-left: 2px solid;
  border-bottom: 2px solid;
  transform: rotate(-45deg);
  position: absolute;
  left: 6px;
  top: 8px;
}

/*Hide the checkmark by default*/
.form-online input[type="checkbox"] + label:after {
  content: none;
}

/*Unhide on the checked state*/
.form-online input[type="checkbox"]:checked + label:after {
  content: "";
}

.form-online__label {
  font-size: 14px;
  padding-top: 7px;
}
</style>
