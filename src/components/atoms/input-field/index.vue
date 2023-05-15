<template>
	<div>
		<div class="input-field">
			<label v-if="label" :for="id" class="input-field__label">
				{{ label }}
			</label>
			<input
				:id="id"
				:placeholder="placeholder"
				:disabled="disabled"
				:value="modelValue"
				:type="type"
				:class="[
					'input-field__input',
					{ errorBorder: errorText && errorText.length > 0 },
				]"
				@input="input"
				@keyup.enter="enterHandle"
			/>
		</div>
		<div v-if="errorText" class="input-field__error">

		</div>
	</div>
</template>

<script>

export default {
  name: "InputField",
  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Без названия'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    errorText: {
      type: String,
      default: ''
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
  },
  emits: ['update:modelValue', 'entered'],
  setup(props, {emit}) {
    const input = (e) => {
      emit('update:modelValue', e.target.value)
    }

    const enterHandle = () => {
      emit('entered')
    }

    return { input, enterHandle }
  }
}

</script>

<style lang="scss" scoped src="./index.scss"></style>
