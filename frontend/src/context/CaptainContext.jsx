import React, { createContext } from 'react'

export const CaptainDataContext = createContext()

const CaptainContext = ({children}) => {
    const [captain, setCaptain] = React.useState(null)
    // const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const updateCaptain = (captain) => {
        setCaptain(captain)
    }

    const value = {
        captain,
        setCaptain,
        updateCaptain,
        // isLoading,
        // setIsLoading,
        error,
        setError
    }

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default CaptainContext