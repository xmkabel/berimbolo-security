import { useState, useEffect } from 'react';
import React, { Component } from 'react';
import './Products.css';
import data from './data.json';
const Products = () => {
  const [customerType, setCustomerType] = React.useState('individual');
  const [needType, setNeedType] = React.useState('product');
  const [selectedCategory, setSelectedCategory] = React.useState('cctv');
  const [categories, setCategories] = React.useState([]);

  const productCategories = [
    { id: 'cctv', label: 'CCTV' },
    { id: 'access', label: 'Access' },
    { id: 'smart-locks', label: 'Smart Locks' },
    { id: 'network', label: 'Network' }
  ];

  const serviceCategories = [
    { id: 'cloud', label: 'Cloud' },
    { id: 'network', label: 'Network' },
    { id: 'access', label: 'Access' }
  ];

  const items = data;

  React.useEffect(() => {
    const newCategories = (needType === 'product' ? productCategories : serviceCategories);
    setCategories(newCategories);
    setSelectedCategory(newCategories[0].id);
  }, [needType]);

  const filteredItems = items.filter(item =>
    item.type === needType &&
    item.category === selectedCategory &&
    item.customerType === customerType
  );

  return (

    <div className="container" id='products'>
      <h2 className="title">Our Services and Products</h2>

      <div className="filters">
        <div className="filter-group">
          <span className="filter-label">I am a/an</span>
          <div className="button-group">
            <button
              className={`filter-button ${customerType === 'individual' ? 'active' : ''}`}
              onClick={() => setCustomerType('individual')}
            >
              Individual
            </button>
            <button
              className={`filter-button ${customerType === 'company' ? 'active' : ''}`}
              onClick={() => setCustomerType('company')}
            >
              Company
            </button>
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-label">I need a</span>
          <div className="button-group">
            <button
              className={`filter-button ${needType === 'product' ? 'active' : ''}`}
              onClick={() => setNeedType('product')}
            >
              Product
            </button>
            <button
              className={`filter-button ${needType === 'service' ? 'active' : ''}`}
              onClick={() => setNeedType('service')}
            >
              Service
            </button>
          </div>
        </div>
      </div>

      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="card">
            <div className="card-image-container">
              <img
                src={item.image}
                alt={item.name}
                className="card-image"
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-description">{item.description}</p>
              <div style={{ marginTop: 'auto' }}>
                <ul className="features-list" >
                  {item.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="badge badge-pill badge-primary" style={{backgroundColor:"#2B354F"}}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <button className="learn-more-button">
                Learn More
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
// ReactDOM.render(<ProductSection />, document.getElementById('root'));
