import { FC } from 'react';
import LayoutDividedWithMenu, { ImenuItems } from '../../components/layoutDividedWithMenu';
import BasicUsage from './components/basicUsage';
import Introduction from './components/Introduction';
import RegisterInput from './components/registerInput';

const menuItems: ImenuItems = [
  { label: 'Introducción', location: '/docs#start' },
  { label: 'Ejemplo básico', location: '/docs#basic-usage' },
  { label: 'RegisterInput', location: '/docs#register-input' },
];

const Docs: FC = () => (
  <LayoutDividedWithMenu menuItems={menuItems}>
    <>
      <Introduction />
      <BasicUsage />
      <RegisterInput />
    </>
  </LayoutDividedWithMenu>
);

export default Docs;
