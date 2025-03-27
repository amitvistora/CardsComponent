import './App.css';
import { Box } from '@mui/material';
import  InfoCard from './components/InfoCard/cards';


function App() {
  return (
    <div className="App">
      <Box display="flex" flexWrap="wrap" p={2}>
        <InfoCard
          title="Data Source"
          logo="/images/snowflake-logo.svg"
          mainTech="Snowflake"
          name="Data Source 1"
          addedOn="03 Mar 2023 14:30"
        />
        
        <InfoCard
          title="Data Pipeline"
          logo="/images/airflow-logo.svg"
          mainTech="Apache Airflow"
          name="Data Pipeline 1"
          addedOn="03 Mar 2023 14:30"
        />
      </Box>
    </div>
  );
}

export default App;