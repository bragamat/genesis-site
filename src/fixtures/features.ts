import {
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  PencilAltIcon,
  ReplyIcon,
  TrashIcon,
  UsersIcon
} from '@heroicons/react/outline'

export const servicos = [
  {
    name: 'Exercito Brasileiro',
    logo: '/img/exercito-brasileiro-logo.png',
    services: [
      {
        name: 'Certificado de Registro',
        description:
          'Concessão e renovação do Certificado de Registro no Exército Brasileiro (CR)',
        icon: InboxIcon
      },
      {
        name: 'Registro e renovação',
        description:
          'Registro e renovação de Certificado de Registro de Arma de Fogo (CRAF)',
        icon: UsersIcon
      },
      {
        name: 'Transferências',
        description:
          'Transferências de CAC para CAC, MILITARES para CAC, SIGMA-SINARM',
        icon: TrashIcon
      },
      {
        name: 'Emissão de Guias',
        description: 'Emissão de Guias de Trafego (GT)',
        icon: PencilAltIcon
      }
    ]
  },
  {
    name: 'Policia Federal',
    logo: '/img/policia-federal-logo.png',
    services: [
      {
        name: 'Apostilamentos',
        description:
          'Apostilamentos ao Certificado de Registro (CR) e atualização ou inclusão de dados',
        icon: DocumentReportIcon
      },
      {
        name: 'Posse de Arma',
        description: 'Posse de Arma de Fogo',
        icon: ReplyIcon
      },
      {
        name: 'Renovação',
        description: 'Renovação de registro',
        icon: ChatAltIcon
      },
      {
        name: 'Transferências',
        description: 'Transferências',
        icon: HeartIcon
      }
    ]
  }
]

export const features = [
  {
    name: 'Certificado de Registro',
    description:
      'Concessão e renovação do Certificado de Registro no Exército Brasileiro (CR)',
    icon: InboxIcon
  },
  {
    name: 'Registro e renovação',
    description:
      'Registro e renovação de Certificado de Registro de Arma de Fogo (CRAF)',
    icon: UsersIcon
  },
  {
    name: 'Transferências',
    description:
      'Transferências de CAC para CAC, MILITARES para CAC, SIGMA-SINARM',
    icon: TrashIcon
  },
  {
    name: 'Emissão de Guias',
    description: 'Emissão de Guias de Trafego (GT)',
    icon: PencilAltIcon
  },
  {
    name: 'Apostilamentos',
    description:
      'Apostilamentos ao Certificado de Registro (CR) e atualização ou inclusão de dados',
    icon: DocumentReportIcon
  },
  {
    name: 'Posse de Arma',
    description: 'Posse de Arma de Fogo',
    icon: ReplyIcon
  },
  {
    name: 'Renovação',
    description: 'Renovação de registro',
    icon: ChatAltIcon
  },
  {
    name: 'Transferências',
    description: 'Transferências',
    icon: HeartIcon
  }
]
