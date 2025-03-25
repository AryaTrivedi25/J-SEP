import React, { useState } from 'react';

const LegalDisclaimer = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const disclaimerPoints = [
    "Under the rules of the Bar Council of India, J-SEP Legal is prohibited from soliciting work or advertising in any form.",
    "You are seeking information about J-SEP Legal voluntarily, with no solicitation or inducement.",
    "This website does not provide legal advice and is for general informational purposes only.",
    "Accessing or using this site does not create a lawyer-client relationship.",
    "Information here may not be up-to-date, and J-SEP Legal is not responsible for actions taken based on it.",
    "Third-party links do not imply endorsement or legal advice.",
    "The platform should not be used for confidential or sensitive communication.",
    "All website content is the intellectual property of J-SEP Legal."
  ];

  const styles = {
    container: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 50,
    },
    content: {
      backgroundColor: '#fffbeb',
      borderTop: '2px solid #fde68a',
      padding: '16px',
      boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
    },
    warningIcon: {
      width: '24px',
      height: '24px',
      color: '#d97706',
      marginRight: '8px',
    },
    headerTitle: {
      color: '#92400e',
      fontWeight: 600,
      fontSize: '1.125rem',
    },
    body: {
      paddingLeft: '20px',
      color: '#92400e',
    },
    listItem: {
      marginBottom: '8px',
      fontSize: '0.875rem',
    },
    footer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '16px',
    },
    acceptButton: {
      backgroundColor: '#d97706',
      color: 'white',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    acceptButtonHover: {
      backgroundColor: '#b45309',
    }
  };

  if (isAccepted) {
    return null;
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.header}>
          <svg xmlns="http://www.w3.org/2000/svg" style={styles.warningIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 style={styles.headerTitle}>Legal Disclaimer</h3>
        </div>

        <div>
          <ul style={styles.body}>
            {disclaimerPoints.map((point, index) => (
              <li key={index} style={styles.listItem}>{point}</li>
            ))}
          </ul>
        </div>

        <div style={styles.footer}>
          <button 
            onClick={() => setIsAccepted(true)}
            style={styles.acceptButton}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.acceptButtonHover.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.acceptButton.backgroundColor}
          >
            I Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalDisclaimer;