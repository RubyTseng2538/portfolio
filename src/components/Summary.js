import React from 'react';

const Summary = ({ imageSrc, text, projectTitle, onClick }) => {

    return (
        <div style={styles.summary} onClick={onClick}>
            <div style={styles.summaryImage}>
                <img src={imageSrc} alt="Summary" style={styles.summaryImageImg} />
            </div>
            <div style={styles.summaryText}>
                <h1 style={styles.projectTitle}>{projectTitle}</h1>
                <p style={{height:20}}></p>
                <p style={styles.summaryTextP}>{text}</p>
            </div>
        </div>
    );
};

const styles = {
    summary: {
        display: 'flex',
        flexDirection: 'column', // Stack the image on top of the text
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        border: '1px solid #8EB6DC',
        borderRadius: '8px',
        margin: '20px 0',
        cursor: 'pointer', // Add a pointer cursor on hover
        flex: '1 1 300px', // Allow the summary to grow and shrink, with a base width of 300px
        maxWidth: '1000px', // Limit the width of the summary
        boxSizing: 'border-box', // Include padding and border in the element's total width and height
    },
    summaryImage: {
        width: '100%',
        textAlign: 'center',
    },
    summaryImageImg: {
        maxWidth: '60%',
        height: 'auto',
        borderRadius: '8px',
    },
    summaryText: {
        textAlign: 'center',
        padding: '10px',
    },
    projectTitle: {
        fontSize: '1.5rem',
        marginBottom: '10px',
    },
    summaryTextP: {
        fontSize: '1rem',
        lineHeight: '1.5',
    },
};


export default Summary;