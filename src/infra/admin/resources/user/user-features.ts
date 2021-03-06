import { FeatureType } from 'admin-bro'
import passwordFeature from '@admin-bro/passwords'
import uploadFeature from '@admin-bro/upload'
import {env} from '../../../cdn/env'

import argon2 from 'argon2'

export const UserFeatures: Array<FeatureType> = [
  passwordFeature({
    properties: {
      encryptedPassword: 'encryptedPassword',
    },
    hash: argon2.hash,
  }),
  uploadFeature({

    properties: {
      key: 'profilePhoto.path',
      mimeType: 'profilePhoto.mimeType',
      bucket: 'profilePhoto.folder',
      size: 'profilePhoto.size',
      filename: 'profilePhoto.filename',
      file: 'profilePhoto'
    },
 

    provider: {
    
      aws: {
        bucket: env.AWS_BUCKET,
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
        region: env.AWS_REGION,
      },
     

    },
    validation: {
      mimeTypes: ['image/jpeg', 'image/png'],
    },
  }),
]