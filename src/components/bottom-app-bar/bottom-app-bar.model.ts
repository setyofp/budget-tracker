export interface AppIcon {
  title: string;
  icon: IconState;
  isActive: boolean;
}

interface IconState {
  outline: string;
  fill: string;
}

export const Icons: AppIcon[] = [
  {
    title: 'Dashboard',
    isActive: false,
    icon: {
      outline: 'material:analytics-outline',
      fill: 'material:analytics-fill',
    },
  },
  {
    title: 'Pocket',
    isActive: false,
    icon: {
      outline: 'material:wallet-outline',
      fill: 'material:wallet-fill',
    },
  },
  {
    title: 'Records',
    isActive: false,
    icon: {
      outline: 'material:payments-outline',
      fill: 'material:payments-fill',
    },
  },
];
