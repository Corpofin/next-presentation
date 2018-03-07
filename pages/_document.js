import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet,injectGlobal } from 'styled-components'

import initializeKeyboard from '../utils/keyboard'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()  
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    injectGlobal`
         body{
            margin: 0;
            font-family:Roboto;
            text-align: center;
         }
         ol{
          font-family: VT323;
          text-align: left;
          padding-left: 0;
          font-size: 23px;
         }
         p{
          font-family: VT323;
          font-size: 25px;
         }
         span{
           background:rgba(27,31,35,0.05);
         }
    `
    return { ...page, styleTags } 
  }

  componentDidMount(){
    initializeKeyboard()
  }

  render () {    
    return (
      <html>
        <Head>
          <title>NextJS Presentation</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet" />
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