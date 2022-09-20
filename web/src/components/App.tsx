import React, { useState } from 'react';
import './App.css';
import { debugData } from '../utils/debugData';
import { fetchNui } from '../utils/fetchNui';
import useAppStates from '../hooks/useAppStates';

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  },
]);

interface ReturnClientDataCompProps {
  data: any;
}

const ReturnClientDataComp: React.FC<ReturnClientDataCompProps> = ({
  data,
}) => (
  <>
    <h5>Returned Data:</h5>
    <pre>
      <code>{JSON.stringify(data, null)}</code>
    </pre>
  </>
);

interface ReturnData {
  x: number;
  y: number;
  z: number;
}

const App: React.FC = () => {
  const [clientData, setClientData] = useState<ReturnData | null>(null);
  const { example } = useAppStates();

  const handleGetClientData = () => {
    fetchNui<ReturnData>('getClientData')
      .then((retData) => {
        console.log('Got return data from client scripts:');
        console.dir(retData);
        setClientData(retData);
      })
      .catch((e) => {
        console.error('Setting mock data due to error', e);
        setClientData({ x: 500, y: 300, z: 200 });
      });
  };

  return (
    <div className='container mx-auto py-10'>
      <div className='card bg-base-100'>
        <div className='card-body'>
          <h1 className='card-title'>This is the NUI Popup!</h1>
          <p>Exit with the escape key</p>
          {clientData && <ReturnClientDataComp data={clientData} />}
          {example && <p>Example: {example.data}</p>}
          <div className='card-actions justify-end'>
            <button className='btn btn-primary' onClick={handleGetClientData}>
              Get Client Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
