import React from 'react';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <nav style={styles.sidebar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#" style={styles.navItemLink}>Dashboard</a></li>
          <li style={styles.navItem}><a href="#" style={styles.navItemLink}>Profile</a></li>
          <li style={styles.navItem}><a href="#" style={styles.navItemLink}>Settings</a></li>
          <li style={styles.navItem}><a href="#" style={styles.navItemLink}>Logout</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.headerTitle}>Dashboard</h1>
        </header>

        {/* Page Content */}
        <section style={styles.content}>
          {children}
        </section>
      </div>
    </div>
  );
}

// Corrected styles using React.CSSProperties with proper flexDirection typing
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    boxSizing: 'border-box',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
  },
  navItem: {
    marginBottom: '20px',
  },
  navItemLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as 'column', // Explicit type for flexDirection
  },
  header: {
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  headerTitle: {
    margin: 0,
    fontSize: '24px',
  },
  content: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#fff',
    margin: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
};
