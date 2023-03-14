import { FC } from 'react';
import { ReactComponent as ShapeIcon } from '../../assets/icons/Shape.svg';
import { IPage } from '../../interface/page';
import s from './Header.module.css';

const Header: FC<IPage> = ({ title }) => (
  <div className={s.header}>
    <ShapeIcon />
    <h2>{title || 'Great Project'}</h2>
  </div>
);

export default Header;
