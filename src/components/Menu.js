import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
import data from '../data/salads.json';

function Menu() {
  return (
    <motion.div
      className="menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className="container flex col">
        <h1 className="menu-title"> Salads </h1>{' '}
        <div className="menu-items flex">
          {data.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Menu;
