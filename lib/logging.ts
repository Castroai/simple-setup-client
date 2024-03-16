import AWS from "aws-sdk";

// Configure AWS SDK
AWS.config.update({
  region: "your-aws-region",
  accessKeyId: "your-access-key-id",
  secretAccessKey: "your-secret-access-key",
});

const cloudwatch = new AWS.CloudWatchLogs();

async function logToCloudWatch(
  logGroupName: string,
  logStreamName: string,
  logEvent: string
): Promise<void> {
  const params: AWS.CloudWatchLogs.PutLogEventsRequest = {
    logGroupName,
    logStreamName,
    logEvents: [
      {
        message: logEvent,
        timestamp: new Date().getTime(),
      },
    ],
  };

  try {
    await cloudwatch.putLogEvents(params).promise();
    // console.log("Logged to CloudWatch successfully");
  } catch (error) {
    // console.error("Error logging to CloudWatch:", error);
  }
}

export default logToCloudWatch;
