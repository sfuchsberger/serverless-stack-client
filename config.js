const dev = {
  STRIPE_KEY: "pk_test_51HBpGCJnrsYEykkakoJnd4iF7nopGYWixWX8WJd041hFT3RHFEpUMWs3IyatSscOaGBQhyFCnYwvQVnziHQ9ccyx00XaLQv4it",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-bp5iw3jd0ks4"
  },
  apiGateway: {
    REGION: "us-east-2,
    URL: "https://vof0q27xj2.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_5gvhgCQDi",
    APP_CLIENT_ID: "43dqhbsm9120m1eih2ife32pvc",
    IDENTITY_POOL_ID: "us-east-2:da48ac69-cc4e-4838-ab1d-248d9994d38b"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HBpGCJnrsYEykkakoJnd4iF7nopGYWixWX8WJd041hFT3RHFEpUMWs3IyatSscOaGBQhyFCnYwvQVnziHQ9ccyx00XaLQv4it",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1uxj2y2fxa6as"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://0vvzeinxa4.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_FulXhDqK4",
    APP_CLIENT_ID: "5d5kscjakm6kvc0v8t8i88l5l9",
    IDENTITY_POOL_ID: "us-east-2:aa3d328f-bc00-4e01-ac50-3004f1381858"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};