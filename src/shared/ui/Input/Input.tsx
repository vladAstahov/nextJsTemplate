export type InputProps = PropsDefault & {
    value: string
    setValue: () => void
    error?: boolean
    type: string
}

// add mask custom or component