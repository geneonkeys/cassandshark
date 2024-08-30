import React, { useState } from 'react'

enum ContentType {
    ART = 'ART',
    UIXD = 'UIXD'
}

const HomePage: React.FC = () => {
    const [contentType, setContentType] = useState<ContentType>(ContentType.ART)
    const switchToArtContentType = () => {
        setContentType(ContentType.ART)
    }
    const switchToUIXDContentType = () => {
        setContentType(ContentType.UIXD)
    }
    return (
        <div>
            <button onClick={switchToArtContentType}>{ContentType.ART}</button>
            <button onClick={switchToUIXDContentType}>{ContentType.UIXD}</button>
            {contentType} Projects
        </div>
    )
}

export default HomePage
