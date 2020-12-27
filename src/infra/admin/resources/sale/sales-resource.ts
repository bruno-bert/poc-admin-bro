import { ResourceOptions } from 'admin-bro'
import { SalesParent } from '../../parents'
import { SalesActions as actions } from './sales-actions'

export const SalesResource: ResourceOptions = {
  parent: SalesParent,
  

  /** TODO - separate actions in other file */
  actions: {
    exporter: {
      actionType: 'resource',
      icon: 'Export',
    },
    export: {
      actionType: 'resource',
      icon: 'DocumentExport',
      variant: 'light',
      parent: 'exporter',
    },
    import: {
      actionType: 'resource',
      icon: 'DocumentImport',
      variant: 'light',
      parent: 'exporter',
    },
  },
 

  properties: {
    userId: {
      reference: 'Users',
      position: 10,
    },
    document: {
      type: 'mixed',
    },
   
   /*  description: {
      type: 'richtext',
      props: {
        quill: {
          theme: 'bubble',
          modules: {
            toolbar: [['bold', 'italic'], ['link', 'image']],
          }
        }
      }
    }, */
  },
}
