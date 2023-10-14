import { useState } from "react"

// [89]

export const useFormChange = (initialForm = {}) => {

  const [values, setValues] = useState(initialForm)

    // Carga de informacion en el formulario [58]
    const handleInputChange = (e) => {

      const { type, name, checked, value } = e.target
  
      /* Validación [83] */
      if (name === "price" || name === "stock") {
        // Si el valor no es un número válido, no lo actualices en el estado
        if (!/^\d*\.?\d*$/.test(value)) {
          return;
        }
      }
      
      /* Pasar al backend number para price y stock evitando strings[83] */
      const numericValue = name === "price" || name === "stock" ? parseFloat(value) : value;
  
      setValues({
        ...values,
        [name]: type === "checkbox" ? checked : numericValue,
      })
    };

  return [values, setValues, handleInputChange]

}