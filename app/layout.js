export const metadata = {
  title: 'Reddit Frustration Analyzer',
  description: 'Analyze emerging consumer frustrations from niche subreddits',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
