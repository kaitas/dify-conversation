import React, { useEffect } from 'react'

const GoogleAnalytics: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        // Google Analytics
        const script1 = document.createElement('script')
        script1.async = true
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-5M22775LE2'
        document.head.appendChild(script1)

        const script2 = document.createElement('script')
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5M22775LE2');
    `
        document.head.appendChild(script2)

        return () => {
            // Cleanup scripts on component unmount
            document.head.removeChild(script1)
            document.head.removeChild(script2)
        }
    }, [])

    return <>{children}</>
}

export default GoogleAnalytics
