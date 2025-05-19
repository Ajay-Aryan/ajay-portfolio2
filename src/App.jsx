import React from 'react';

export default function App() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white bg-gray-900">
      <header className="text-center bg-gray-800 py-8 rounded">
        <h1 className="text-4xl font-bold">Ajay Aryan</h1>
        <p className="text-lg mt-2">Data Scientist | Software Engineer | Financial Modeller</p>
      </header>

      <div className="text-center my-6">
        <img src="/Aj_photo.jpeg" alt="Ajay Aryan" className="rounded-full w-32 mx-auto mb-4" />
        <div className="space-x-4">
          <a className="bg-gray-700 px-4 py-2 rounded" href="/Ajay Aryan CV.pdf" download>Download Resume</a>
          <a className="bg-gray-700 px-4 py-2 rounded" href="mailto:ajayaryan025@gmail.com">Email</a>
          <a className="bg-gray-700 px-4 py-2 rounded" href="https://www.linkedin.com/in/ajay-aryan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="bg-gray-700 px-4 py-2 rounded" href="https://www.github.com/ajay-aryan" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <section className="my-8">
      <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">About Me</h2>

      <div className="my-4 p-4 bg-none transition duration-300 ease-in-out transform hover:scale-[1.01]" data-aos="fade-up">
        <p>
          Experienced Data Scientist and Software Engineer with expertise in data engineering, machine learning, and financial modelling. Proven track record of leading cross-functional teams, developing scalable applications, and leveraging advanced analytics to drive impactful business decisions. Skilled in Python, SQL, AWS, NLP, and data visualization. Passionate about delivering high-quality solutions in fast-paced environments.
        </p>
      </div>
      </section>


      <section className="my-8">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Experience and Projects</h2>

        <div className="my-4 p-4 bg-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.01]" data-aos="fade-up">
          <h3 className="text-xl font-bold">SNTIMNT – Sentiment-Driven Crypto Bot</h3>
          <p>Led a cross-functional team to develop a sentiment-driven crypto trading bot leveraging AWS (EC2, S3, SageMaker) and fine-tuned BERT models, boosting trading efficiency and enabling real-time financial forecasting through ML automation.</p>
          <a href="https://github.com/Ajay-Aryan/Certificates/blob/main/Ajay_Experience%20Letter_SNTIMNT.pdf" target="_blank" className="text-blue-400 underline">Experience Letter</a>
        </div>

        <div className="my-4 p-4 bg-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.01]" data-aos="fade-up">
          <h3 className="text-xl font-bold">TEDxFSU – Tech & Speaker Coach</h3>
          <p>Managed website updates and coached a speaker to success at TEDxFSU. Merged tech and communication skills.</p>
          <a href="https://www.linkedin.com/posts/tedxfsu_tedxfsu-fsu-tedx-activity-7317343336447574017-QPaE" target="_blank" className="text-blue-400 underline">LinkedIn Post</a>
        </div>

        <div className="my-4 p-4 bg-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.01]" data-aos="fade-up">
          <h3 className="text-xl font-bold">Erdos Institute – Stock Forecasting</h3>
          <p>Used time series ML models (ARIMA, LSTM, Random Forests) to forecast stock price trends with high accuracy.</p>
          <a href="https://github.com/Ajay-Aryan/Certificates/blob/main/Erdos/Erdos%20certificate.png" target="_blank" className="text-blue-400 underline">Certificate</a>
        </div>

        <div className="my-4 p-4 bg-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.01]" data-aos="fade-up">
          <h3 className="text-xl font-bold">Capgemini Technology Services (Data Engineer-Associate II)</h3>
          <p>Deployed ML models (TensorFlow) improving NLP accuracy by 30%, automated workflows using Python & LangChain, and built a React-Vite dashboard to enhance team deployment and user engagement.</p>
          <a href="https://github.com/Ajay-Aryan/Certificates/blob/main/Cert.%20Of%20Appreciation2.pdf" target="_blank" className="text-blue-400 underline">Appreciation</a>
        </div>

        <div className="my-4 p-4 bg-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.01]" data-aos="fade-up">
          <h3 className="text-xl font-bold">Dynamic Airlift – Air Quality ETL</h3>
          <p>Airflow pipeline with OpenWeatherMap API and visualization dashboards to monitor NYC pollution in real-time.</p>
          <a href="https://github.com/Ajay-Aryan/AirLift-ETL-for-Air-Quality/blob/main/AirLift%20ETL%20for%20Air%20Quality.ipynb" target="_blank" className="text-blue-400 underline">Notebook</a>
        </div>

        <div className="my-4 p-4 bg-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.01]" data-aos="fade-up">
          <h3 className="text-xl font-bold">Stock Price Prediction</h3>
          <p>85% accuracy using LSTM and EDA techniques. Built robust predictive models and dashboards for trend analysis.</p>
          <a href="https://github.com/Ajay-Aryan/Stock_Price_Prediction/blob/main/Final_time_series_cross%20validation.ipynb" target="_blank" className="text-blue-400 underline">Notebook</a> | 
          <a href="https://github.com/Ajay-Aryan/Stock_Price_Prediction/blob/main/APPLIED%20NEURAL%20NETWORKS_%20STOCK%20PRICE_PREDICTION.pdf" target="_blank" className="text-blue-400 underline">PPT</a>
        </div>

        <div className="my-4 p-4 bg-gray-800 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.01]" data-aos="fade-up">
          <h3 className="text-xl font-bold">Chronic Disease Prediction</h3>
          <p>Achieved 90% accuracy using GridSearchCV, KNN, Naive Bayes. Visualized insights with Tableau dashboards.</p>
          <a href="https://github.com/Ajay-Aryan/Chronic-disease-prediction/blob/main/Chronic_Disease_Prediction.ipynb" target="_blank" className="text-blue-400 underline">Notebook</a>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        © 2025 Ajay Aryan. All rights reserved.
      </footer>
    </div>
  );
}
