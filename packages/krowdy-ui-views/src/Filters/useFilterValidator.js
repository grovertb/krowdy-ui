import { useMemo } from 'react'
import dayjs from 'dayjs'

export default function useFilterValidator(value, type, option) {
  const numberOfInputs = option.numberOfInputs
  const errors = useMemo(() => {
    switch (type) {
      case 'generic':
      case 'category':
        return numberOfInputs && value.length === 0 ? 'Debe tener al menos un valor': null
      case 'number':
        if(numberOfInputs === 1) {
          return !value.first ? {
            first: 'Este campo es requerido'
          } : null
        }
        else if(numberOfInputs === 2) {
          const err = {
            first : !value.first ? 'Este campo es requerido': null,
            second: !value.second ? 'Este campo es requerido': null
          }

          if(value.first && value.second)
            if(parseInt(value.first) > parseInt(value.second)) {
              err.first = err.second = 'El rango es incorrecto'
            }

          return !err.first && !err.second ? null : err
        }

        return null
      case 'date':

        if(numberOfInputs === 1) {
          if(!value.first)
            return {
              first: 'Este campo es requerido'
            }
          else if(!dayjs(value.first).isValid())
            return {
              first: 'La fecha es invalida'
            }
          else
            return null
        }
        else if(numberOfInputs === 2) {
          const err = {
            first : !value.first ? 'Este campo es requerido': null,
            second: !value.second ? 'Este campo es requerido': null
          }

          if(value.first && value.second) {
            const first = dayjs(value.first)
            const second = dayjs(value.second)

            if(first.isValid() && second.isValid() && second.isBefore(first)) {
              err.first = err.second = 'El rango es incorrecto'
            }
            else {
              if(!first.isValid()) err.first = 'La fecha es invalida'
              if(!second.isValid()) err.second = 'La fecha es invalida'
            }
          }

          return !err.first && !err.second ? null : err
        }

        return null
      default:
        return null
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ value, numberOfInputs ])

  return errors
}
