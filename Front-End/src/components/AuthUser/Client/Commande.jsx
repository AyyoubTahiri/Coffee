import React from 'react';

const ProgressBar = () => {
    const styles = {
        body: {
            margin: '40px 0',
            fontFamily: '"Raleway", sans-serif',
            fontSize: '14px',
            fontWeight: '500',
            backgroundColor: '#BCAAA4',
            WebkitFontSmoothing: 'antialiased',
        },
        title: {
            fontFamily: '"Raleway", sans-serif',
            fontSize: '24px',
            fontWeight: '700',
            color: '#5D4037',
            textAlign: 'center',
        },
        p: {
            lineHeight: '1.5em',
        },
        container: {
            padding: '40px 80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        progressContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '900px',
            margin: '20px 0',
        },
        progressStep: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            flex: 1,
        },
        progressIcon: {
            background: '#00a5ff',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            position: 'relative',
            zIndex: '1',
        },
        progressStepP: {
            marginTop: '10px',
            color: '#00a5ff',
        },
        progressIconSpan: {
            fontSize: '24px',
        },
        orderDetails: {
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#fff3e0',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            width: '60%',
        },
        orderDetailsH2: {
            fontFamily: '"Raleway", sans-serif',
            fontSize: '22px',
            fontWeight: '700',
            color: '#5D4037',
            marginBottom: '20px',
        },
        orderDetailsP: {
            fontFamily: '"Raleway", sans-serif',
            fontSize: '16px',
            color: '#5D4037',
            marginBottom: '10px',
        },
        orderDetailsPStrong: {
            fontWeight: '700',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.progressContainer}>
                <div style={styles.progressStep}>
                    <div style={styles.progressIcon}><span style={styles.progressIconSpan}>&#8987;</span></div> {/* Hourglass icon */}
                    <p style={styles.progressStepP}>Préparation en cours</p>
                </div>
                <div style={styles.progressStep}>
                    <div style={styles.progressIcon}><span style={styles.progressIconSpan}>&#8987;</span></div> {/* Hourglass icon */}
                    <p style={styles.progressStepP}>Pris en charge </p>
                </div>
                <div style={styles.progressStep}>
                    <div style={styles.progressIcon}><span style={styles.progressIconSpan}>&#8987;</span></div> {/* Hourglass icon */}
                    <p style={styles.progressStepP}>Acheminement en cours</p>
                </div>
                <div style={styles.progressStep}>
                    <div style={styles.progressIcon}><span style={styles.progressIconSpan}>&#8987;</span></div> {/* Hourglass icon */}
                    <p style={styles.progressStepP}>Livraison en cours</p>
                </div>
                <div style={styles.progressStep}>
                    <div style={styles.progressIcon}><span style={styles.progressIconSpan}>&#8987;</span></div> {/* Hourglass icon */}
                    <p style={styles.progressStepP}>En attente de livraison</p>
                </div>
            </div>
            <div style={styles.orderDetails}>
                <h2 style={styles.orderDetailsH2}>Détails de la Commande</h2>
                <p style={styles.orderDetailsP}><strong style={styles.orderDetailsPStrong}>Nom du produit:</strong> Cappuccino</p>
                <p style={styles.orderDetailsP}><strong style={styles.orderDetailsPStrong}>Prix:</strong> 5.00 €</p>
                <p style={styles.orderDetailsP}><strong style={styles.orderDetailsPStrong}>Catégorie:</strong> Boisson chaude</p>
                <p style={styles.orderDetailsP}><strong style={styles.orderDetailsPStrong}>Type de commande:</strong> En attente de livraison</p>
            </div>
        </div>
    );
};

export default ProgressBar;
