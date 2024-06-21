import React from 'react';

// const initialValue = {
//     isTabHidden: false,
// }

// Create the context
export const MyContext = React.createContext({
  isTabHidden: false,
  setIsTabHidden: React.Dispatch<React.SetStateAction<boolean>>, // Placeholder function
});

type Props = {
  children: React.ReactNode;
};

export const MyProvider = ({children}: Props) => {
  const [isTabHidden, setIsTabHidden] = React.useState(false);
  const myData = {isTabHidden, setIsTabHidden};

  return <MyContext.Provider value={myData}>{children}</MyContext.Provider>;
};
