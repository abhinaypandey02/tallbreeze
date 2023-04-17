import type { NextPage } from 'next'
import Head from 'next/head'

const metaData={
  title:'Tall Breeze',
  description:'reach heights with ease',
  keywords:'web, webdevelopment, website, digital, marketing, tallbreeze, tall, breeze',
  url:'https://tallbreeze.com/',
  type:'website',
  logo:'https://tallbreeze.com/logo.png'
}

const Home: NextPage = () => {
  return <div className={'min-h-screen flex items-center justify-center p-5 sm:p-8 md:p-12 lg:p-16 xl:p-24'}>
    <Head>
      
<title>{metaData.title}</title>
<meta name="description" content={metaData.description} />
<meta name="keywords" content={metaData.keywords} />
<meta property="og:url" content={metaData.url} />
<meta property="og:type" content={metaData.type} />
<meta property="og:site_name" content={metaData.title} />
<meta property="og:description" content={metaData.description} />
<meta property="og:title" content={metaData.title} />
<meta property="og:image" content={metaData.logo} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={metaData.title} />
<meta name="twitter:description" content={metaData.description} />
<meta name="twitter:image" content={metaData.logo} />
<link rel="canonical" href={metaData.url} />
    </Head>
    <img src='/banner.svg' className='w-full'/>
  </div> 
}

export default Home
