import React, { useState } from 'react'

enum ContentType {
    ART = 'ART',
    UIXD = 'UIXD'
}

const ART_CONTENT = [
    'Art Project 1',
    'Camp Spooky',
    'Art Project 3',
    'Art Project 4',
    'Art Project 5',
    'Art Project 6',
    'Art Project 7',
    'Art Project 8',
    'Art Project 9',
    'Art Project 11',
    'Art Project 12',
    'Art Project 13',
    'Art Project 14',
    'Art Project 15',
    'Art Project 16',
    'Art Project 17'
]
const UIXD_CONTENT = ['UIXD 1', 'UIXD 2', 'UIXD 3', 'UIXD 4', 'UIXD 5', 'UIXD 6', 'UIXD 7', 'UIXD 8', 'UIXD 9', 'UIXD 10']

const HomePage: React.FC = () => {
    const [contentType, setContentType] = useState<ContentType>(ContentType.ART)

    const getContent = () => {
        if (contentType == ContentType.ART) return ART_CONTENT
        return UIXD_CONTENT
    }

    const switchToArtContentType = () => {
        setContentType(ContentType.ART)
    }

    const switchToUIXDContentType = () => {
        setContentType(ContentType.UIXD)
    }

    return (
        <div className="row">
            <div className="left">
                <div>logo</div>
                <div>header</div>
                <div>hr</div>
                <div className="row">
                    <button onClick={switchToArtContentType}>{ContentType.ART}</button>
                    <button onClick={switchToUIXDContentType}>{ContentType.UIXD}</button>
                </div>
                <div>content</div>
                <div>hire me</div>
            </div>
            <div className="right row wrap">
                {getContent().map((content) => {
                    return (
                        <div>
                            <div>imageheader</div>
                            <div>{content}</div>
                            <div>content</div>
                            <div>view proejct</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage
