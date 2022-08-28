import MenuItem from './MenuItem';

function Menu() {
  return (
    <div className="menu">
      <div className="container flex col">
        <h1 className="menu-title">Salads</h1>
        <div className="menu-items flex">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </div>
    </div>
  );
}

export default Menu;
