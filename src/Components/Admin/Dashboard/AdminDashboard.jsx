import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { getProductGenderDistribution, getProductLuxuryDistribution, getProductBlockStatusDistribution, getProductCategoryDistribution } from '../../../Services/AdminApi';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [genderData, setGenderData] = useState({});
  const [luxuryData, setLuxuryData] = useState({});
  const [blockStatusData, setBlockStatusData] = useState({});
  const [categoryData, setCategoryData] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    getProductGenderDistribution()
      .then(response => {
        const data = response.data || [];
        const labels = data.map(item => item._id);
        const counts = data.map(item => item.count);
        setGenderData({
          labels,
          datasets: [{
            data: counts,
            backgroundColor: ['#ab4935', '#627650'],
          }]
        });
      })
      .catch(error => {
        console.error('Error fetching gender distribution:', error);
        setError('Error fetching gender distribution');
      });

    getProductLuxuryDistribution()
      .then(response => {
        const data = response.data || [];
        const labels = data.map(item => item._id ? 'Luxury' : 'Non-Luxury');
        const counts = data.map(item => item.count);
        setLuxuryData({
          labels,
          datasets: [{
            data: counts,
            backgroundColor: ['#d5ad59', '#ab4935'],
          }]
        });
      })
      .catch(error => {
        console.error('Error fetching luxury distribution:', error);
        setError('Error fetching luxury distribution');
      });

    getProductBlockStatusDistribution()
      .then(response => {
        const data = response.data || [];
        const labels = data.map(item => item._id ? 'Blocked' : 'Active');
        const counts = data.map(item => item.count);
        setBlockStatusData({
          labels,
          datasets: [{
            data: counts,
            backgroundColor: ['#ab4935', '#627650'],
          }]
        });
      })
      .catch(error => {
        console.error('Error fetching block status distribution:', error);
        setError('Error fetching block status distribution');
      });

    getProductCategoryDistribution()
      .then(response => {
        const data = response.data || [];
        const labels = data.map(item => item._id);
        const counts = data.map(item => item.count);
        setCategoryData({
          labels,
          datasets: [{
            data: counts,
            backgroundColor: ['#627650', '#ab4935', '#d5ad59', '#786982'],
          }]
        });
      })
      .catch(error => {
        console.error('Error fetching category distribution:', error);
        setError('Error fetching category distribution');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='workspace-page'>
      <h2 className='workspace-title'>Product Distributions</h2>
      <div className='charts'>
        <div className="mb-10">
          <h3 className='text-center mb-[10px] text-lg'>Gender Distribution</h3>
          {genderData.labels ? <Pie data={genderData} className="w-[100%] max-w-[600px] mx-auto" /> : <p>Loading...</p>}
        </div>
        <div className="mb-10">
          <h3 className='text-center mb-[10px] text-lg'>Luxury Distribution</h3>
          {luxuryData.labels ? <Pie data={luxuryData} className="w-[100%] max-w-[600px] mx-auto" /> : <p>Loading...</p>}
        </div>
        <div className="mb-10">
          <h3 className='text-center mb-[10px] text-lg'>Block Status Distribution</h3>
          {blockStatusData.labels ? <Pie data={blockStatusData} className="w-[100%] max-w-[600px] mx-auto" /> : <p>Loading...</p>}
        </div>
        <div className="mb-10">
          <h3 className='text-center mb-[10px] text-lg'>Category Distribution</h3>
          {categoryData.labels ? <Pie data={categoryData} className="w-[100%] max-w-[600px] mx-auto" /> : <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
