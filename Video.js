const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const uploadVideo = async (file) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: file.name,
    Body: file.data,
    ContentType: file.mimetype,
  };
  
  try {
    const data = await s3.upload(params).promise();
    console.log('Video uploaded successfully:', data);
  } catch (err) {
    console.error('Error uploading video:', err);
  }
};
