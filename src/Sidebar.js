import React from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import './Sidebar.css'; // Import CSS file for styling

function Sidebar({ openSidebarToggle, OpenSidebar, handleOptionSelect }) {
  
  const handleOptionClick = (option) => {
    handleOptionSelect(option);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> COLORS
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item' onClick={() => handleOptionClick('dashboard')}>
          <a href="#">
            <BsGrid1X2Fill className='icon' />Silent Serenade





          </a>
        </li>
        <li className='sidebar-list-item' onClick={() => handleOptionClick('products')}>
          <a href="#">
            <BsFillArchiveFill className='icon' /> Enchanted Verdant
          </a>
        </li>
        <li className='sidebar-list-item' onClick={() => handleOptionClick('categories')}>
          <a href="#">
            <BsFillGrid3X3GapFill className='icon' /> Twilight Amethyst
          </a>
        </li>
        <li className='sidebar-list-item' onClick={() => handleOptionClick('customers')}>
          <a href="#">
            <BsPeopleFill className='icon' /> Steel Symphony
          </a>
        </li>
        <li className='sidebar-list-item' onClick={() => handleOptionClick('inventory')}>
          <a href="#">
            <BsListCheck className='icon' />Sunset Blush
          </a>
        </li>
        <li className='sidebar-list-item' onClick={() => handleOptionClick('reports')}>
          <a href="#">
            <BsMenuButtonWideFill className='icon' />Lavender Dreamscape
          </a>
        </li>
        <li className='sidebar-list-item' onClick={() => handleOptionClick('settings')}>
          <a href="#">
            <BsFillGearFill className='icon' /> Enchanted Bloom
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;