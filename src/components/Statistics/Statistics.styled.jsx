import styled from 'styled-components';

export const StatisticSection = styled.section`
  /* display: block; */
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  background-color: #dddddd;
`;

export const StatisticTitle = styled.h2`
  text-align: center;
`;

export const StatisticList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
`;

export const StatisticListItem = styled.li`
  width: 200px;
  /* border-style: solid; */
  background-color: whitesmoke;
`;

export const StatisticLabel = styled.span`
  display: block;
  text-align: center;

  font-size: 36px;
`;

export const StatisticPercentage = styled.span`
  margin-top: 15px;
  display: block;
  text-align: center;
  font-size: 48px;
`;
