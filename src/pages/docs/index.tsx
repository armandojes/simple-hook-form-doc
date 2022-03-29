import { FC } from 'react';
import LayoutDividedWithMenu, { ReImenuItems } from '../../components/layoutDividedWithMenu';

const menuItems: ReImenuItems = [
  { label: 'option 1', location: 'deff' },
  { label: 'option 2', location: 'deff' },
];

const Docs: FC = () => (
  <LayoutDividedWithMenu menuItems={menuItems}>
    <h1>helo components</h1>
  </LayoutDividedWithMenu>
);

export default Docs;
