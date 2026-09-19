import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            background: '#f5f0eb',
            color: '#1a1714',
            fontFamily: 'Inter, sans-serif',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#c45d3e' }}>
            Something went wrong
          </h1>
          <p style={{ maxWidth: '600px', marginBottom: '1.5rem', color: '#6b6259' }}>
            An unexpected error occurred while loading this section.
          </p>
          <pre
            style={{
              padding: '1rem',
              background: '#ece5dd',
              borderRadius: '4px',
              maxWidth: '800px',
              overflowX: 'auto',
              textAlign: 'left',
              fontSize: '0.85rem',
              marginBottom: '1.5rem',
            }}
          >
            {this.state.error?.message || String(this.state.error)}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 24px',
              background: '#1a1714',
              color: '#f5f0eb',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.75rem',
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
