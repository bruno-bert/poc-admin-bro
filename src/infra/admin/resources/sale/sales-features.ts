import uploadFileFeature from '@admin-bro/upload'
import { FeatureType } from 'admin-bro'
import {env} from '../../../cdn/env'

export const SalesFeatures: Array<FeatureType> = [
  uploadFileFeature({
    properties: {
      key: 'document.path',
      mimeType: 'document.mimeType',
      bucket: 'document.folder',
      size: 'document.size',
      filename: 'document.filename',
      file: 'document'
    },
    provider: {
      aws: {
        bucket: env.AWS_BUCKET,
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
        region: env.AWS_REGION,
        expires: 10,
      },
    },
    validation: {
      mimeTypes: ['application/pdf'],
    },
  }),
]
