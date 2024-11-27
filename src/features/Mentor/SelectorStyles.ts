import { StylesConfig } from "react-select"

export const SelectorsStyles: StylesConfig = {
    control: (baseStyles) => ({
        ...baseStyles,
        'width': '100%',
        'marginBottom': '1.5rem',
        'fontSize': '0.875rem',
        'lineHeight': "1rem",
        'borderColor': 'rgb(55 65 81)',
        'borderRadius': '0.5rem',
        '&:hover': {
            'outlineOffset': '2px',
            'borderColor': 'rgb(59 130 246)',
        },
      }),
    option: (baseStyles) => ({
        ...baseStyles,
        'fontSize': '0.875rem',
    })
}