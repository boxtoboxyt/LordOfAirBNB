import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCards from '../components/SmallCards'

const Home: NextPage = ({ exploreData }) => {
  return (
    <div className="">
      <Head>
        <title>Lord Of BNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Exploration</h2>

{exploreData?.map(({img, location, temperature}) => (
  <SmallCards key={img} img={img} location={location} temperature={temperature} />
))}

        </section>
      </main>
    </div>
  );
}
export async function getStaticProps() {
const exploreData = await fetch("https://www.jsonkeeper.com/b/RX6S").
then(
  (res) => res.json()
  );

return {
  props: {
    exploreData
  }
}
}
export default Home
