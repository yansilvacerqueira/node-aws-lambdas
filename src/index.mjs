import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"

// the function need be async
export const listUsers = async (event) => {
  const response = JSON.stringify({
    statusCode: 200,
    users: [
      {
        id: 1,
        name: "Yan da silva cerqueira",
        email: "yansilvacerqueira@outlook.com"
      }
    ]
  })

  return response;
}

/**
  that is a basic example to read something of a bucket in s3 aws.
  keep a attention to not send the package with sdk aws because on aws we have access to skd of aws.
  remenber of craete a IAM police to allow access to bucket.
  */
export const readFileOfBucket = async (event) => {
  const [record] = event.Records;

  const bucketName = record.s3.bucket.name;
  const pathFile = record.s3.object.key;

  const s3 = new S3Client();
  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: pathFile,
  })

  const { Body } = await s3.send(command);

  const chunks = [];
  for await (const chunk of Body) {
    chunks.push(chunk)
  }

  const buffer = Buffer.concat(chunks).toString("utf8");
  const users = JSON.parse(buffer)

  return users;
}