import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet,injectGlobal } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()  
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    const globalStyles = () => {
      injectGlobal`
         body{
           margin:0;
         }
      `
      return null
    }
    return { ...page, styleTags, globalStyles } 
  }

  render () {    
    return (
      <html>
        <Head>
          <title>NextJS Presentation</title>
          {this.props.globalStyles}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}