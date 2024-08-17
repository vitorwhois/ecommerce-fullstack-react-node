import cors, { CorsOptions } from 'cors';

const allowedOrigins = process.env.CORS_ORIGIN?.split(',') || [];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true, 
  optionsSuccessStatus: 200, 
};

export default cors(corsOptions);
