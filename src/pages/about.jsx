const AboutPage = () => {
  return (
    <div className='mx-auto w-[600px]'>
      <h1 className='text-3xl font-bold underline mb-8'>Crypto Dash</h1>
      <p className='text-gray-400  w-[400px]'>
        Crypto Dash is a web application that allows you to view the top 100
        cryptocurrencies. You can also search for a specific cryptocurrency by
        name or symbol. The application uses the CoinGecko API to fetch the
        data. The application is built with React and Tailwind CSS. The
        application is hosted on Vercel.
      </p>
    </div>
  );
};

export default AboutPage;
