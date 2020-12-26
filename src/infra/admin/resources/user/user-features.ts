import { FeatureType } from 'admin-bro'
import passwordFeature from '@admin-bro/passwords'
import uploadFeature from '@admin-bro/upload'

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
      key: 'profilePhoto.bucketKey',
      mimeType: 'profilePhoto.mimeType',
      bucket: 'profilePhoto.bucket',
    },
    provider: {
     /*  gcp: {
        bucket: process.env.USERS_BUCKET as string,
        expires: 0,
      }, */
      local: { bucket: 'public' }
    },
    validation: {
      mimeTypes: ['image/jpeg', 'image/png'],
    },
  }),
]