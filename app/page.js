'use client';

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const analyzeFrustrations = async () => {
    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          marginBottom: '16px',
        }}>
          Reddit Frustration Analyzer
        </h1>

        <p style={{
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.9)',
          textAlign: 'center',
          marginBottom: '40px',
        }}>
          Scanning niche subreddits to identify emerging consumer frustrations
        </p>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <button
            onClick={analyzeFrustrations}
            disabled={loading}
            style={{
              padding: '16px 48px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#667eea',
              background: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              opacity: loading ? 0.7 : 1,
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
            }}
          >
            {loading ? 'Analyzing...' : 'Analyze Subreddits'}
          </button>
        </div>

        {error && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.9)',
            color: 'white',
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '20px',
            textAlign: 'center',
          }}>
            Error: {error}
          </div>
        )}

        {results && (
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
          }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#667eea',
              marginBottom: '24px',
            }}>
              Emerging Consumer Frustration Trends
            </h2>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '16px',
              }}>
                Subreddits Analyzed:
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {results.subreddits.map((sub, idx) => (
                  <span key={idx} style={{
                    background: '#f3f4f6',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#667eea',
                    fontWeight: '500',
                  }}>
                    r/{sub}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '20px',
              }}>
                Ranked Frustration Trends
              </h3>

              {results.trends.map((trend, idx) => (
                <div key={idx} style={{
                  background: idx === 0 ? '#fef3c7' : '#f3f4f6',
                  border: idx === 0 ? '2px solid #f59e0b' : 'none',
                  padding: '24px',
                  borderRadius: '12px',
                  marginBottom: '16px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{
                      background: idx === 0 ? '#f59e0b' : '#667eea',
                      color: 'white',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      marginRight: '16px',
                    }}>
                      {idx + 1}
                    </span>
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#111',
                      margin: 0,
                    }}>
                      {trend.title}
                    </h4>
                  </div>

                  <div style={{
                    display: 'flex',
                    gap: '16px',
                    marginBottom: '12px',
                    fontSize: '14px',
                  }}>
                    <span style={{
                      background: 'white',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      color: '#667eea',
                      fontWeight: '500',
                    }}>
                      Severity: {trend.severity}/10
                    </span>
                    <span style={{
                      background: 'white',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      color: '#667eea',
                      fontWeight: '500',
                    }}>
                      Frequency: {trend.frequency}%
                    </span>
                  </div>

                  <p style={{
                    color: '#374151',
                    lineHeight: '1.6',
                    marginBottom: '12px',
                  }}>
                    {trend.description}
                  </p>

                  <div style={{ marginTop: '12px' }}>
                    <strong style={{ color: '#111', fontSize: '14px' }}>Example Complaints:</strong>
                    <ul style={{
                      marginTop: '8px',
                      paddingLeft: '20px',
                      color: '#4b5563',
                      lineHeight: '1.8',
                    }}>
                      {trend.examples.map((example, exIdx) => (
                        <li key={exIdx}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '32px',
              padding: '20px',
              background: '#ede9fe',
              borderRadius: '12px',
              borderLeft: '4px solid #667eea',
            }}>
              <h4 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#667eea',
                marginBottom: '8px',
              }}>
                Analysis Summary
              </h4>
              <p style={{ color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
                {results.summary}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
