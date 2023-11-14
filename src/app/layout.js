import 'bootstrap/dist/css/bootstrap.css'
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container">{children}</body>
    </html>
  )
}