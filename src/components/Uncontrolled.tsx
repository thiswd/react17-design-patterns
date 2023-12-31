import { MouseEvent, useState } from 'react'

const Uncontrolled = () => {
  const [values, setValues] = useState<any>({ firstName: '', lastName: '' })

  const handleChange = (e: MouseEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    console.log(`${values.firstName} ${values.lastName}`, values)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default Uncontrolled
