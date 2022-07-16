import dontenv from 'dotenv'
import aws from 'aws-sdk'
import crypto from 'crypto'
import {promisify} from "util"
const randomBytes = promisify(crypto.randomBytes)

dontenv.config()

const region = "us-east-1"
const bucketName = "direct-upload-s3-bucket-things"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

export function generateUploadURL() {
    const rawBytes = await randomBytes(16)
    const imageName = rawBytes.toString('hex')

    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}