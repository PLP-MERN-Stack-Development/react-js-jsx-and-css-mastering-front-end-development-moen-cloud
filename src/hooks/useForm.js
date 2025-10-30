import { useState } from 'react'


export default function useForm(initial = {}) {
const [values, setValues] = useState(initial)


function handleChange(e) {
const { name, value } = e.target
setValues((v) => ({ ...v, [name]: value }))
}


function reset() {
setValues(initial)
}


return { values, handleChange, reset, setValues }
}