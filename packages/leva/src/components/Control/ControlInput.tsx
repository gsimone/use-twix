import React from 'react'
import { Plugins } from '../../plugin'
import { log, LevaErrors } from '../../utils/log'
import { InputContext } from '../../context'
import { useValue } from '../../hooks'

type ControlInputProps<V, Settings extends object> = {
  type: string
  label: string
  valueKey: string
  path: string
  value: V
  settings: Settings
  setValue: (value: any) => void
  setSettings: (settings: any) => void
  disable: (flag: boolean) => void
}

export function ControlInput<V, Settings extends object>({
  type,
  label,
  path,
  valueKey,
  value,
  settings,
  setValue,
  ...rest
}: ControlInputProps<V, Settings>) {
  const { displayValue, onChange, onUpdate } = useValue({ type, value, settings, setValue })

  const Input = Plugins[type].component
  if (!Input) {
    log(LevaErrors.NO_COMPONENT_FOR_TYPE, type, path)
    return null
  }

  return (
    <InputContext.Provider
      value={{
        key: valueKey,
        path,
        id: 'leva__' + path,
        label,
        displayValue,
        value,
        onChange,
        onUpdate,
        settings,
        setValue,
        ...rest,
      }}>
      <Input />
    </InputContext.Provider>
  )
}
